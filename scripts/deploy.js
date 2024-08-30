require("hardhat");

async function main() {
  const IDeyVex = await ethers.deployContract("IDeyVex");

  await IDeyVex.waitForDeployment();

  console.log("IDeyVex Contract Deployed at " + IDeyVex.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
