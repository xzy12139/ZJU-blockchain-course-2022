/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StudentSocietyDAO,
  StudentSocietyDAOInterface,
} from "../../contracts/StudentSocietyDAO";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getData",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "index",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "voteup",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "votedown",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "due",
            type: "bool",
          },
        ],
        internalType: "struct StudentSocietyDAO.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "myERC20",
    outputs: [
      {
        internalType: "contract MyERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "num",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "voteup",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "votedown",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "due",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ind",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atti",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ind",
        type: "uint256",
      },
    ],
    name: "voteEnd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260008060006101000a81548163ffffffff021916908363ffffffff1602179055503480156200003257600080fd5b506040516200004190620000b0565b6200004c906200016f565b604051809103906000f08015801562000069573d6000803e3d6000fd5b50600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001a6565b6119c180620014bd83390190565b600082825260208201905092915050565b7f5a4a55546f6b656e000000000000000000000000000000000000000000000000600082015250565b600062000107600883620000be565b91506200011482620000cf565b602082019050919050565b7f5a4a55546f6b656e53796d626f6c000000000000000000000000000000000000600082015250565b600062000157600e83620000be565b915062000164826200011f565b602082019050919050565b600060408201905081810360008301526200018a81620000f8565b905081810360208301526200019f8162000148565b9050919050565b61130780620001b66000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063687445641161005b57806368744564146100f45780636d3739c4146100fe578063b384abef1461011c578063dd932c5b146101385761007d565b8063013cf08b146100825780633bc5de30146100b85780634e70b1dc146100d6575b600080fd5b61009c60048036038101906100979190610b64565b610154565b6040516100af9796959493929190610c1b565b60405180910390f35b6100c0610203565b6040516100cd9190610e03565b60405180910390f35b6100de610359565b6040516100eb9190610e25565b60405180910390f35b6100fc61036d565b005b6101066105f0565b6040516101139190610e9f565b60405180910390f35b61013660048036038101906101319190610eba565b610616565b005b610152600480360381019061014d9190610b64565b610922565b005b6001818154811061016457600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900463ffffffff16908060000160049054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900463ffffffff16908060030160049054906101000a900463ffffffff16908060030160089054906101000a900460ff16905087565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561035057838290600052602060002090600402016040518060e00160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016003820160049054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016003820160089054906101000a900460ff16151515158152505081526020019060010190610227565b50505050905090565b60008054906101000a900463ffffffff1681565b60016040518060e0016040528060008054906101000a900463ffffffff1663ffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200160148152602001600063ffffffff168152602001600063ffffffff16815260200160001515815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600101556060820151816002015560808201518160030160006101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160030160046101000a81548163ffffffff021916908363ffffffff16021790555060c08201518160030160086101000a81548160ff021916908315150217905550505060008081819054906101000a900463ffffffff168092919061051c90610f29565b91906101000a81548163ffffffff021916908363ffffffff16021790555050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd333060036040518463ffffffff1660e01b815260040161059b93929190610f91565b602060405180830381600087803b1580156105b557600080fd5b505af11580156105c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ed9190610ff4565b50565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080600001836064811061066f5761066e611021565b5b602091828204019190069054906101000a900460ff16156106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc906110ad565b60405180910390fd5b600183815481106106d9576106d8611021565b5b906000526020600020906004020160020154600184815481106106ff576106fe611021565b5b90600052602060002090600402016001015461071b91906110cd565b421061075c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107539061116f565b60405180910390fd5b600181600001846064811061077457610773611021565b5b602091828204019190066101000a81548160ff021916908315150217905550600082141561080557600183815481106107b0576107af611021565b5b9060005260206000209060040201600301600081819054906101000a900463ffffffff16809291906107e190610f29565b91906101000a81548163ffffffff021916908363ffffffff1602179055505061086a565b6001838154811061081957610818611021565b5b9060005260206000209060040201600301600481819054906101000a900463ffffffff168092919061084a90610f29565b91906101000a81548163ffffffff021916908363ffffffff160217905550505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd333060026040518463ffffffff1660e01b81526004016108ca939291906111ca565b602060405180830381600087803b1580156108e457600080fd5b505af11580156108f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091c9190610ff4565b50505050565b6001818154811061093657610935611021565b5b9060005260206000209060040201600201546001828154811061095c5761095b611021565b5b90600052602060002090600402016001015461097891906110cd565b42116109b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b09061124d565b60405180910390fd5b60018082815481106109ce576109cd611021565b5b906000526020600020906004020160030160086101000a81548160ff02191690831515021790555060018181548110610a0a57610a09611021565b5b906000526020600020906004020160030160049054906101000a900463ffffffff1663ffffffff1660018281548110610a4657610a45611021565b5b906000526020600020906004020160030160009054906101000a900463ffffffff1663ffffffff161115610b2657600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3360056040518363ffffffff1660e01b8152600401610ad29291906112a8565b602060405180830381600087803b158015610aec57600080fd5b505af1158015610b00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b249190610ff4565b505b50565b600080fd5b6000819050919050565b610b4181610b2e565b8114610b4c57600080fd5b50565b600081359050610b5e81610b38565b92915050565b600060208284031215610b7a57610b79610b29565b5b6000610b8884828501610b4f565b91505092915050565b600063ffffffff82169050919050565b610baa81610b91565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bdb82610bb0565b9050919050565b610beb81610bd0565b82525050565b610bfa81610b2e565b82525050565b60008115159050919050565b610c1581610c00565b82525050565b600060e082019050610c30600083018a610ba1565b610c3d6020830189610be2565b610c4a6040830188610bf1565b610c576060830187610bf1565b610c646080830186610ba1565b610c7160a0830185610ba1565b610c7e60c0830184610c0c565b98975050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610cbf81610b91565b82525050565b610cce81610bd0565b82525050565b610cdd81610b2e565b82525050565b610cec81610c00565b82525050565b60e082016000820151610d086000850182610cb6565b506020820151610d1b6020850182610cc5565b506040820151610d2e6040850182610cd4565b506060820151610d416060850182610cd4565b506080820151610d546080850182610cb6565b5060a0820151610d6760a0850182610cb6565b5060c0820151610d7a60c0850182610ce3565b50505050565b6000610d8c8383610cf2565b60e08301905092915050565b6000602082019050919050565b6000610db082610c8a565b610dba8185610c95565b9350610dc583610ca6565b8060005b83811015610df6578151610ddd8882610d80565b9750610de883610d98565b925050600181019050610dc9565b5085935050505092915050565b60006020820190508181036000830152610e1d8184610da5565b905092915050565b6000602082019050610e3a6000830184610ba1565b92915050565b6000819050919050565b6000610e65610e60610e5b84610bb0565b610e40565b610bb0565b9050919050565b6000610e7782610e4a565b9050919050565b6000610e8982610e6c565b9050919050565b610e9981610e7e565b82525050565b6000602082019050610eb46000830184610e90565b92915050565b60008060408385031215610ed157610ed0610b29565b5b6000610edf85828601610b4f565b9250506020610ef085828601610b4f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f3482610b91565b915063ffffffff821415610f4b57610f4a610efa565b5b600182019050919050565b6000819050919050565b6000610f7b610f76610f7184610f56565b610e40565b610b2e565b9050919050565b610f8b81610f60565b82525050565b6000606082019050610fa66000830186610be2565b610fb36020830185610be2565b610fc06040830184610f82565b949350505050565b610fd181610c00565b8114610fdc57600080fd5b50565b600081519050610fee81610fc8565b92915050565b60006020828403121561100a57611009610b29565b5b600061101884828501610fdf565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f416c726561647920766f74656420746869732070726f706f73616c2e00000000600082015250565b6000611097601c83611050565b91506110a282611061565b602082019050919050565b600060208201905081810360008301526110c68161108a565b9050919050565b60006110d882610b2e565b91506110e383610b2e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561111857611117610efa565b5b828201905092915050565b7f546869732070726f706f73616c20697320656e6465642e000000000000000000600082015250565b6000611159601783611050565b915061116482611123565b602082019050919050565b600060208201905081810360008301526111888161114c565b9050919050565b6000819050919050565b60006111b46111af6111aa8461118f565b610e40565b610b2e565b9050919050565b6111c481611199565b82525050565b60006060820190506111df6000830186610be2565b6111ec6020830185610be2565b6111f960408301846111bb565b949350505050565b7f546869732070726f706f73616c206973206e6f7420656e6465642e0000000000600082015250565b6000611237601b83611050565b915061124282611201565b602082019050919050565b600060208201905081810360008301526112668161122a565b9050919050565b6000819050919050565b600061129261128d6112888461126d565b610e40565b610b2e565b9050919050565b6112a281611277565b82525050565b60006040820190506112bd6000830185610be2565b6112ca6020830184611299565b939250505056fea26469706673582212200b9edf7bcf115d84e3453f77efb05e6a7eebd81e3b01ca5870981333da1fd4f864736f6c6343000809003360806040523480156200001157600080fd5b50604051620019c1380380620019c18339818101604052810190620000379190620002c2565b818181600390805190602001906200005192919062000075565b5080600490805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b61160580620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c578063a457c2d711610066578063a457c2d714610216578063a9059cbb14610246578063dd62ed3e14610276578063effc73a4146102a6576100cf565b8063395093511461019857806370a08231146101c857806395d89b41146101f8576100cf565b806306884fc8146100d457806306fdde03146100de578063095ea7b3146100fc57806318160ddd1461012c57806323b872dd1461014a578063313ce5671461017a575b600080fd5b6100dc6102b0565b005b6100e66102bd565b6040516100f39190610dc1565b60405180910390f35b61011660048036038101906101119190610e7c565b61034f565b6040516101239190610ed7565b60405180910390f35b610134610372565b6040516101419190610f01565b60405180910390f35b610164600480360381019061015f9190610f1c565b61037c565b6040516101719190610ed7565b60405180910390f35b6101826103ab565b60405161018f9190610f8b565b60405180910390f35b6101b260048036038101906101ad9190610e7c565b6103b4565b6040516101bf9190610ed7565b60405180910390f35b6101e260048036038101906101dd9190610fa6565b6103eb565b6040516101ef9190610f01565b60405180910390f35b610200610433565b60405161020d9190610dc1565b60405180910390f35b610230600480360381019061022b9190610e7c565b6104c5565b60405161023d9190610ed7565b60405180910390f35b610260600480360381019061025b9190610e7c565b61053c565b60405161026d9190610ed7565b60405180910390f35b610290600480360381019061028b9190610fd3565b61055f565b60405161029d9190610f01565b60405180910390f35b6102ae6105e6565b005b6102bb3360056106de565b565b6060600380546102cc90611042565b80601f01602080910402602001604051908101604052809291908181526020018280546102f890611042565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b5050505050905090565b60008061035a61083e565b9050610367818585610846565b600191505092915050565b6000600254905090565b60008061038761083e565b9050610394858285610a11565b61039f858585610a9d565b60019150509392505050565b60006012905090565b6000806103bf61083e565b90506103e08185856103d1858961055f565b6103db91906110a3565b610846565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461044290611042565b80601f016020809104026020016040519081016040528092919081815260200182805461046e90611042565b80156104bb5780601f10610490576101008083540402835291602001916104bb565b820191906000526020600020905b81548152906001019060200180831161049e57829003601f168201915b5050505050905090565b6000806104d061083e565b905060006104de828661055f565b905083811015610523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051a9061116b565b60405180910390fd5b6105308286868403610846565b60019250505092915050565b60008061054761083e565b9050610554818585610a9d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60001515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610679576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610670906111fd565b60405180910390fd5b6106843360646106de565b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561074e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074590611269565b60405180910390fd5b61075a60008383610d1e565b806002600082825461076c91906110a3565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107c191906110a3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516108269190610f01565b60405180910390a361083a60008383610d23565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad906112fb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610926576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091d9061138d565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a049190610f01565b60405180910390a3505050565b6000610a1d848461055f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a975781811015610a89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a80906113f9565b60405180910390fd5b610a968484848403610846565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b049061148b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b749061151d565b60405180910390fd5b610b88838383610d1e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c05906115af565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ca191906110a3565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d059190610f01565b60405180910390a3610d18848484610d23565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b60006020820190508181036000830152610ddb8184610d88565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e1382610de8565b9050919050565b610e2381610e08565b8114610e2e57600080fd5b50565b600081359050610e4081610e1a565b92915050565b6000819050919050565b610e5981610e46565b8114610e6457600080fd5b50565b600081359050610e7681610e50565b92915050565b60008060408385031215610e9357610e92610de3565b5b6000610ea185828601610e31565b9250506020610eb285828601610e67565b9150509250929050565b60008115159050919050565b610ed181610ebc565b82525050565b6000602082019050610eec6000830184610ec8565b92915050565b610efb81610e46565b82525050565b6000602082019050610f166000830184610ef2565b92915050565b600080600060608486031215610f3557610f34610de3565b5b6000610f4386828701610e31565b9350506020610f5486828701610e31565b9250506040610f6586828701610e67565b9150509250925092565b600060ff82169050919050565b610f8581610f6f565b82525050565b6000602082019050610fa06000830184610f7c565b92915050565b600060208284031215610fbc57610fbb610de3565b5b6000610fca84828501610e31565b91505092915050565b60008060408385031215610fea57610fe9610de3565b5b6000610ff885828601610e31565b925050602061100985828601610e31565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061105a57607f821691505b6020821081141561106e5761106d611013565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110ae82610e46565b91506110b983610e46565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110ee576110ed611074565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611155602583610d33565b9150611160826110f9565b604082019050919050565b6000602082019050818103600083015261118481611148565b9050919050565b7f5468697320757365722068617320636c61696d65642061697264726f7020616c60008201527f7265616479000000000000000000000000000000000000000000000000000000602082015250565b60006111e7602583610d33565b91506111f28261118b565b604082019050919050565b60006020820190508181036000830152611216816111da565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611253601f83610d33565b915061125e8261121d565b602082019050919050565b6000602082019050818103600083015261128281611246565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006112e5602483610d33565b91506112f082611289565b604082019050919050565b60006020820190508181036000830152611314816112d8565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611377602283610d33565b91506113828261131b565b604082019050919050565b600060208201905081810360008301526113a68161136a565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006113e3601d83610d33565b91506113ee826113ad565b602082019050919050565b60006020820190508181036000830152611412816113d6565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611475602583610d33565b915061148082611419565b604082019050919050565b600060208201905081810360008301526114a481611468565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611507602383610d33565b9150611512826114ab565b604082019050919050565b60006020820190508181036000830152611536816114fa565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611599602683610d33565b91506115a48261153d565b604082019050919050565b600060208201905081810360008301526115c88161158c565b905091905056fea2646970667358221220b76ccbac0e35b0eaae8d35bf964bfbc1c39c6db04118b6618dc138dfa3c0672864736f6c63430008090033";

type StudentSocietyDAOConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StudentSocietyDAOConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StudentSocietyDAO__factory extends ContractFactory {
  constructor(...args: StudentSocietyDAOConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StudentSocietyDAO> {
    return super.deploy(overrides || {}) as Promise<StudentSocietyDAO>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StudentSocietyDAO {
    return super.attach(address) as StudentSocietyDAO;
  }
  override connect(signer: Signer): StudentSocietyDAO__factory {
    return super.connect(signer) as StudentSocietyDAO__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StudentSocietyDAOInterface {
    return new utils.Interface(_abi) as StudentSocietyDAOInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StudentSocietyDAO {
    return new Contract(address, _abi, signerOrProvider) as StudentSocietyDAO;
  }
}