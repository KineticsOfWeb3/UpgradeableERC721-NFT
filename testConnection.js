require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_URL);

  // Check if the connection works
  const blockNumber = await provider.getBlockNumber();
  console.log("Connected to Sepolia! Current block number:", blockNumber);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
