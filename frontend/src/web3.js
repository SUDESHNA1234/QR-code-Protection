const Web3 = require('web3');
const web3 = new Web3('http://localhost:5000');
//const contractABI = [...]; // replace with the ABI of the deployed contract
//const contractAddress = '0x...'; // replace with the address of the deployed contract

//const result = new web3.eth.Contract(contractABI, contractAddress);

const result = await contract.methods.addData(data).send({ from: accounts[0] });

const txHash = result.transactionHash;




