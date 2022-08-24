// pedazo de codigo de ethers-store

const getGlobalObject = () => {
    if (typeof globalThis !== 'undefined') {
      return globalThis
    }
    if (typeof self !== 'undefined') {
      return self
    }
    if (typeof window !== 'undefined') {
      return window
    }
    if (typeof global !== 'undefined') {
      return global
    }
    throw new Error('[svelte-ethers-store] cannot find the global object')
  }
  
export const getWindowEthereum = () => {
    try {
      if (getGlobalObject().ethereum) return getGlobalObject().ethereum
    } catch (err) {
      console.error('[svelte-ethers-store] no globalThis.ethereum object')
    }
  }
  
const mumbai = {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Mumbai",
    nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18
    },
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com"]
}


// chain and account change
//

const changeNetwork = async () => {
    try {
      await  getWindowEthereum().request({
        method: "wallet_addEthereumChain",
        params: [mumbai]
      });
    } catch (err) {
      console.log("no funco: ", err.message);
    }
  };
  

const handleNetworkSwitch = async() => {
    await changeNetwork();

}

export const handleChainChanged = () => {
try {
  getWindowEthereum().on('chainChanged', (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    console.log("hubo un cambio de red: ",chainId)
    window.location.reload();
    handleNetworkSwitch("polygon")
  }); 
} catch (err) {
console.log("error! la cadena esta mal")
    }   
}

export const handleAccountsChanged = () => {
    try {
        getWindowEthereum().on('accountsChanged', (accounts) => {
        // Handle the new accounts, or lack thereof.
        // "accounts" will always be an array, but it can be empty.
        console.log("hubo un cambio de usuario: ", accounts)
        //window.location.reload();
        }); 
    } catch (err) {
    console.log("error! la cuenta le pasa algo")
        }   
    }


// @dev: couldnt import the stores :(
// tokens handles
export const addGersteToken = () => {
    try {
        getWindowEthereum().request({
            method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: '0x183254eaDCCb36779132eDD22e31e7B5500aEcE8', // The address that the token is at.
        symbol: "GEWT", // A ticker symbol or shorthand, up to 5 chars.
        decimals: "18", // The number of decimals in the token
        }}})
    } catch (err) {
    console.log("error!")
        }   
    }

export const addUSDCtToken = () => {
    try {
        getWindowEthereum().request({
            method: 'wallet_watchAsset',
    params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
        address: '0x433E75eB0E582b8a4b9a4706977Ed90A85F671AA', // The address that the token is at.
        symbol: "USDCtes", // A ticker symbol or shorthand, up to 5 chars.
        decimals: "18", // The number of decimals in the token
        }}})
    } catch (err) {
    console.log("error!")
        }   
    }