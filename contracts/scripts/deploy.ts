import { ethers } from "hardhat";

async function main() {
  const StudentSocietyDAO = await ethers.getContractFactory("StudentSocietyDAO");
  const studentSocietyDAO = await StudentSocietyDAO.deploy();
  await studentSocietyDAO.deployed();
  console.log(`StudentSocietyDAO deployed to ${studentSocietyDAO.address}`);

  const erc20 = await studentSocietyDAO.myERC20()
  console.log(`erc20 deployed to ${erc20}`)

  /*const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy();
  await lottery.deployed();
  console.log(`lottery contract has been deployed successfully in ${lottery.address}`)

  const erc20 = await lottery.myERC20()
  console.log(`erc20 contract has been deployed successfully in ${erc20}`)*/
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
