import { readable } from 'svelte/store';

export const GWTAbi = readable([
    'function balanceOf(address account) external view returns (uint256)',
    'function mintMeSome(uint256 amount) public',
    'function burnMeSome(uint256 amount) public',
    'function allowance(address owner, address spender) public view returns (uint256)',
    'function approve(address spender, uint256 amount) public returns (bool)',
    'event mintedCoins(address to, uint256 amount)',
    'event burnedCoins(address to, uint256 amount)'
]);

export const USDCtAbi = readable([
    'function balanceOf(address account) external view returns (uint256)',
    'function allowance(address owner, address spender) public view returns (uint256)',
    'function approve(address spender, uint256 amount) public returns (bool)'
]);

export const GWTAbiJs = [
    'function balanceOf(address account) external view returns (uint256)',
    'function mintMeSome(uint256 amount) public',
    'function burnMeSome(uint256 amount) public',
    'function allowance(address owner, address spender) public view returns (uint256)',
    'function approve(address spender, uint256 amount) public returns (bool)',
    'event mintedCoins(address to, uint256 amount)',
    'event burnedCoins(address to, uint256 amount)'
]; 

export const USDCtAbiJs = [
    'function balanceOf(address account) external view returns (uint256)',
    'function allowance(address owner, address spender) public view returns (uint256)',
    'function approve(address spender, uint256 amount) public returns (bool)'
];
