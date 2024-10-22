const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("MyERC721Upgradeable", function () {
  let myERC721, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const MyERC721Upgradeable = await ethers.getContractFactory(
      "MyERC721Upgradeable"
    );
    myERC721 = await upgrades.deployProxy(MyERC721Upgradeable, [
      "MyNFT",
      "MNFT",
    ]);
    await myERC721.deployed();
  });

  it("should mint NFTs to the specified address", async function () {
    await myERC721.mint(addr1.address, 1);
    expect(await myERC721.ownerOf(1)).to.equal(addr1.address);
  });
});
