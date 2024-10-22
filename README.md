# UpgradeableERC721-NFT

This project is a template for an upgradeable ERC721 (NFT) smart contract, it waas built using OpenZeppelin's proxy pattern. The contract allows for NFTs to be minted, transferred, and upgraded over time while preserving data and state. It includes scripts for deployment, testing, and upgrading the contract on Ethereum-compatible blockchains.

## Table of Contents

- Introduction
- Features
- Technologies
- Installation
- Usage
- Testing
- Deployment
- Upgrading

## Introduction

This project provides a standard ERC721 implementation with upgradeability features. The smart contract follows the OpenZeppelin upgradeable contract pattern, allowing for future modifications and improvements without losing the existing state.

## Features

- Upgradeable ERC721 smart contract.
- Safe minting, transferring, and burning of NFTs.
- Compliant with the ERC721 standard.
- Proxy contract for upgradeability.
- Test suite for contract functionalities using Hardhat/Truffle.
- Scripted deployment and upgrade process.

## Technologies

This project is built using the following tools and libraries:

- [Solidity](https://soliditylang.org/) - Smart contract programming language.
- [OpenZeppelin](https://openzeppelin.com/contracts/) - Library for secure smart contract development.
- [Hardhat](https://hardhat.org/) - Development environment for Ethereum smart contracts.
- [Ethers.js](https://docs.ethers.io/) - JavaScript library to interact with Ethereum.
- [Node.js](https://nodejs.org/) - JavaScript runtime environment.
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/) - Testing framework and assertion library.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KineticsOfWeb3/Upgradeable-ERC721-NFT.git
   cd Upgradeable-ERC721-NFT
   ```

INSTALL
yarn/npm install

## USAGE Compile the smart contract

npx hardhat compile
(or use yarn)

## Testing

You can test the contract using Hardhat's test framework. The project includes unit tests
to verify the functionality of the ERC721 NFT contract. npx hardhat test

## Deployment

Deploy the upgradeable contract:

To deploy the proxy and the logic contract, run the following command:
npx hardhat run scripts/deploy.js --network robsten/localhost

Deploy upgrades:

If you need to deploy an upgrade to the contract, modify the logic contract, and deploy the upgrade using:
npx hardhat run scripts/upgrade.js --network robsten/localhost

## Run the unit testing with: npx hardhat test

## Upgrading

I Use OpenZeppelin's proxy upgrade pattern, allowing for seamless upgrades without resetting state. To upgrade the contract:
Make modifications to the logic contract.

Run the upgrade script:
npx hardhat run scripts/upgrade.js --network robsten/localhost
I now verify that the new logic is functioning as expected by running the tests again.

//
