// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the required OpenZeppelin contracts
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

// Define the contract inheriting from Initializable, ERC721Upgradeable, and OwnableUpgradeable
contract MyERC721Upgradeable is
    Initializable,
    ERC721Upgradeable,
    OwnableUpgradeable
{
    // The initialize function is called only once when the contract is deployed
    function initialize(
        string memory name,
        string memory symbol
    ) public initializer {
        __ERC721_init(name, symbol); // Initialize the ERC721 with the provided name and symbol
        __Ownable_init(msg.sender); // Initialize the Ownable functionality
    }

    // Mint function to create new tokens
    function mint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId); // Mint the token and ensure safety
    }
}
