// SPDX-License-Identifier: MIT
/**
 * ██████╗░██╗░░░░░░█████╗░░█████╗░██╗░░██╗██████╗░██████╗░
 * ██╔══██╗██║░░░░░██╔══██╗██╔══██╗██║░██╔╝╚════██╗╚════██╗
 * ██████╦╝██║░░░░░██║░░██║██║░░╚═╝█████═╝░░█████╔╝░█████╔╝
 * ██╔══██╗██║░░░░░██║░░██║██║░░██╗██╔═██╗░░╚═══██╗░╚═══██╗
 * ██████╦╝███████╗╚█████╔╝╚█████╔╝██║░╚██╗██████╔╝██████╔╝
 * ╚═════╝░╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚═════╝░╚═════╝░
 *
 * █▀█ █▀█ █▀▀ █▀ █▀▀ █▄░█ ▀█▀ █▀
 * █▀▀ █▀▄ ██▄ ▄█ ██▄ █░▀█ ░█░ ▄█
 *
 * GersteWein Token:
 * A token for your beer
 *
 * This token is product of a place that puts some meaning,
 * into the life of all the people in it.
 * Also some beer in the belly.
 *
 */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GersteWeinToken is ERC20 {
    address public USDcoin;

    address public owner;
    address public admin;

    uint256 public price;

    uint256 public blockTime;

    // events
    event MintedCoins(address indexed to, uint256 amount);
    event SwappedCoins(address indexed to, uint256 amount);
    event TokenRecovery(address indexed token, uint256 amount);
    event USDcoinSet(address newContract);
    event adminChanged(address _admin);

    /**
     * Administrative stuff
     * @dev admin is an extra role, the owner of the actual brewery
     *
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "No sos el duenno papu");
        _;
    }

    modifier onlyAdmin() {
        require(
            msg.sender == admin || msg.sender == owner,
            "No sos admin guachin"
        );
        _;
    }

    modifier blockHalt() {
        if (blockTime != 0) {
            require(block.number >= (blockTime + 15000), "Hay que esperar");
        }
        _;
    }

    constructor() ERC20("GersteWeinToken", "GWT") {
        owner = msg.sender;
        admin = msg.sender;
        price = 1;
    }

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    /**
     * @param newAdmin the owner can be changed in case of lost keys
     */
    function setNewAdmin(address newAdmin) external onlyOwner {
        admin = newAdmin;
        emit adminChanged(newAdmin);
    }

    /**
     * @param newPrice this is to account for fiat inflation
     * beware that it only has been tested with 1 wei
     * since integer division gets annoying complicated
     */
    function setPrice(uint256 newPrice) external onlyAdmin {
        price = newPrice;
    }

    function getPrice() public view returns (uint256) {
        return price;
    }

    /**
     * @param newContract this function is pretended to be used once
     * since changing the USDcoin variable affects the whole function
     * of the contract.
     * Why is this here then ? Because of UST collapse.
     */
    function setUSDcoin(address newContract) external onlyOwner blockHalt {
        if (newContract != address(0)) {
            USDcoin = newContract;
            blockTime = block.number;
            emit USDcoinSet(newContract);
        }
    }

    /**
     * @dev coin minting process
     * @param amount amount expressed to be swapped to USDcoin
     */
    function mintMeSome(uint256 amount) external {
        address _from = msg.sender;
        address _to = address(this);
        uint256 _balance = IERC20(USDcoin).balanceOf(_from);

        require(_from != address(0), "ERC20: transfer from the zero address");
        require(_to != address(0), "ERC20: transfer to the zero address");

        // @dev check balance
        require(_balance >= amount, "No tenes USD suficiente");

        // @dev transfer USDc
        IERC20(USDcoin).transferFrom(_from, _to, amount);

        uint256 _newBalance = IERC20(USDcoin).balanceOf(_from);
        require(_newBalance <= _balance, "Alerta de rentrancia!");
        // minting
        _mint(_from, amount);
        emit MintedCoins(_from, amount);
    }

    /**
     * @dev coin swapping
     * @param amount amount expressed to be swapped to GersteWeinToken
     */
    function swapMeSome(uint256 amount) external {
        address _from = msg.sender;
        uint256 _balance = IERC20(address(this)).balanceOf(_from);

        require(_from != address(0), "ERC20: transfer from the zero address");

        // @dev check balance or revert
        require(_balance >= amount, "No tenes GersteWeinToken suficiente");

        // transfer USDc
        IERC20(USDcoin).transfer(_from, amount);

        uint256 _newBalance = IERC20(address(this)).balanceOf(_from);
        require(_newBalance <= _balance, "Alerta de rentrancia!");

        // burning
        _burn(_from, amount);
        emit SwappedCoins(_from, amount);
    }

    /**
     * @dev It allows the owner to recover tokens sent to the contract by mistake
     * If there is need to recover USDcoin that happens in a different function.
     * @param _token: token address
     * @param _amount: token amount
     * @dev Callable by owner
     */
    function recoverLostToken(
        address _token,
        uint256 _amount
    ) external onlyAdmin {
        if (_token != USDcoin) {
            IERC20(_token).transfer(address(msg.sender), _amount);
            emit TokenRecovery(_token, _amount);
        }
    }

    /**
     * @dev retrieve the difference of USDcoin in this contract.
     * It always stays positive so the contract can have
     * liquidity against the token.
     * Use with care. Will fail if there is no positive outcome.
     */
    function recoverLostUSD() external onlyAdmin {
        uint256 _balance = IERC20(USDcoin).balanceOf(address(this));
        uint256 _totalBalance = totalSupply();

        uint256 _lostUSD = (_balance - _totalBalance);

        require(_lostUSD != 0, "No hay USD atrapado");
        assert(_totalBalance < _balance);

        IERC20(USDcoin).transfer(address(msg.sender), _lostUSD);
        emit TokenRecovery(USDcoin, _lostUSD);
    }
}
