const { ethers, upgrades } = require("hardhat");

async function main() {
  // Get the contract factory for MyERC721Upgradeable
  const MyERC721Upgradeable = await ethers.getContractFactory(
    "MyERC721Upgradeable"
  );

  try {
    // Deploy the proxy contract
    const myERC721 = await upgrades.deployProxy(
      MyERC721Upgradeable,
      ["MyNFT", "MNFT"],
      { initializer: "initialize" } // i Use the initializer method from my contract
    );

    await myERC721.getAddress();

    // Log the deployed contract's address
    console.log("MyERC721 deployed to:", await myERC721.getAddress());
  } catch (error) {
    console.error("Deployment failed:", error);
  }
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
