/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MyERC20, MyERC20Interface } from "../../contracts/MyERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "airdrop1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "airdrop2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620019c1380380620019c18339818101604052810190620000379190620002c2565b818181600390805190602001906200005192919062000075565b5080600490805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b61160580620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c578063a457c2d711610066578063a457c2d714610216578063a9059cbb14610246578063dd62ed3e14610276578063effc73a4146102a6576100cf565b8063395093511461019857806370a08231146101c857806395d89b41146101f8576100cf565b806306884fc8146100d457806306fdde03146100de578063095ea7b3146100fc57806318160ddd1461012c57806323b872dd1461014a578063313ce5671461017a575b600080fd5b6100dc6102b0565b005b6100e66102bd565b6040516100f39190610dc1565b60405180910390f35b61011660048036038101906101119190610e7c565b61034f565b6040516101239190610ed7565b60405180910390f35b610134610372565b6040516101419190610f01565b60405180910390f35b610164600480360381019061015f9190610f1c565b61037c565b6040516101719190610ed7565b60405180910390f35b6101826103ab565b60405161018f9190610f8b565b60405180910390f35b6101b260048036038101906101ad9190610e7c565b6103b4565b6040516101bf9190610ed7565b60405180910390f35b6101e260048036038101906101dd9190610fa6565b6103eb565b6040516101ef9190610f01565b60405180910390f35b610200610433565b60405161020d9190610dc1565b60405180910390f35b610230600480360381019061022b9190610e7c565b6104c5565b60405161023d9190610ed7565b60405180910390f35b610260600480360381019061025b9190610e7c565b61053c565b60405161026d9190610ed7565b60405180910390f35b610290600480360381019061028b9190610fd3565b61055f565b60405161029d9190610f01565b60405180910390f35b6102ae6105e6565b005b6102bb3360056106de565b565b6060600380546102cc90611042565b80601f01602080910402602001604051908101604052809291908181526020018280546102f890611042565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b5050505050905090565b60008061035a61083e565b9050610367818585610846565b600191505092915050565b6000600254905090565b60008061038761083e565b9050610394858285610a11565b61039f858585610a9d565b60019150509392505050565b60006012905090565b6000806103bf61083e565b90506103e08185856103d1858961055f565b6103db91906110a3565b610846565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461044290611042565b80601f016020809104026020016040519081016040528092919081815260200182805461046e90611042565b80156104bb5780601f10610490576101008083540402835291602001916104bb565b820191906000526020600020905b81548152906001019060200180831161049e57829003601f168201915b5050505050905090565b6000806104d061083e565b905060006104de828661055f565b905083811015610523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051a9061116b565b60405180910390fd5b6105308286868403610846565b60019250505092915050565b60008061054761083e565b9050610554818585610a9d565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60001515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610679576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610670906111fd565b60405180910390fd5b6106843360646106de565b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561074e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074590611269565b60405180910390fd5b61075a60008383610d1e565b806002600082825461076c91906110a3565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107c191906110a3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516108269190610f01565b60405180910390a361083a60008383610d23565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad906112fb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610926576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091d9061138d565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a049190610f01565b60405180910390a3505050565b6000610a1d848461055f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a975781811015610a89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a80906113f9565b60405180910390fd5b610a968484848403610846565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b049061148b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b749061151d565b60405180910390fd5b610b88838383610d1e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c05906115af565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ca191906110a3565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d059190610f01565b60405180910390a3610d18848484610d23565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b60006020820190508181036000830152610ddb8184610d88565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e1382610de8565b9050919050565b610e2381610e08565b8114610e2e57600080fd5b50565b600081359050610e4081610e1a565b92915050565b6000819050919050565b610e5981610e46565b8114610e6457600080fd5b50565b600081359050610e7681610e50565b92915050565b60008060408385031215610e9357610e92610de3565b5b6000610ea185828601610e31565b9250506020610eb285828601610e67565b9150509250929050565b60008115159050919050565b610ed181610ebc565b82525050565b6000602082019050610eec6000830184610ec8565b92915050565b610efb81610e46565b82525050565b6000602082019050610f166000830184610ef2565b92915050565b600080600060608486031215610f3557610f34610de3565b5b6000610f4386828701610e31565b9350506020610f5486828701610e31565b9250506040610f6586828701610e67565b9150509250925092565b600060ff82169050919050565b610f8581610f6f565b82525050565b6000602082019050610fa06000830184610f7c565b92915050565b600060208284031215610fbc57610fbb610de3565b5b6000610fca84828501610e31565b91505092915050565b60008060408385031215610fea57610fe9610de3565b5b6000610ff885828601610e31565b925050602061100985828601610e31565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061105a57607f821691505b6020821081141561106e5761106d611013565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110ae82610e46565b91506110b983610e46565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110ee576110ed611074565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611155602583610d33565b9150611160826110f9565b604082019050919050565b6000602082019050818103600083015261118481611148565b9050919050565b7f5468697320757365722068617320636c61696d65642061697264726f7020616c60008201527f7265616479000000000000000000000000000000000000000000000000000000602082015250565b60006111e7602583610d33565b91506111f28261118b565b604082019050919050565b60006020820190508181036000830152611216816111da565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611253601f83610d33565b915061125e8261121d565b602082019050919050565b6000602082019050818103600083015261128281611246565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006112e5602483610d33565b91506112f082611289565b604082019050919050565b60006020820190508181036000830152611314816112d8565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611377602283610d33565b91506113828261131b565b604082019050919050565b600060208201905081810360008301526113a68161136a565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006113e3601d83610d33565b91506113ee826113ad565b602082019050919050565b60006020820190508181036000830152611412816113d6565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611475602583610d33565b915061148082611419565b604082019050919050565b600060208201905081810360008301526114a481611468565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611507602383610d33565b9150611512826114ab565b604082019050919050565b60006020820190508181036000830152611536816114fa565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611599602683610d33565b91506115a48261153d565b604082019050919050565b600060208201905081810360008301526115c88161158c565b905091905056fea2646970667358221220b76ccbac0e35b0eaae8d35bf964bfbc1c39c6db04118b6618dc138dfa3c0672864736f6c63430008090033";

type MyERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyERC20__factory extends ContractFactory {
  constructor(...args: MyERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyERC20> {
    return super.deploy(name, symbol, overrides || {}) as Promise<MyERC20>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): MyERC20 {
    return super.attach(address) as MyERC20;
  }
  override connect(signer: Signer): MyERC20__factory {
    return super.connect(signer) as MyERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyERC20Interface {
    return new utils.Interface(_abi) as MyERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyERC20 {
    return new Contract(address, _abi, signerOrProvider) as MyERC20;
  }
}