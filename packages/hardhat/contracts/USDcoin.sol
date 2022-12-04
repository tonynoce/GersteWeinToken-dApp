// SPDX-License-Identifier: MIT
// USDCtestnet contract to mint USDC at a 100x ratio

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDcoin is ERC20 {
    constructor() ERC20("USDCtestnet", "USDCt") {
        console.log("Tamo deployeando un contrato de mock USDc");
        _mint(msg.sender, 500 ether);
        console.log("se mandaron 500 al msg sender");
    }
}
