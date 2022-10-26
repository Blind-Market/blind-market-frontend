export const BlindMarketABI = [
  {
    _format: "hh-sol-artifact-1",
    contractName: "BLIND",
    sourceName: "contracts/BlindMarket.sol",
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        name: "CancelPurchaseRequest",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        name: "FinishPurchaseRequest",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        name: "PurchaseRequest",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
        ],
        name: "TransferBatch",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
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
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "TransferSingle",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "value",
            type: "string",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "URI",
        type: "event",
      },
      {
        inputs: [],
        name: "BLI",
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
        name: "BRONZE_FEE_RATIO",
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
        name: "DIAMOND_FEE_RATIO",
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
        name: "GOLD_FEE_RATIO",
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
        name: "MEMBER_FEE_RATIO",
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
        name: "NOOB_FEE_RATIO",
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
        name: "PLATINUM_FEE_RATIO",
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
        name: "ROOKIE_FEE_RATIO",
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
        name: "SILVER_FEE_RATIO",
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
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
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
        inputs: [
          {
            internalType: "address[]",
            name: "accounts",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
        ],
        name: "balanceOfBatch",
        outputs: [
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "burn",
        outputs: [],
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
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
        ],
        name: "burnBatch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "estimateAmountOfBLI",
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
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "estimateFee",
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
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "exists",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "enum BLIND.Grade",
            name: "grade",
            type: "uint8",
          },
        ],
        name: "getRatioByGrade",
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
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "getTokenURI",
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
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        name: "mintProduct",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
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
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
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
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "nickname",
            type: "string",
          },
        ],
        name: "setUserInfo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "showTradeInfo",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
              },
              {
                internalType: "string",
                name: "buyer",
                type: "string",
              },
              {
                internalType: "string",
                name: "seller",
                type: "string",
              },
              {
                internalType: "address payable",
                name: "buyerAddress",
                type: "address",
              },
              {
                internalType: "address payable",
                name: "sellerAddress",
                type: "address",
              },
              {
                internalType: "enum BLIND.Phase",
                name: "phase",
                type: "uint8",
              },
            ],
            internalType: "struct BLIND.Request",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "showTradeLog",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
              },
              {
                internalType: "string",
                name: "buyer",
                type: "string",
              },
              {
                internalType: "string",
                name: "seller",
                type: "string",
              },
              {
                internalType: "address payable",
                name: "buyerAddress",
                type: "address",
              },
              {
                internalType: "address payable",
                name: "sellerAddress",
                type: "address",
              },
              {
                internalType: "enum BLIND.Phase",
                name: "phase",
                type: "uint8",
              },
            ],
            internalType: "struct BLIND.Request[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "showUserInfo",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "gradePoint",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "nickname",
                type: "string",
              },
              {
                internalType: "enum BLIND.Grade",
                name: "grade",
                type: "uint8",
              },
            ],
            internalType: "struct BLIND.UserData",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
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
            name: "id",
            type: "uint256",
          },
        ],
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
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "turnIntoCancel",
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
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "turnIntoDone",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "price",
            type: "uint128",
          },
          {
            internalType: "string",
            name: "seller",
            type: "string",
          },
          {
            internalType: "address",
            name: "sellerAddress",
            type: "address",
          },
        ],
        name: "turnIntoPending",
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
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "usedBLI",
            type: "uint128",
          },
        ],
        name: "turnIntoShipping",
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
            internalType: "string",
            name: "nickname",
            type: "string",
          },
        ],
        name: "updateUserNickname",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "uri",
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
    ],
    bytecode:
      "0x60806040523480156200001157600080fd5b506040518060400160405280602081526020017f687474703a2f2f426c696e644d61726b65742e78797a2f7b69647d2e6a736f6e81525062000059816200009f60201b60201c565b506200007a6200006e620000b460201b60201c565b620000bc60201b60201c565b6200009160056200018260201b620037731760201c565b6000600681905550620004f9565b8060029081620000b0919062000412565b5050565b600033905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001816000016000828254019250508190555050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b6178e780620005096000396000f3fe6080604052600436106102245760003560e01c80638da5cb5b11610123578063d5c3e327116100ab578063ed1e30551161006f578063ed1e3055146108a7578063f05c25fb146108d2578063f242432a146108fd578063f2fde38b14610926578063f5298aca1461094f57610224565b8063d5c3e3271461079a578063d8601a1f146107c5578063d8c9a7da14610802578063e985e9c51461083f578063eb2bd1541461087c57610224565b8063a2cc50e0116100f2578063a2cc50e01461067d578063acbb4d2b146106ba578063b945ee51146106f7578063bd1d9c4714610734578063bd85b0391461075d57610224565b80638da5cb5b146105d55780639b3b3129146106005780639d5ab4ac14610629578063a22cb4651461065457610224565b8063385f6d24116101b157806353b721b31161017557806353b721b314610516578063547fa8691461053f5780636b20c4541461056a578063715018a61461059357806388e3e8f7146105aa57610224565b8063385f6d24146104045780633bb3a24d14610434578063440222e7146104715780634e1273f41461049c5780634f558e79146104d957610224565b8063127e8e4d116101f8578063127e8e4d1461030b5780631474a3e214610348578063288d3d50146103735780632eb2c2d6146103b0578063306aa230146103d957610224565b8062fdd58e1461022957806301ffc9a7146102665780630a634405146102a35780630e89341c146102ce575b600080fd5b34801561023557600080fd5b50610250600480360381019061024b91906154cc565b610978565b60405161025d919061551b565b60405180910390f35b34801561027257600080fd5b5061028d6004803603810190610288919061558e565b610a40565b60405161029a91906155d6565b60405180910390f35b3480156102af57600080fd5b506102b8610b22565b6040516102c5919061551b565b60405180910390f35b3480156102da57600080fd5b506102f560048036038101906102f091906155f1565b610b27565b60405161030291906156ae565b60405180910390f35b34801561031757600080fd5b50610332600480360381019061032d91906155f1565b610bbb565b60405161033f919061551b565b60405180910390f35b34801561035457600080fd5b5061035d610e04565b60405161036a919061551b565b60405180910390f35b34801561037f57600080fd5b5061039a600480360381019061039591906154cc565b610e09565b6040516103a7919061551b565b60405180910390f35b3480156103bc57600080fd5b506103d760048036038101906103d291906158cd565b610f0a565b005b3480156103e557600080fd5b506103ee610fab565b6040516103fb919061551b565b60405180910390f35b61041e6004803603810190610419919061599c565b610fb0565b60405161042b91906155d6565b60405180910390f35b34801561044057600080fd5b5061045b600480360381019061045691906155f1565b611600565b60405161046891906156ae565b60405180910390f35b34801561047d57600080fd5b506104866116a5565b604051610493919061551b565b60405180910390f35b3480156104a857600080fd5b506104c360048036038101906104be9190615a9f565b6116aa565b6040516104d09190615bd5565b60405180910390f35b3480156104e557600080fd5b5061050060048036038101906104fb91906155f1565b6117c3565b60405161050d91906155d6565b60405180910390f35b34801561052257600080fd5b5061053d60048036038101906105389190615c98565b6117d7565b005b34801561054b57600080fd5b50610554611869565b6040516105619190615df2565b60405180910390f35b34801561057657600080fd5b50610591600480360381019061058c9190615e14565b6119e7565b005b34801561059f57600080fd5b506105a8611a84565b005b3480156105b657600080fd5b506105bf611a98565b6040516105cc919061551b565b60405180910390f35b3480156105e157600080fd5b506105ea611a9d565b6040516105f79190615eae565b60405180910390f35b34801561060c57600080fd5b5061062760048036038101906106229190615c98565b611ac7565b005b34801561063557600080fd5b5061063e611c55565b60405161064b919061551b565b60405180910390f35b34801561066057600080fd5b5061067b60048036038101906106769190615ef5565b611c5a565b005b34801561068957600080fd5b506106a4600480360381019061069f919061599c565b611c70565b6040516106b191906155d6565b60405180910390f35b3480156106c657600080fd5b506106e160048036038101906106dc9190615f5a565b6120de565b6040516106ee919061551b565b60405180910390f35b34801561070357600080fd5b5061071e60048036038101906107199190615fcf565b6122e1565b60405161072b91906155d6565b60405180910390f35b34801561074057600080fd5b5061075b60048036038101906107569190615c98565b612813565b005b34801561076957600080fd5b50610784600480360381019061077f91906155f1565b612913565b604051610791919061551b565b60405180910390f35b3480156107a657600080fd5b506107af612930565b6040516107bc919061551b565b60405180910390f35b3480156107d157600080fd5b506107ec60048036038101906107e79190616022565b612935565b6040516107f991906155d6565b60405180910390f35b34801561080e57600080fd5b50610829600480360381019061082491906155f1565b612f4d565b60405161083691906161ca565b60405180910390f35b34801561084b57600080fd5b50610866600480360381019061086191906161ec565b6131e9565b60405161087391906155d6565b60405180910390f35b34801561088857600080fd5b5061089161327d565b60405161089e919061551b565b60405180910390f35b3480156108b357600080fd5b506108bc613282565b6040516108c9919061551b565b60405180910390f35b3480156108de57600080fd5b506108e7613287565b6040516108f49190616391565b60405180910390f35b34801561090957600080fd5b50610924600480360381019061091f91906163b3565b6135b2565b005b34801561093257600080fd5b5061094d6004803603810190610948919061644a565b613653565b005b34801561095b57600080fd5b5061097660048036038101906109719190616477565b6136d6565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109df9061653c565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610b0b57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b1b5750610b1a82613789565b5b9050919050565b600081565b606060028054610b369061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b629061658b565b8015610baf5780601f10610b8457610100808354040283529160200191610baf565b820191906000526020600020905b815481529060010190602001808311610b9257829003601f168201915b50505050509050919050565b600060011515610bcb33306131e9565b151514610c0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c049061662e565b60405180910390fd5b338073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610c7a5750610c4b611a9d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610cb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb0906166e6565b60405180910390fd5b60006004811115610ccd57610ccc615d2b565b5b6009600085815260200190815260200160002060050160149054906101000a900460ff166004811115610d0357610d02615d2b565b5b03610d43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3a90616752565b60405180910390fd5b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1690506000610da2826120de565b9050600080610dc660096000898152602001908152602001600020600101546137f3565b9150915060009150606483826fffffffffffffffffffffffffffffffff16610dee91906167a1565b610df89190616812565b95505050505050919050565b600381565b600060011515610e1933306131e9565b151514610e5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e529061662e565b60405180910390fd5b6000610e7c60096000858152602001908152602001600020600101546137f3565b5050620186a0610eda600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166120de565b826fffffffffffffffffffffffffffffffff16610ef791906167a1565b610f019190616812565b91505092915050565b610f12613807565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610f585750610f5785610f52613807565b6131e9565b5b610f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8e906168b5565b60405180910390fd5b610fa4858585858561380f565b5050505050565b600881565b600060011515610fc033306131e9565b151514611002576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff99061662e565b60405180910390fd5b6002600481111561101657611015615d2b565b5b6009600085815260200190815260200160002060050160149054906101000a900460ff16600481111561104c5761104b615d2b565b5b1461108c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108390616921565b60405180910390fd5b600960008481526020019081526020016000206002016040516020016110b291906169e4565b60405160208183030381529060405280519060200120600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160405160200161111a91906169e4565b6040516020818303038152906040528051906020012014611170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116790616a47565b60405180910390fd5b60006009600085815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006009600086815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060036009600087815260200190815260200160002060050160146101000a81548160ff021916908360048111156112205761121f615d2b565b5b021790555060006009600087815260200190815260200160002060030180546112489061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546112749061658b565b80156112c15780601f10611296576101008083540402835291602001916112c1565b820191906000526020600020905b8154815290600101906020018083116112a457829003601f168201915b5050505050905060006112d387610bbb565b905080600660008282546112e79190616a67565b92505081905550600080611310600960008b8152602001908152602001600020600101546137f3565b91509150600091508573ffffffffffffffffffffffffffffffffffffffff166108fc84836fffffffffffffffffffffffffffffffff166113509190616a9b565b9081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506003600a600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016040516113cf91906169e4565b908152602001604051809103902089815481106113ef576113ee616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561142257611421615d2b565b5b02179055506003600a856040516114399190616b2f565b9081526020016040518091039020898154811061145957611458616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561148c5761148b615d2b565b5b0217905550600061149d868b610e09565b905060006114ab888c610e09565b90506114b78783613b30565b6114c18882613b30565b6103e8600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546115159190616a67565b925050819055506103e8600860008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546115709190616a67565b9250508190555061158088613ba8565b61158987613ba8565b8773ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f6516606757f8273d99c7742bbfbb61c253cd67ebd5a71cbcf18e618517c2355f8d6040516115e6919061551b565b60405180910390a360019850505050505050505092915050565b6060600b600083815260200190815260200160002080546116209061658b565b80601f016020809104026020016040519081016040528092919081815260200182805461164c9061658b565b80156116995780601f1061166e57610100808354040283529160200191611699565b820191906000526020600020905b81548152906001019060200180831161167c57829003601f168201915b50505050509050919050565b600481565b606081518351146116f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e790616bb8565b60405180910390fd5b6000835167ffffffffffffffff81111561170d5761170c6156d5565b5b60405190808252806020026020018201604052801561173b5781602001602082028036833780820191505090505b50905060005b84518110156117b8576117888582815181106117605761175f616acf565b5b602002602001015185838151811061177b5761177a616acf565b5b6020026020010151610978565b82828151811061179b5761179a616acf565b5b602002602001018181525050806117b190616bd8565b9050611741565b508091505092915050565b6000806117cf83612913565b119050919050565b600115156117e533306131e9565b151514611827576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181e9061662e565b60405180910390fd5b60006118336005613fcf565b905061183f6005613773565b61185b3382600160405180602001604052806000815250613fdd565b6118658183613fef565b5050565b611871615373565b6001151561187f33306131e9565b1515146118c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b89061662e565b60405180910390fd5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820180546119259061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546119519061658b565b801561199e5780601f106119735761010080835404028352916020019161199e565b820191906000526020600020905b81548152906001019060200180831161198157829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660088111156119cc576119cb615d2b565b5b60088111156119de576119dd615d2b565b5b81525050905090565b6119ef613807565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480611a355750611a3483611a2f613807565b6131e9565b5b611a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6b906168b5565b60405180910390fd5b611a7f838383614054565b505050565b611a8c614322565b611a9660006143a0565b565b600781565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60011515611ad533306131e9565b151514611b17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0e9061662e565b60405180910390fd5b60006008811115611b2b57611b2a615d2b565b5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166008811115611b8d57611b8c615d2b565b5b14611b9757600080fd5b80600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019081611be69190616db7565b506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115611c4d57611c4c615d2b565b5b021790555050565b600981565b611c6c611c65613807565b8383614466565b5050565b600060011515611c8033306131e9565b151514611cc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb99061662e565b60405180910390fd5b60006004811115611cd657611cd5615d2b565b5b6009600085815260200190815260200160002060050160149054906101000a900460ff166004811115611d0c57611d0b615d2b565b5b03611d1657600080fd5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051602001611d6891906169e4565b6040516020818303038152906040528051906020012060096000858152602001908152602001600020600301604051602001611da491906169e4565b604051602081830303815290604052805190602001201480611e675750600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051602001611e1391906169e4565b6040516020818303038152906040528051906020012060096000858152602001908152602001600020600201604051602001611e4f91906169e4565b60405160208183030381529060405280519060200120145b611e7057600080fd5b60006009600085815260200190815260200160002060050160146101000a81548160ff02191690836004811115611eaa57611ea9615d2b565b5b02179055506000600960008581526020019081526020016000206003018054611ed29061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054611efe9061658b565b8015611f4b5780601f10611f2057610100808354040283529160200191611f4b565b820191906000526020600020905b815481529060010190602001808311611f2e57829003601f168201915b505050505090506000600960008681526020019081526020016000206002018054611f759061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054611fa19061658b565b8015611fee5780601f10611fc357610100808354040283529160200191611fee565b820191906000526020600020905b815481529060010190602001808311611fd157829003601f168201915b505050505090506004600a826040516120079190616b2f565b9081526020016040518091039020858154811061202757612026616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561205a57612059615d2b565b5b02179055506004600a836040516120719190616b2f565b9081526020016040518091039020858154811061209157612090616acf565b5b906000526020600020906006020160050160146101000a81548160ff021916908360048111156120c4576120c3615d2b565b5b02179055506120d2856145d2565b60019250505092915050565b6000600115156120ee33306131e9565b151514612130576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121279061662e565b60405180910390fd5b6001600881111561214457612143615d2b565b5b82600881111561215757612156615d2b565b5b0361216557600a90506122dc565b6002600881111561217957612178615d2b565b5b82600881111561218c5761218b615d2b565b5b0361219a57600990506122dc565b600360088111156121ae576121ad615d2b565b5b8260088111156121c1576121c0615d2b565b5b036121cf57600890506122dc565b600460088111156121e3576121e2615d2b565b5b8260088111156121f6576121f5615d2b565b5b0361220457600790506122dc565b6005600881111561221857612217615d2b565b5b82600881111561222b5761222a615d2b565b5b0361223957600690506122dc565b6006600881111561224d5761224c615d2b565b5b8260088111156122605761225f615d2b565b5b0361226e57600590506122dc565b6007600881111561228257612281615d2b565b5b82600881111561229557612294615d2b565b5b036122a357600490506122dc565b6008808111156122b6576122b5615d2b565b5b8260088111156122c9576122c8615d2b565b5b036122d757600390506122dc565b600a90505b919050565b6000600115156122f133306131e9565b151514612333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161232a9061662e565b60405180910390fd5b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180546123829061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546123ae9061658b565b80156123fb5780601f106123d0576101008083540402835291602001916123fb565b820191906000526020600020905b8154815290600101906020018083116123de57829003601f168201915b505050505090506000600860006009600089815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180546124879061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546124b39061658b565b80156125005780601f106124d557610100808354040283529160200191612500565b820191906000526020600020905b8154815290600101906020018083116124e357829003601f168201915b505050505090506001600481111561251b5761251a615d2b565b5b6009600088815260200190815260200160002060050160149054906101000a900460ff16600481111561255157612550615d2b565b5b1461255b57600080fd5b8160405160200161256c9190616b2f565b60405160208183030381529060405280519060200120600960008881526020019081526020016000206003016040516020016125a891906169e4565b60405160208183030381529060405280519060200120146125c857600080fd5b6000846fffffffffffffffffffffffffffffffff1610156125e857600080fd5b60006125f387610bbb565b905080856fffffffffffffffffffffffffffffffff16111561261457600080fd5b60026009600089815260200190815260200160002060050160146101000a81548160ff0219169083600481111561264e5761264d615d2b565b5b0217905550600080612675600960008b8152602001908152602001600020600101546137f3565b915091508691506000612688888361462f565b905080600960008c8152602001908152602001600020600101819055506002600a866040516126b79190616b2f565b90815260200160405180910390208a815481106126d7576126d6616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561270a57612709615d2b565b5b02179055506002600a876040516127219190616b2f565b90815260200160405180910390208a8154811061274157612740616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561277457612773615d2b565b5b0217905550612802600960008c815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960008d815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168c6001604051806020016040528060008152506135b2565b600196505050505050509392505050565b338073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806128805750612851611a9d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6128bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b6906166e6565b60405180910390fd5b81600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101908161290e9190616db7565b505050565b600060046000838152602001908152602001600020549050919050565b600a81565b60006001151561294533306131e9565b151514612987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161297e9061662e565b60405180910390fd5b61299085614644565b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180546129df9061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054612a0b9061658b565b8015612a585780601f10612a2d57610100808354040283529160200191612a58565b820191906000526020600020905b815481529060010190602001808311612a3b57829003601f168201915b505050505090506000612a6c60008761462f565b90506040518060e00160405280600081526020018281526020018381526020018681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200160016004811115612ade57612add615d2b565b5b8152506009600089815260200190815260200160002060008201518160000155602082015181600101556040820151816002019081612b1d9190616db7565b506060820151816003019081612b339190616db7565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff02191690836004811115612bed57612bec615d2b565b5b0217905550905050600a82604051612c059190616b2f565b9081526020016040518091039020600960008981526020019081526020016000209080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015481600001556001820154816001015560028201816002019081612c779190616e9f565b5060038201816003019081612c8c9190616e9f565b506004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160149054906101000a900460ff168160050160146101000a81548160ff02191690836004811115612d9357612d92615d2b565b5b02179055505050600a85604051612daa9190616b2f565b9081526020016040518091039020600960008981526020019081526020016000209080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015481600001556001820154816001015560028201816002019081612e1c9190616e9f565b5060038201816003019081612e319190616e9f565b506004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160149054906101000a900460ff168160050160146101000a81548160ff02191690836004811115612f3857612f37615d2b565b5b02179055505050600192505050949350505050565b612f556153a6565b60011515612f6333306131e9565b151514612fa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f9c9061662e565b60405180910390fd5b600960008381526020019081526020016000206040518060e00160405290816000820154815260200160018201548152602001600282018054612fe79061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546130139061658b565b80156130605780601f1061303557610100808354040283529160200191613060565b820191906000526020600020905b81548152906001019060200180831161304357829003601f168201915b505050505081526020016003820180546130799061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546130a59061658b565b80156130f25780601f106130c7576101008083540402835291602001916130f2565b820191906000526020600020905b8154815290600101906020018083116130d557829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff1660048111156131cc576131cb615d2b565b5b60048111156131de576131dd615d2b565b5b815250509050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600581565b600681565b60606001151561329733306131e9565b1515146132d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132d09061662e565b60405180910390fd5b600a600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160405161332a91906169e4565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156135a957838290600052602060002090600602016040518060e0016040529081600082015481526020016001820154815260200160028201805461339f9061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546133cb9061658b565b80156134185780601f106133ed57610100808354040283529160200191613418565b820191906000526020600020905b8154815290600101906020018083116133fb57829003601f168201915b505050505081526020016003820180546134319061658b565b80601f016020809104026020016040519081016040528092919081815260200182805461345d9061658b565b80156134aa5780601f1061347f576101008083540402835291602001916134aa565b820191906000526020600020905b81548152906001019060200180831161348d57829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff16600481111561358457613583615d2b565b5b600481111561359657613595615d2b565b5b8152505081526020019060010190613358565b50505050905090565b6135ba613807565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061360057506135ff856135fa613807565b6131e9565b5b61363f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613636906168b5565b60405180910390fd5b61364c85858585856146a1565b5050505050565b61365b614322565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036136ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016136c190616ff9565b60405180910390fd5b6136d3816143a0565b50565b6136de613807565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061372457506137238361371e613807565b6131e9565b5b613763576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161375a906168b5565b60405180910390fd5b61376e83838361493c565b505050565b6001816000016000828254019250508190555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080829050826016526000519150915091565b600033905090565b8151835114613853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161384a9061708b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036138c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016138b99061711d565b60405180910390fd5b60006138cc613807565b90506138dc818787878787614b82565b60005b8451811015613a8d5760008582815181106138fd576138fc616acf565b5b60200260200101519050600085838151811061391c5761391b616acf565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156139bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016139b4906171af565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254613a729190616a67565b9250508190555050505080613a8690616bd8565b90506138df565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051613b049291906171cf565b60405180910390a4613b1a818787878787614b98565b613b28818787878787614ba0565b505050505050565b613b38614322565b60011515613b4633306131e9565b151514613b88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613b7f9061662e565b60405180910390fd5b613ba48260008360405180602001604052806000815250613fdd565b5050565b60006008811115613bbc57613bbb615d2b565b5b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166008811115613c1e57613c1d615d2b565b5b03613c2857600080fd5b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050621e8481811115613ce95760088060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613cdf57613cde615d2b565b5b0217905550613fcb565b620f4241811115613d64576007600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613d5a57613d59615d2b565b5b0217905550613fca565b6207a120811115613ddf576006600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613dd557613dd4615d2b565b5b0217905550613fc9565b62030d40811115613e5a576005600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613e5057613e4f615d2b565b5b0217905550613fc8565b620186a0811115613ed5576004600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613ecb57613eca615d2b565b5b0217905550613fc7565b612710811115613f4f576003600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613f4557613f44615d2b565b5b0217905550613fc6565b6107d0811115613fc5576002600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613fbf57613fbe615d2b565b5b02179055505b5b5b5b5b5b5b5050565b600081600001549050919050565b613fe984848484614d77565b50505050565b80600b6000848152602001908152602001600020908161400f9190616db7565b50817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b61403b84610b27565b60405161404891906156ae565b60405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036140c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016140ba90617278565b60405180910390fd5b8051825114614107576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016140fe9061708b565b60405180910390fd5b6000614111613807565b905061413181856000868660405180602001604052806000815250614b82565b60005b835181101561427e57600084828151811061415257614151616acf565b5b60200260200101519050600084838151811061417157614170616acf565b5b60200260200101519050600080600084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015614212576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016142099061730a565b60405180910390fd5b81810360008085815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050808061427690616bd8565b915050614134565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516142f69291906171cf565b60405180910390a461431c81856000868660405180602001604052806000815250614b98565b50505050565b61432a613807565b73ffffffffffffffffffffffffffffffffffffffff16614348611a9d565b73ffffffffffffffffffffffffffffffffffffffff161461439e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161439590617376565b60405180910390fd5b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036144d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016144cb90617408565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516145c591906155d6565b60405180910390a3505050565b600015156007600083815260200190815260200160002060009054906101000a900460ff161515031561462c5760006007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b60008160165282600052601651905092915050565b600115156007600083815260200190815260200160002060009054906101000a900460ff161515031561469e5760016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603614710576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016147079061711d565b60405180910390fd5b600061471a613807565b9050600061472785614f27565b9050600061473485614f27565b9050614744838989858589614b82565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050858110156147db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016147d2906171af565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546148909190616a67565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a60405161490d929190617428565b60405180910390a4614923848a8a86868a614b98565b614931848a8a8a8a8a614fa1565b505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036149ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016149a290617278565b60405180910390fd5b60006149b5613807565b905060006149c284614f27565b905060006149cf84614f27565b90506149ef83876000858560405180602001604052806000815250614b82565b600080600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905084811015614a86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614a7d9061730a565b60405180910390fd5b84810360008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628989604051614b53929190617428565b60405180910390a4614b7984886000868660405180602001604052806000815250614b98565b50505050505050565b614b90868686868686615178565b505050505050565b505050505050565b614bbf8473ffffffffffffffffffffffffffffffffffffffff16615348565b15614d6f578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401614c059594939291906174a6565b6020604051808303816000875af1925050508015614c4157506040513d601f19601f82011682018060405250810190614c3e9190617523565b60015b614ce657614c4d61755d565b806308c379a003614ca95750614c6161757f565b80614c6c5750614cab565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614ca091906156ae565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614cdd90617681565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614614d6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614d6490617713565b60405180910390fd5b505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603614de6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614ddd906177a5565b60405180910390fd5b6000614df0613807565b90506000614dfd85614f27565b90506000614e0a85614f27565b9050614e1b83600089858589614b82565b8460008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254614e7a9190616a67565b925050819055508673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628989604051614ef8929190617428565b60405180910390a4614f0f83600089858589614b98565b614f1e83600089898989614fa1565b50505050505050565b60606000600167ffffffffffffffff811115614f4657614f456156d5565b5b604051908082528060200260200182016040528015614f745781602001602082028036833780820191505090505b5090508281600081518110614f8c57614f8b616acf565b5b60200260200101818152505080915050919050565b614fc08473ffffffffffffffffffffffffffffffffffffffff16615348565b15615170578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b81526004016150069594939291906177c5565b6020604051808303816000875af192505050801561504257506040513d601f19601f8201168201806040525081019061503f9190617523565b60015b6150e75761504e61755d565b806308c379a0036150aa575061506261757f565b8061506d57506150ac565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016150a191906156ae565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016150de90617681565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461516e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161516590617713565b60405180910390fd5b505b505050505050565b61518686868686868661536b565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036152375760005b8351811015615235578281815181106151d9576151d8616acf565b5b6020026020010151600460008684815181106151f8576151f7616acf565b5b60200260200101518152602001908152602001600020600082825461521d9190616a67565b925050819055508061522e90616bd8565b90506151bd565b505b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036153405760005b835181101561533e57600084828151811061528c5761528b616acf565b5b6020026020010151905060008483815181106152ab576152aa616acf565b5b6020026020010151905060006004600084815260200190815260200160002054905081811015615310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161530790617891565b60405180910390fd5b81810360046000858152602001908152602001600020819055505050508061533790616bd8565b905061526e565b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b505050505050565b60405180606001604052806000815260200160608152602001600060088111156153a05761539f615d2b565b5b81525090565b6040518060e0016040528060008152602001600080191681526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600481111561541e5761541d615d2b565b5b81525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061546382615438565b9050919050565b61547381615458565b811461547e57600080fd5b50565b6000813590506154908161546a565b92915050565b6000819050919050565b6154a981615496565b81146154b457600080fd5b50565b6000813590506154c6816154a0565b92915050565b600080604083850312156154e3576154e261542e565b5b60006154f185828601615481565b9250506020615502858286016154b7565b9150509250929050565b61551581615496565b82525050565b6000602082019050615530600083018461550c565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61556b81615536565b811461557657600080fd5b50565b60008135905061558881615562565b92915050565b6000602082840312156155a4576155a361542e565b5b60006155b284828501615579565b91505092915050565b60008115159050919050565b6155d0816155bb565b82525050565b60006020820190506155eb60008301846155c7565b92915050565b6000602082840312156156075761560661542e565b5b6000615615848285016154b7565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561565857808201518184015260208101905061563d565b60008484015250505050565b6000601f19601f8301169050919050565b60006156808261561e565b61568a8185615629565b935061569a81856020860161563a565b6156a381615664565b840191505092915050565b600060208201905081810360008301526156c88184615675565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61570d82615664565b810181811067ffffffffffffffff8211171561572c5761572b6156d5565b5b80604052505050565b600061573f615424565b905061574b8282615704565b919050565b600067ffffffffffffffff82111561576b5761576a6156d5565b5b602082029050602081019050919050565b600080fd5b600061579461578f84615750565b615735565b905080838252602082019050602084028301858111156157b7576157b661577c565b5b835b818110156157e057806157cc88826154b7565b8452602084019350506020810190506157b9565b5050509392505050565b600082601f8301126157ff576157fe6156d0565b5b813561580f848260208601615781565b91505092915050565b600080fd5b600067ffffffffffffffff821115615838576158376156d5565b5b61584182615664565b9050602081019050919050565b82818337600083830152505050565b600061587061586b8461581d565b615735565b90508281526020810184848401111561588c5761588b615818565b5b61589784828561584e565b509392505050565b600082601f8301126158b4576158b36156d0565b5b81356158c484826020860161585d565b91505092915050565b600080600080600060a086880312156158e9576158e861542e565b5b60006158f788828901615481565b955050602061590888828901615481565b945050604086013567ffffffffffffffff81111561592957615928615433565b5b615935888289016157ea565b935050606086013567ffffffffffffffff81111561595657615955615433565b5b615962888289016157ea565b925050608086013567ffffffffffffffff81111561598357615982615433565b5b61598f8882890161589f565b9150509295509295909350565b600080604083850312156159b3576159b261542e565b5b60006159c1858286016154b7565b92505060206159d2858286016154b7565b9150509250929050565b600067ffffffffffffffff8211156159f7576159f66156d5565b5b602082029050602081019050919050565b6000615a1b615a16846159dc565b615735565b90508083825260208201905060208402830185811115615a3e57615a3d61577c565b5b835b81811015615a675780615a538882615481565b845260208401935050602081019050615a40565b5050509392505050565b600082601f830112615a8657615a856156d0565b5b8135615a96848260208601615a08565b91505092915050565b60008060408385031215615ab657615ab561542e565b5b600083013567ffffffffffffffff811115615ad457615ad3615433565b5b615ae085828601615a71565b925050602083013567ffffffffffffffff811115615b0157615b00615433565b5b615b0d858286016157ea565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b615b4c81615496565b82525050565b6000615b5e8383615b43565b60208301905092915050565b6000602082019050919050565b6000615b8282615b17565b615b8c8185615b22565b9350615b9783615b33565b8060005b83811015615bc8578151615baf8882615b52565b9750615bba83615b6a565b925050600181019050615b9b565b5085935050505092915050565b60006020820190508181036000830152615bef8184615b77565b905092915050565b600067ffffffffffffffff821115615c1257615c116156d5565b5b615c1b82615664565b9050602081019050919050565b6000615c3b615c3684615bf7565b615735565b905082815260208101848484011115615c5757615c56615818565b5b615c6284828561584e565b509392505050565b600082601f830112615c7f57615c7e6156d0565b5b8135615c8f848260208601615c28565b91505092915050565b600060208284031215615cae57615cad61542e565b5b600082013567ffffffffffffffff811115615ccc57615ccb615433565b5b615cd884828501615c6a565b91505092915050565b600082825260208201905092915050565b6000615cfd8261561e565b615d078185615ce1565b9350615d1781856020860161563a565b615d2081615664565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60098110615d6b57615d6a615d2b565b5b50565b6000819050615d7c82615d5a565b919050565b6000615d8c82615d6e565b9050919050565b615d9c81615d81565b82525050565b6000606083016000830151615dba6000860182615b43565b5060208301518482036020860152615dd28282615cf2565b9150506040830151615de76040860182615d93565b508091505092915050565b60006020820190508181036000830152615e0c8184615da2565b905092915050565b600080600060608486031215615e2d57615e2c61542e565b5b6000615e3b86828701615481565b935050602084013567ffffffffffffffff811115615e5c57615e5b615433565b5b615e68868287016157ea565b925050604084013567ffffffffffffffff811115615e8957615e88615433565b5b615e95868287016157ea565b9150509250925092565b615ea881615458565b82525050565b6000602082019050615ec36000830184615e9f565b92915050565b615ed2816155bb565b8114615edd57600080fd5b50565b600081359050615eef81615ec9565b92915050565b60008060408385031215615f0c57615f0b61542e565b5b6000615f1a85828601615481565b9250506020615f2b85828601615ee0565b9150509250929050565b60098110615f4257600080fd5b50565b600081359050615f5481615f35565b92915050565b600060208284031215615f7057615f6f61542e565b5b6000615f7e84828501615f45565b91505092915050565b60006fffffffffffffffffffffffffffffffff82169050919050565b615fac81615f87565b8114615fb757600080fd5b50565b600081359050615fc981615fa3565b92915050565b600080600060608486031215615fe857615fe761542e565b5b6000615ff6868287016154b7565b9350506020616007868287016154b7565b925050604061601886828701615fba565b9150509250925092565b6000806000806080858703121561603c5761603b61542e565b5b600061604a878288016154b7565b945050602061605b87828801615fba565b935050604085013567ffffffffffffffff81111561607c5761607b615433565b5b61608887828801615c6a565b925050606061609987828801615481565b91505092959194509250565b6000819050919050565b6160b8816160a5565b82525050565b60006160c982615438565b9050919050565b6160d9816160be565b82525050565b600581106160f0576160ef615d2b565b5b50565b6000819050616101826160df565b919050565b6000616111826160f3565b9050919050565b61612181616106565b82525050565b600060e08301600083015161613f6000860182615b43565b50602083015161615260208601826160af565b506040830151848203604086015261616a8282615cf2565b915050606083015184820360608601526161848282615cf2565b915050608083015161619960808601826160d0565b5060a08301516161ac60a08601826160d0565b5060c08301516161bf60c0860182616118565b508091505092915050565b600060208201905081810360008301526161e48184616127565b905092915050565b600080604083850312156162035761620261542e565b5b600061621185828601615481565b925050602061622285828601615481565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060e0830160008301516162706000860182615b43565b50602083015161628360208601826160af565b506040830151848203604086015261629b8282615cf2565b915050606083015184820360608601526162b58282615cf2565b91505060808301516162ca60808601826160d0565b5060a08301516162dd60a08601826160d0565b5060c08301516162f060c0860182616118565b508091505092915050565b60006163078383616258565b905092915050565b6000602082019050919050565b60006163278261622c565b6163318185616237565b93508360208202850161634385616248565b8060005b8581101561637f578484038952815161636085826162fb565b945061636b8361630f565b925060208a01995050600181019050616347565b50829750879550505050505092915050565b600060208201905081810360008301526163ab818461631c565b905092915050565b600080600080600060a086880312156163cf576163ce61542e565b5b60006163dd88828901615481565b95505060206163ee88828901615481565b94505060406163ff888289016154b7565b9350506060616410888289016154b7565b925050608086013567ffffffffffffffff81111561643157616430615433565b5b61643d8882890161589f565b9150509295509295909350565b6000602082840312156164605761645f61542e565b5b600061646e84828501615481565b91505092915050565b6000806000606084860312156164905761648f61542e565b5b600061649e86828701615481565b93505060206164af868287016154b7565b92505060406164c0868287016154b7565b9150509250925092565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b6000616526602a83615629565b9150616531826164ca565b604082019050919050565b6000602082019050818103600083015261655581616519565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806165a357607f821691505b6020821081036165b6576165b561655c565b5b50919050565b7f43616c6c6572206861766520746f20617070726f7665207468697320636f6e7460008201527f726163742061646472657373206d616e6167696e672061737365740000000000602082015250565b6000616618603b83615629565b9150616623826165bc565b604082019050919050565b600060208201905081810360008301526166478161660b565b9050919050565b7f4f6e6c79206f776e6572206f6620636f6e7472616374206f72206f776e65722060008201527f6f662077616c6c65742063616e207365652077616c6c657420696e666f726d6160208201527f74696f6e00000000000000000000000000000000000000000000000000000000604082015250565b60006166d0604483615629565b91506166db8261664e565b606082019050919050565b600060208201905081810360008301526166ff816166c3565b9050919050565b7f4d75737420657869737420696e207472616465207461626c6500000000000000600082015250565b600061673c601983615629565b915061674782616706565b602082019050919050565b6000602082019050818103600083015261676b8161672f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006167ac82615496565b91506167b783615496565b92508282026167c581615496565b915082820484148315176167dc576167db616772565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061681d82615496565b915061682883615496565b925082616838576168376167e3565b5b828204905092915050565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206e6f7220617070726f7665640000000000000000000000000000000000602082015250565b600061689f602f83615629565b91506168aa82616843565b604082019050919050565b600060208201905081810360008301526168ce81616892565b9050919050565b7f5468652070726f64756374206973206e6f742061727269766564207965742e00600082015250565b600061690b601f83615629565b9150616916826168d5565b602082019050919050565b6000602082019050818103600083015261693a816168fe565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b6000815461696e8161658b565b6169788186616941565b9450600182166000811461699357600181146169a8576169db565b60ff19831686528115158202860193506169db565b6169b18561694c565b60005b838110156169d3578154818901526001820191506020810190506169b4565b838801955050505b50505092915050565b60006169f08284616961565b915081905092915050565b7f43616c6c6572206973206e6f74207468652062757965722e0000000000000000600082015250565b6000616a31601883615629565b9150616a3c826169fb565b602082019050919050565b60006020820190508181036000830152616a6081616a24565b9050919050565b6000616a7282615496565b9150616a7d83615496565b9250828201905080821115616a9557616a94616772565b5b92915050565b6000616aa682615496565b9150616ab183615496565b9250828203905081811115616ac957616ac8616772565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000616b098261561e565b616b138185616941565b9350616b2381856020860161563a565b80840191505092915050565b6000616b3b8284616afe565b915081905092915050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000616ba2602983615629565b9150616bad82616b46565b604082019050919050565b60006020820190508181036000830152616bd181616b95565b9050919050565b6000616be382615496565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203616c1557616c14616772565b5b600182019050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302616c6d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82616c30565b616c778683616c30565b95508019841693508086168417925050509392505050565b6000819050919050565b6000616cb4616caf616caa84615496565b616c8f565b615496565b9050919050565b6000819050919050565b616cce83616c99565b616ce2616cda82616cbb565b848454616c3d565b825550505050565b600090565b616cf7616cea565b616d02818484616cc5565b505050565b5b81811015616d2657616d1b600082616cef565b600181019050616d08565b5050565b601f821115616d6b57616d3c8161694c565b616d4584616c20565b81016020851015616d54578190505b616d68616d6085616c20565b830182616d07565b50505b505050565b600082821c905092915050565b6000616d8e60001984600802616d70565b1980831691505092915050565b6000616da78383616d7d565b9150826002028217905092915050565b616dc08261561e565b67ffffffffffffffff811115616dd957616dd86156d5565b5b616de3825461658b565b616dee828285616d2a565b600060209050601f831160018114616e215760008415616e0f578287015190505b616e198582616d9b565b865550616e81565b601f198416616e2f8661694c565b60005b82811015616e5757848901518255600182019150602085019450602081019050616e32565b86831015616e745784890151616e70601f891682616d7d565b8355505b6001600288020188555050505b505050505050565b600081549050616e988161658b565b9050919050565b818103616ead575050616f85565b616eb682616e89565b67ffffffffffffffff811115616ecf57616ece6156d5565b5b616ed9825461658b565b616ee4828285616d2a565b6000601f831160018114616f135760008415616f01578287015490505b616f0b8582616d9b565b865550616f7e565b601f198416616f218761694c565b9650616f2c8661694c565b60005b82811015616f5457848901548255600182019150600185019450602081019050616f2f565b86831015616f715784890154616f6d601f891682616d7d565b8355505b6001600288020188555050505b5050505050505b565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000616fe3602683615629565b9150616fee82616f87565b604082019050919050565b6000602082019050818103600083015261701281616fd6565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000617075602883615629565b915061708082617019565b604082019050919050565b600060208201905081810360008301526170a481617068565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000617107602583615629565b9150617112826170ab565b604082019050919050565b60006020820190508181036000830152617136816170fa565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b6000617199602a83615629565b91506171a48261713d565b604082019050919050565b600060208201905081810360008301526171c88161718c565b9050919050565b600060408201905081810360008301526171e98185615b77565b905081810360208301526171fd8184615b77565b90509392505050565b7f455243313135353a206275726e2066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000617262602383615629565b915061726d82617206565b604082019050919050565b6000602082019050818103600083015261729181617255565b9050919050565b7f455243313135353a206275726e20616d6f756e7420657863656564732062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b60006172f4602483615629565b91506172ff82617298565b604082019050919050565b60006020820190508181036000830152617323816172e7565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000617360602083615629565b915061736b8261732a565b602082019050919050565b6000602082019050818103600083015261738f81617353565b9050919050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b60006173f2602983615629565b91506173fd82617396565b604082019050919050565b60006020820190508181036000830152617421816173e5565b9050919050565b600060408201905061743d600083018561550c565b61744a602083018461550c565b9392505050565b600081519050919050565b600082825260208201905092915050565b600061747882617451565b617482818561745c565b935061749281856020860161563a565b61749b81615664565b840191505092915050565b600060a0820190506174bb6000830188615e9f565b6174c86020830187615e9f565b81810360408301526174da8186615b77565b905081810360608301526174ee8185615b77565b90508181036080830152617502818461746d565b90509695505050505050565b60008151905061751d81615562565b92915050565b6000602082840312156175395761753861542e565b5b60006175478482850161750e565b91505092915050565b60008160e01c9050919050565b600060033d111561757c5760046000803e617579600051617550565b90505b90565b600060443d1061760c57617591615424565b60043d036004823e80513d602482011167ffffffffffffffff821117156175b957505061760c565b808201805167ffffffffffffffff8111156175d7575050505061760c565b80602083010160043d0385018111156175f457505050505061760c565b61760382602001850186615704565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b600061766b603483615629565b91506176768261760f565b604082019050919050565b6000602082019050818103600083015261769a8161765e565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b60006176fd602883615629565b9150617708826176a1565b604082019050919050565b6000602082019050818103600083015261772c816176f0565b9050919050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061778f602183615629565b915061779a82617733565b604082019050919050565b600060208201905081810360008301526177be81617782565b9050919050565b600060a0820190506177da6000830188615e9f565b6177e76020830187615e9f565b6177f4604083018661550c565b617801606083018561550c565b8181036080830152617813818461746d565b90509695505050505050565b7f455243313135353a206275726e20616d6f756e74206578636565647320746f7460008201527f616c537570706c79000000000000000000000000000000000000000000000000602082015250565b600061787b602883615629565b91506178868261781f565b604082019050919050565b600060208201905081810360008301526178aa8161786e565b905091905056fea264697066735822122078e6b643286f9246774eda6553730785d364a44e8c9867816f97690cb687ad5764736f6c63430008110033",
    deployedBytecode:
      "0x6080604052600436106102245760003560e01c80638da5cb5b11610123578063d5c3e327116100ab578063ed1e30551161006f578063ed1e3055146108a7578063f05c25fb146108d2578063f242432a146108fd578063f2fde38b14610926578063f5298aca1461094f57610224565b8063d5c3e3271461079a578063d8601a1f146107c5578063d8c9a7da14610802578063e985e9c51461083f578063eb2bd1541461087c57610224565b8063a2cc50e0116100f2578063a2cc50e01461067d578063acbb4d2b146106ba578063b945ee51146106f7578063bd1d9c4714610734578063bd85b0391461075d57610224565b80638da5cb5b146105d55780639b3b3129146106005780639d5ab4ac14610629578063a22cb4651461065457610224565b8063385f6d24116101b157806353b721b31161017557806353b721b314610516578063547fa8691461053f5780636b20c4541461056a578063715018a61461059357806388e3e8f7146105aa57610224565b8063385f6d24146104045780633bb3a24d14610434578063440222e7146104715780634e1273f41461049c5780634f558e79146104d957610224565b8063127e8e4d116101f8578063127e8e4d1461030b5780631474a3e214610348578063288d3d50146103735780632eb2c2d6146103b0578063306aa230146103d957610224565b8062fdd58e1461022957806301ffc9a7146102665780630a634405146102a35780630e89341c146102ce575b600080fd5b34801561023557600080fd5b50610250600480360381019061024b91906154cc565b610978565b60405161025d919061551b565b60405180910390f35b34801561027257600080fd5b5061028d6004803603810190610288919061558e565b610a40565b60405161029a91906155d6565b60405180910390f35b3480156102af57600080fd5b506102b8610b22565b6040516102c5919061551b565b60405180910390f35b3480156102da57600080fd5b506102f560048036038101906102f091906155f1565b610b27565b60405161030291906156ae565b60405180910390f35b34801561031757600080fd5b50610332600480360381019061032d91906155f1565b610bbb565b60405161033f919061551b565b60405180910390f35b34801561035457600080fd5b5061035d610e04565b60405161036a919061551b565b60405180910390f35b34801561037f57600080fd5b5061039a600480360381019061039591906154cc565b610e09565b6040516103a7919061551b565b60405180910390f35b3480156103bc57600080fd5b506103d760048036038101906103d291906158cd565b610f0a565b005b3480156103e557600080fd5b506103ee610fab565b6040516103fb919061551b565b60405180910390f35b61041e6004803603810190610419919061599c565b610fb0565b60405161042b91906155d6565b60405180910390f35b34801561044057600080fd5b5061045b600480360381019061045691906155f1565b611600565b60405161046891906156ae565b60405180910390f35b34801561047d57600080fd5b506104866116a5565b604051610493919061551b565b60405180910390f35b3480156104a857600080fd5b506104c360048036038101906104be9190615a9f565b6116aa565b6040516104d09190615bd5565b60405180910390f35b3480156104e557600080fd5b5061050060048036038101906104fb91906155f1565b6117c3565b60405161050d91906155d6565b60405180910390f35b34801561052257600080fd5b5061053d60048036038101906105389190615c98565b6117d7565b005b34801561054b57600080fd5b50610554611869565b6040516105619190615df2565b60405180910390f35b34801561057657600080fd5b50610591600480360381019061058c9190615e14565b6119e7565b005b34801561059f57600080fd5b506105a8611a84565b005b3480156105b657600080fd5b506105bf611a98565b6040516105cc919061551b565b60405180910390f35b3480156105e157600080fd5b506105ea611a9d565b6040516105f79190615eae565b60405180910390f35b34801561060c57600080fd5b5061062760048036038101906106229190615c98565b611ac7565b005b34801561063557600080fd5b5061063e611c55565b60405161064b919061551b565b60405180910390f35b34801561066057600080fd5b5061067b60048036038101906106769190615ef5565b611c5a565b005b34801561068957600080fd5b506106a4600480360381019061069f919061599c565b611c70565b6040516106b191906155d6565b60405180910390f35b3480156106c657600080fd5b506106e160048036038101906106dc9190615f5a565b6120de565b6040516106ee919061551b565b60405180910390f35b34801561070357600080fd5b5061071e60048036038101906107199190615fcf565b6122e1565b60405161072b91906155d6565b60405180910390f35b34801561074057600080fd5b5061075b60048036038101906107569190615c98565b612813565b005b34801561076957600080fd5b50610784600480360381019061077f91906155f1565b612913565b604051610791919061551b565b60405180910390f35b3480156107a657600080fd5b506107af612930565b6040516107bc919061551b565b60405180910390f35b3480156107d157600080fd5b506107ec60048036038101906107e79190616022565b612935565b6040516107f991906155d6565b60405180910390f35b34801561080e57600080fd5b50610829600480360381019061082491906155f1565b612f4d565b60405161083691906161ca565b60405180910390f35b34801561084b57600080fd5b50610866600480360381019061086191906161ec565b6131e9565b60405161087391906155d6565b60405180910390f35b34801561088857600080fd5b5061089161327d565b60405161089e919061551b565b60405180910390f35b3480156108b357600080fd5b506108bc613282565b6040516108c9919061551b565b60405180910390f35b3480156108de57600080fd5b506108e7613287565b6040516108f49190616391565b60405180910390f35b34801561090957600080fd5b50610924600480360381019061091f91906163b3565b6135b2565b005b34801561093257600080fd5b5061094d6004803603810190610948919061644a565b613653565b005b34801561095b57600080fd5b5061097660048036038101906109719190616477565b6136d6565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109df9061653c565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610b0b57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610b1b5750610b1a82613789565b5b9050919050565b600081565b606060028054610b369061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b629061658b565b8015610baf5780601f10610b8457610100808354040283529160200191610baf565b820191906000526020600020905b815481529060010190602001808311610b9257829003601f168201915b50505050509050919050565b600060011515610bcb33306131e9565b151514610c0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c049061662e565b60405180910390fd5b338073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610c7a5750610c4b611a9d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610cb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb0906166e6565b60405180910390fd5b60006004811115610ccd57610ccc615d2b565b5b6009600085815260200190815260200160002060050160149054906101000a900460ff166004811115610d0357610d02615d2b565b5b03610d43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3a90616752565b60405180910390fd5b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1690506000610da2826120de565b9050600080610dc660096000898152602001908152602001600020600101546137f3565b9150915060009150606483826fffffffffffffffffffffffffffffffff16610dee91906167a1565b610df89190616812565b95505050505050919050565b600381565b600060011515610e1933306131e9565b151514610e5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e529061662e565b60405180910390fd5b6000610e7c60096000858152602001908152602001600020600101546137f3565b5050620186a0610eda600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166120de565b826fffffffffffffffffffffffffffffffff16610ef791906167a1565b610f019190616812565b91505092915050565b610f12613807565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610f585750610f5785610f52613807565b6131e9565b5b610f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8e906168b5565b60405180910390fd5b610fa4858585858561380f565b5050505050565b600881565b600060011515610fc033306131e9565b151514611002576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff99061662e565b60405180910390fd5b6002600481111561101657611015615d2b565b5b6009600085815260200190815260200160002060050160149054906101000a900460ff16600481111561104c5761104b615d2b565b5b1461108c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108390616921565b60405180910390fd5b600960008481526020019081526020016000206002016040516020016110b291906169e4565b60405160208183030381529060405280519060200120600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160405160200161111a91906169e4565b6040516020818303038152906040528051906020012014611170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116790616a47565b60405180910390fd5b60006009600085815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006009600086815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060036009600087815260200190815260200160002060050160146101000a81548160ff021916908360048111156112205761121f615d2b565b5b021790555060006009600087815260200190815260200160002060030180546112489061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546112749061658b565b80156112c15780601f10611296576101008083540402835291602001916112c1565b820191906000526020600020905b8154815290600101906020018083116112a457829003601f168201915b5050505050905060006112d387610bbb565b905080600660008282546112e79190616a67565b92505081905550600080611310600960008b8152602001908152602001600020600101546137f3565b91509150600091508573ffffffffffffffffffffffffffffffffffffffff166108fc84836fffffffffffffffffffffffffffffffff166113509190616a9b565b9081150290604051600060405180830381858888f1935050505015801561137b573d6000803e3d6000fd5b506003600a600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016040516113cf91906169e4565b908152602001604051809103902089815481106113ef576113ee616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561142257611421615d2b565b5b02179055506003600a856040516114399190616b2f565b9081526020016040518091039020898154811061145957611458616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561148c5761148b615d2b565b5b0217905550600061149d868b610e09565b905060006114ab888c610e09565b90506114b78783613b30565b6114c18882613b30565b6103e8600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546115159190616a67565b925050819055506103e8600860008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546115709190616a67565b9250508190555061158088613ba8565b61158987613ba8565b8773ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f6516606757f8273d99c7742bbfbb61c253cd67ebd5a71cbcf18e618517c2355f8d6040516115e6919061551b565b60405180910390a360019850505050505050505092915050565b6060600b600083815260200190815260200160002080546116209061658b565b80601f016020809104026020016040519081016040528092919081815260200182805461164c9061658b565b80156116995780601f1061166e57610100808354040283529160200191611699565b820191906000526020600020905b81548152906001019060200180831161167c57829003601f168201915b50505050509050919050565b600481565b606081518351146116f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e790616bb8565b60405180910390fd5b6000835167ffffffffffffffff81111561170d5761170c6156d5565b5b60405190808252806020026020018201604052801561173b5781602001602082028036833780820191505090505b50905060005b84518110156117b8576117888582815181106117605761175f616acf565b5b602002602001015185838151811061177b5761177a616acf565b5b6020026020010151610978565b82828151811061179b5761179a616acf565b5b602002602001018181525050806117b190616bd8565b9050611741565b508091505092915050565b6000806117cf83612913565b119050919050565b600115156117e533306131e9565b151514611827576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181e9061662e565b60405180910390fd5b60006118336005613fcf565b905061183f6005613773565b61185b3382600160405180602001604052806000815250613fdd565b6118658183613fef565b5050565b611871615373565b6001151561187f33306131e9565b1515146118c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b89061662e565b60405180910390fd5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820180546119259061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546119519061658b565b801561199e5780601f106119735761010080835404028352916020019161199e565b820191906000526020600020905b81548152906001019060200180831161198157829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660088111156119cc576119cb615d2b565b5b60088111156119de576119dd615d2b565b5b81525050905090565b6119ef613807565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480611a355750611a3483611a2f613807565b6131e9565b5b611a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6b906168b5565b60405180910390fd5b611a7f838383614054565b505050565b611a8c614322565b611a9660006143a0565b565b600781565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60011515611ad533306131e9565b151514611b17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0e9061662e565b60405180910390fd5b60006008811115611b2b57611b2a615d2b565b5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166008811115611b8d57611b8c615d2b565b5b14611b9757600080fd5b80600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019081611be69190616db7565b506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115611c4d57611c4c615d2b565b5b021790555050565b600981565b611c6c611c65613807565b8383614466565b5050565b600060011515611c8033306131e9565b151514611cc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb99061662e565b60405180910390fd5b60006004811115611cd657611cd5615d2b565b5b6009600085815260200190815260200160002060050160149054906101000a900460ff166004811115611d0c57611d0b615d2b565b5b03611d1657600080fd5b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051602001611d6891906169e4565b6040516020818303038152906040528051906020012060096000858152602001908152602001600020600301604051602001611da491906169e4565b604051602081830303815290604052805190602001201480611e675750600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051602001611e1391906169e4565b6040516020818303038152906040528051906020012060096000858152602001908152602001600020600201604051602001611e4f91906169e4565b60405160208183030381529060405280519060200120145b611e7057600080fd5b60006009600085815260200190815260200160002060050160146101000a81548160ff02191690836004811115611eaa57611ea9615d2b565b5b02179055506000600960008581526020019081526020016000206003018054611ed29061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054611efe9061658b565b8015611f4b5780601f10611f2057610100808354040283529160200191611f4b565b820191906000526020600020905b815481529060010190602001808311611f2e57829003601f168201915b505050505090506000600960008681526020019081526020016000206002018054611f759061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054611fa19061658b565b8015611fee5780601f10611fc357610100808354040283529160200191611fee565b820191906000526020600020905b815481529060010190602001808311611fd157829003601f168201915b505050505090506004600a826040516120079190616b2f565b9081526020016040518091039020858154811061202757612026616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561205a57612059615d2b565b5b02179055506004600a836040516120719190616b2f565b9081526020016040518091039020858154811061209157612090616acf565b5b906000526020600020906006020160050160146101000a81548160ff021916908360048111156120c4576120c3615d2b565b5b02179055506120d2856145d2565b60019250505092915050565b6000600115156120ee33306131e9565b151514612130576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121279061662e565b60405180910390fd5b6001600881111561214457612143615d2b565b5b82600881111561215757612156615d2b565b5b0361216557600a90506122dc565b6002600881111561217957612178615d2b565b5b82600881111561218c5761218b615d2b565b5b0361219a57600990506122dc565b600360088111156121ae576121ad615d2b565b5b8260088111156121c1576121c0615d2b565b5b036121cf57600890506122dc565b600460088111156121e3576121e2615d2b565b5b8260088111156121f6576121f5615d2b565b5b0361220457600790506122dc565b6005600881111561221857612217615d2b565b5b82600881111561222b5761222a615d2b565b5b0361223957600690506122dc565b6006600881111561224d5761224c615d2b565b5b8260088111156122605761225f615d2b565b5b0361226e57600590506122dc565b6007600881111561228257612281615d2b565b5b82600881111561229557612294615d2b565b5b036122a357600490506122dc565b6008808111156122b6576122b5615d2b565b5b8260088111156122c9576122c8615d2b565b5b036122d757600390506122dc565b600a90505b919050565b6000600115156122f133306131e9565b151514612333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161232a9061662e565b60405180910390fd5b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180546123829061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546123ae9061658b565b80156123fb5780601f106123d0576101008083540402835291602001916123fb565b820191906000526020600020905b8154815290600101906020018083116123de57829003601f168201915b505050505090506000600860006009600089815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180546124879061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546124b39061658b565b80156125005780601f106124d557610100808354040283529160200191612500565b820191906000526020600020905b8154815290600101906020018083116124e357829003601f168201915b505050505090506001600481111561251b5761251a615d2b565b5b6009600088815260200190815260200160002060050160149054906101000a900460ff16600481111561255157612550615d2b565b5b1461255b57600080fd5b8160405160200161256c9190616b2f565b60405160208183030381529060405280519060200120600960008881526020019081526020016000206003016040516020016125a891906169e4565b60405160208183030381529060405280519060200120146125c857600080fd5b6000846fffffffffffffffffffffffffffffffff1610156125e857600080fd5b60006125f387610bbb565b905080856fffffffffffffffffffffffffffffffff16111561261457600080fd5b60026009600089815260200190815260200160002060050160146101000a81548160ff0219169083600481111561264e5761264d615d2b565b5b0217905550600080612675600960008b8152602001908152602001600020600101546137f3565b915091508691506000612688888361462f565b905080600960008c8152602001908152602001600020600101819055506002600a866040516126b79190616b2f565b90815260200160405180910390208a815481106126d7576126d6616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561270a57612709615d2b565b5b02179055506002600a876040516127219190616b2f565b90815260200160405180910390208a8154811061274157612740616acf565b5b906000526020600020906006020160050160146101000a81548160ff0219169083600481111561277457612773615d2b565b5b0217905550612802600960008c815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960008d815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168c6001604051806020016040528060008152506135b2565b600196505050505050509392505050565b338073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806128805750612851611a9d565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6128bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b6906166e6565b60405180910390fd5b81600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101908161290e9190616db7565b505050565b600060046000838152602001908152602001600020549050919050565b600a81565b60006001151561294533306131e9565b151514612987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161297e9061662e565b60405180910390fd5b61299085614644565b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180546129df9061658b565b80601f0160208091040260200160405190810160405280929190818152602001828054612a0b9061658b565b8015612a585780601f10612a2d57610100808354040283529160200191612a58565b820191906000526020600020905b815481529060010190602001808311612a3b57829003601f168201915b505050505090506000612a6c60008761462f565b90506040518060e00160405280600081526020018281526020018381526020018681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200160016004811115612ade57612add615d2b565b5b8152506009600089815260200190815260200160002060008201518160000155602082015181600101556040820151816002019081612b1d9190616db7565b506060820151816003019081612b339190616db7565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff02191690836004811115612bed57612bec615d2b565b5b0217905550905050600a82604051612c059190616b2f565b9081526020016040518091039020600960008981526020019081526020016000209080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015481600001556001820154816001015560028201816002019081612c779190616e9f565b5060038201816003019081612c8c9190616e9f565b506004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160149054906101000a900460ff168160050160146101000a81548160ff02191690836004811115612d9357612d92615d2b565b5b02179055505050600a85604051612daa9190616b2f565b9081526020016040518091039020600960008981526020019081526020016000209080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015481600001556001820154816001015560028201816002019081612e1c9190616e9f565b5060038201816003019081612e319190616e9f565b506004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820160149054906101000a900460ff168160050160146101000a81548160ff02191690836004811115612f3857612f37615d2b565b5b02179055505050600192505050949350505050565b612f556153a6565b60011515612f6333306131e9565b151514612fa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f9c9061662e565b60405180910390fd5b600960008381526020019081526020016000206040518060e00160405290816000820154815260200160018201548152602001600282018054612fe79061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546130139061658b565b80156130605780601f1061303557610100808354040283529160200191613060565b820191906000526020600020905b81548152906001019060200180831161304357829003601f168201915b505050505081526020016003820180546130799061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546130a59061658b565b80156130f25780601f106130c7576101008083540402835291602001916130f2565b820191906000526020600020905b8154815290600101906020018083116130d557829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff1660048111156131cc576131cb615d2b565b5b60048111156131de576131dd615d2b565b5b815250509050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600581565b600681565b60606001151561329733306131e9565b1515146132d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132d09061662e565b60405180910390fd5b600a600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160405161332a91906169e4565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156135a957838290600052602060002090600602016040518060e0016040529081600082015481526020016001820154815260200160028201805461339f9061658b565b80601f01602080910402602001604051908101604052809291908181526020018280546133cb9061658b565b80156134185780601f106133ed57610100808354040283529160200191613418565b820191906000526020600020905b8154815290600101906020018083116133fb57829003601f168201915b505050505081526020016003820180546134319061658b565b80601f016020809104026020016040519081016040528092919081815260200182805461345d9061658b565b80156134aa5780601f1061347f576101008083540402835291602001916134aa565b820191906000526020600020905b81548152906001019060200180831161348d57829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff16600481111561358457613583615d2b565b5b600481111561359657613595615d2b565b5b8152505081526020019060010190613358565b50505050905090565b6135ba613807565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061360057506135ff856135fa613807565b6131e9565b5b61363f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613636906168b5565b60405180910390fd5b61364c85858585856146a1565b5050505050565b61365b614322565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036136ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016136c190616ff9565b60405180910390fd5b6136d3816143a0565b50565b6136de613807565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061372457506137238361371e613807565b6131e9565b5b613763576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161375a906168b5565b60405180910390fd5b61376e83838361493c565b505050565b6001816000016000828254019250508190555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080829050826016526000519150915091565b600033905090565b8151835114613853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161384a9061708b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036138c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016138b99061711d565b60405180910390fd5b60006138cc613807565b90506138dc818787878787614b82565b60005b8451811015613a8d5760008582815181106138fd576138fc616acf565b5b60200260200101519050600085838151811061391c5761391b616acf565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156139bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016139b4906171af565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254613a729190616a67565b9250508190555050505080613a8690616bd8565b90506138df565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051613b049291906171cf565b60405180910390a4613b1a818787878787614b98565b613b28818787878787614ba0565b505050505050565b613b38614322565b60011515613b4633306131e9565b151514613b88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613b7f9061662e565b60405180910390fd5b613ba48260008360405180602001604052806000815250613fdd565b5050565b60006008811115613bbc57613bbb615d2b565b5b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff166008811115613c1e57613c1d615d2b565b5b03613c2857600080fd5b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050621e8481811115613ce95760088060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613cdf57613cde615d2b565b5b0217905550613fcb565b620f4241811115613d64576007600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613d5a57613d59615d2b565b5b0217905550613fca565b6207a120811115613ddf576006600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613dd557613dd4615d2b565b5b0217905550613fc9565b62030d40811115613e5a576005600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613e5057613e4f615d2b565b5b0217905550613fc8565b620186a0811115613ed5576004600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613ecb57613eca615d2b565b5b0217905550613fc7565b612710811115613f4f576003600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613f4557613f44615d2b565b5b0217905550613fc6565b6107d0811115613fc5576002600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690836008811115613fbf57613fbe615d2b565b5b02179055505b5b5b5b5b5b5b5050565b600081600001549050919050565b613fe984848484614d77565b50505050565b80600b6000848152602001908152602001600020908161400f9190616db7565b50817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b61403b84610b27565b60405161404891906156ae565b60405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036140c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016140ba90617278565b60405180910390fd5b8051825114614107576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016140fe9061708b565b60405180910390fd5b6000614111613807565b905061413181856000868660405180602001604052806000815250614b82565b60005b835181101561427e57600084828151811061415257614151616acf565b5b60200260200101519050600084838151811061417157614170616acf565b5b60200260200101519050600080600084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015614212576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016142099061730a565b60405180910390fd5b81810360008085815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050808061427690616bd8565b915050614134565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516142f69291906171cf565b60405180910390a461431c81856000868660405180602001604052806000815250614b98565b50505050565b61432a613807565b73ffffffffffffffffffffffffffffffffffffffff16614348611a9d565b73ffffffffffffffffffffffffffffffffffffffff161461439e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161439590617376565b60405180910390fd5b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036144d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016144cb90617408565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516145c591906155d6565b60405180910390a3505050565b600015156007600083815260200190815260200160002060009054906101000a900460ff161515031561462c5760006007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b60008160165282600052601651905092915050565b600115156007600083815260200190815260200160002060009054906101000a900460ff161515031561469e5760016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603614710576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016147079061711d565b60405180910390fd5b600061471a613807565b9050600061472785614f27565b9050600061473485614f27565b9050614744838989858589614b82565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050858110156147db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016147d2906171af565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546148909190616a67565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a60405161490d929190617428565b60405180910390a4614923848a8a86868a614b98565b614931848a8a8a8a8a614fa1565b505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036149ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016149a290617278565b60405180910390fd5b60006149b5613807565b905060006149c284614f27565b905060006149cf84614f27565b90506149ef83876000858560405180602001604052806000815250614b82565b600080600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905084811015614a86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614a7d9061730a565b60405180910390fd5b84810360008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628989604051614b53929190617428565b60405180910390a4614b7984886000868660405180602001604052806000815250614b98565b50505050505050565b614b90868686868686615178565b505050505050565b505050505050565b614bbf8473ffffffffffffffffffffffffffffffffffffffff16615348565b15614d6f578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401614c059594939291906174a6565b6020604051808303816000875af1925050508015614c4157506040513d601f19601f82011682018060405250810190614c3e9190617523565b60015b614ce657614c4d61755d565b806308c379a003614ca95750614c6161757f565b80614c6c5750614cab565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614ca091906156ae565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614cdd90617681565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614614d6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614d6490617713565b60405180910390fd5b505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603614de6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614ddd906177a5565b60405180910390fd5b6000614df0613807565b90506000614dfd85614f27565b90506000614e0a85614f27565b9050614e1b83600089858589614b82565b8460008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254614e7a9190616a67565b925050819055508673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628989604051614ef8929190617428565b60405180910390a4614f0f83600089858589614b98565b614f1e83600089898989614fa1565b50505050505050565b60606000600167ffffffffffffffff811115614f4657614f456156d5565b5b604051908082528060200260200182016040528015614f745781602001602082028036833780820191505090505b5090508281600081518110614f8c57614f8b616acf565b5b60200260200101818152505080915050919050565b614fc08473ffffffffffffffffffffffffffffffffffffffff16615348565b15615170578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b81526004016150069594939291906177c5565b6020604051808303816000875af192505050801561504257506040513d601f19601f8201168201806040525081019061503f9190617523565b60015b6150e75761504e61755d565b806308c379a0036150aa575061506261757f565b8061506d57506150ac565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016150a191906156ae565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016150de90617681565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461516e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161516590617713565b60405180910390fd5b505b505050505050565b61518686868686868661536b565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036152375760005b8351811015615235578281815181106151d9576151d8616acf565b5b6020026020010151600460008684815181106151f8576151f7616acf565b5b60200260200101518152602001908152602001600020600082825461521d9190616a67565b925050819055508061522e90616bd8565b90506151bd565b505b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036153405760005b835181101561533e57600084828151811061528c5761528b616acf565b5b6020026020010151905060008483815181106152ab576152aa616acf565b5b6020026020010151905060006004600084815260200190815260200160002054905081811015615310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161530790617891565b60405180910390fd5b81810360046000858152602001908152602001600020819055505050508061533790616bd8565b905061526e565b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b505050505050565b60405180606001604052806000815260200160608152602001600060088111156153a05761539f615d2b565b5b81525090565b6040518060e0016040528060008152602001600080191681526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600481111561541e5761541d615d2b565b5b81525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061546382615438565b9050919050565b61547381615458565b811461547e57600080fd5b50565b6000813590506154908161546a565b92915050565b6000819050919050565b6154a981615496565b81146154b457600080fd5b50565b6000813590506154c6816154a0565b92915050565b600080604083850312156154e3576154e261542e565b5b60006154f185828601615481565b9250506020615502858286016154b7565b9150509250929050565b61551581615496565b82525050565b6000602082019050615530600083018461550c565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61556b81615536565b811461557657600080fd5b50565b60008135905061558881615562565b92915050565b6000602082840312156155a4576155a361542e565b5b60006155b284828501615579565b91505092915050565b60008115159050919050565b6155d0816155bb565b82525050565b60006020820190506155eb60008301846155c7565b92915050565b6000602082840312156156075761560661542e565b5b6000615615848285016154b7565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561565857808201518184015260208101905061563d565b60008484015250505050565b6000601f19601f8301169050919050565b60006156808261561e565b61568a8185615629565b935061569a81856020860161563a565b6156a381615664565b840191505092915050565b600060208201905081810360008301526156c88184615675565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61570d82615664565b810181811067ffffffffffffffff8211171561572c5761572b6156d5565b5b80604052505050565b600061573f615424565b905061574b8282615704565b919050565b600067ffffffffffffffff82111561576b5761576a6156d5565b5b602082029050602081019050919050565b600080fd5b600061579461578f84615750565b615735565b905080838252602082019050602084028301858111156157b7576157b661577c565b5b835b818110156157e057806157cc88826154b7565b8452602084019350506020810190506157b9565b5050509392505050565b600082601f8301126157ff576157fe6156d0565b5b813561580f848260208601615781565b91505092915050565b600080fd5b600067ffffffffffffffff821115615838576158376156d5565b5b61584182615664565b9050602081019050919050565b82818337600083830152505050565b600061587061586b8461581d565b615735565b90508281526020810184848401111561588c5761588b615818565b5b61589784828561584e565b509392505050565b600082601f8301126158b4576158b36156d0565b5b81356158c484826020860161585d565b91505092915050565b600080600080600060a086880312156158e9576158e861542e565b5b60006158f788828901615481565b955050602061590888828901615481565b945050604086013567ffffffffffffffff81111561592957615928615433565b5b615935888289016157ea565b935050606086013567ffffffffffffffff81111561595657615955615433565b5b615962888289016157ea565b925050608086013567ffffffffffffffff81111561598357615982615433565b5b61598f8882890161589f565b9150509295509295909350565b600080604083850312156159b3576159b261542e565b5b60006159c1858286016154b7565b92505060206159d2858286016154b7565b9150509250929050565b600067ffffffffffffffff8211156159f7576159f66156d5565b5b602082029050602081019050919050565b6000615a1b615a16846159dc565b615735565b90508083825260208201905060208402830185811115615a3e57615a3d61577c565b5b835b81811015615a675780615a538882615481565b845260208401935050602081019050615a40565b5050509392505050565b600082601f830112615a8657615a856156d0565b5b8135615a96848260208601615a08565b91505092915050565b60008060408385031215615ab657615ab561542e565b5b600083013567ffffffffffffffff811115615ad457615ad3615433565b5b615ae085828601615a71565b925050602083013567ffffffffffffffff811115615b0157615b00615433565b5b615b0d858286016157ea565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b615b4c81615496565b82525050565b6000615b5e8383615b43565b60208301905092915050565b6000602082019050919050565b6000615b8282615b17565b615b8c8185615b22565b9350615b9783615b33565b8060005b83811015615bc8578151615baf8882615b52565b9750615bba83615b6a565b925050600181019050615b9b565b5085935050505092915050565b60006020820190508181036000830152615bef8184615b77565b905092915050565b600067ffffffffffffffff821115615c1257615c116156d5565b5b615c1b82615664565b9050602081019050919050565b6000615c3b615c3684615bf7565b615735565b905082815260208101848484011115615c5757615c56615818565b5b615c6284828561584e565b509392505050565b600082601f830112615c7f57615c7e6156d0565b5b8135615c8f848260208601615c28565b91505092915050565b600060208284031215615cae57615cad61542e565b5b600082013567ffffffffffffffff811115615ccc57615ccb615433565b5b615cd884828501615c6a565b91505092915050565b600082825260208201905092915050565b6000615cfd8261561e565b615d078185615ce1565b9350615d1781856020860161563a565b615d2081615664565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60098110615d6b57615d6a615d2b565b5b50565b6000819050615d7c82615d5a565b919050565b6000615d8c82615d6e565b9050919050565b615d9c81615d81565b82525050565b6000606083016000830151615dba6000860182615b43565b5060208301518482036020860152615dd28282615cf2565b9150506040830151615de76040860182615d93565b508091505092915050565b60006020820190508181036000830152615e0c8184615da2565b905092915050565b600080600060608486031215615e2d57615e2c61542e565b5b6000615e3b86828701615481565b935050602084013567ffffffffffffffff811115615e5c57615e5b615433565b5b615e68868287016157ea565b925050604084013567ffffffffffffffff811115615e8957615e88615433565b5b615e95868287016157ea565b9150509250925092565b615ea881615458565b82525050565b6000602082019050615ec36000830184615e9f565b92915050565b615ed2816155bb565b8114615edd57600080fd5b50565b600081359050615eef81615ec9565b92915050565b60008060408385031215615f0c57615f0b61542e565b5b6000615f1a85828601615481565b9250506020615f2b85828601615ee0565b9150509250929050565b60098110615f4257600080fd5b50565b600081359050615f5481615f35565b92915050565b600060208284031215615f7057615f6f61542e565b5b6000615f7e84828501615f45565b91505092915050565b60006fffffffffffffffffffffffffffffffff82169050919050565b615fac81615f87565b8114615fb757600080fd5b50565b600081359050615fc981615fa3565b92915050565b600080600060608486031215615fe857615fe761542e565b5b6000615ff6868287016154b7565b9350506020616007868287016154b7565b925050604061601886828701615fba565b9150509250925092565b6000806000806080858703121561603c5761603b61542e565b5b600061604a878288016154b7565b945050602061605b87828801615fba565b935050604085013567ffffffffffffffff81111561607c5761607b615433565b5b61608887828801615c6a565b925050606061609987828801615481565b91505092959194509250565b6000819050919050565b6160b8816160a5565b82525050565b60006160c982615438565b9050919050565b6160d9816160be565b82525050565b600581106160f0576160ef615d2b565b5b50565b6000819050616101826160df565b919050565b6000616111826160f3565b9050919050565b61612181616106565b82525050565b600060e08301600083015161613f6000860182615b43565b50602083015161615260208601826160af565b506040830151848203604086015261616a8282615cf2565b915050606083015184820360608601526161848282615cf2565b915050608083015161619960808601826160d0565b5060a08301516161ac60a08601826160d0565b5060c08301516161bf60c0860182616118565b508091505092915050565b600060208201905081810360008301526161e48184616127565b905092915050565b600080604083850312156162035761620261542e565b5b600061621185828601615481565b925050602061622285828601615481565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060e0830160008301516162706000860182615b43565b50602083015161628360208601826160af565b506040830151848203604086015261629b8282615cf2565b915050606083015184820360608601526162b58282615cf2565b91505060808301516162ca60808601826160d0565b5060a08301516162dd60a08601826160d0565b5060c08301516162f060c0860182616118565b508091505092915050565b60006163078383616258565b905092915050565b6000602082019050919050565b60006163278261622c565b6163318185616237565b93508360208202850161634385616248565b8060005b8581101561637f578484038952815161636085826162fb565b945061636b8361630f565b925060208a01995050600181019050616347565b50829750879550505050505092915050565b600060208201905081810360008301526163ab818461631c565b905092915050565b600080600080600060a086880312156163cf576163ce61542e565b5b60006163dd88828901615481565b95505060206163ee88828901615481565b94505060406163ff888289016154b7565b9350506060616410888289016154b7565b925050608086013567ffffffffffffffff81111561643157616430615433565b5b61643d8882890161589f565b9150509295509295909350565b6000602082840312156164605761645f61542e565b5b600061646e84828501615481565b91505092915050565b6000806000606084860312156164905761648f61542e565b5b600061649e86828701615481565b93505060206164af868287016154b7565b92505060406164c0868287016154b7565b9150509250925092565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b6000616526602a83615629565b9150616531826164ca565b604082019050919050565b6000602082019050818103600083015261655581616519565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806165a357607f821691505b6020821081036165b6576165b561655c565b5b50919050565b7f43616c6c6572206861766520746f20617070726f7665207468697320636f6e7460008201527f726163742061646472657373206d616e6167696e672061737365740000000000602082015250565b6000616618603b83615629565b9150616623826165bc565b604082019050919050565b600060208201905081810360008301526166478161660b565b9050919050565b7f4f6e6c79206f776e6572206f6620636f6e7472616374206f72206f776e65722060008201527f6f662077616c6c65742063616e207365652077616c6c657420696e666f726d6160208201527f74696f6e00000000000000000000000000000000000000000000000000000000604082015250565b60006166d0604483615629565b91506166db8261664e565b606082019050919050565b600060208201905081810360008301526166ff816166c3565b9050919050565b7f4d75737420657869737420696e207472616465207461626c6500000000000000600082015250565b600061673c601983615629565b915061674782616706565b602082019050919050565b6000602082019050818103600083015261676b8161672f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006167ac82615496565b91506167b783615496565b92508282026167c581615496565b915082820484148315176167dc576167db616772565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061681d82615496565b915061682883615496565b925082616838576168376167e3565b5b828204905092915050565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206e6f7220617070726f7665640000000000000000000000000000000000602082015250565b600061689f602f83615629565b91506168aa82616843565b604082019050919050565b600060208201905081810360008301526168ce81616892565b9050919050565b7f5468652070726f64756374206973206e6f742061727269766564207965742e00600082015250565b600061690b601f83615629565b9150616916826168d5565b602082019050919050565b6000602082019050818103600083015261693a816168fe565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b6000815461696e8161658b565b6169788186616941565b9450600182166000811461699357600181146169a8576169db565b60ff19831686528115158202860193506169db565b6169b18561694c565b60005b838110156169d3578154818901526001820191506020810190506169b4565b838801955050505b50505092915050565b60006169f08284616961565b915081905092915050565b7f43616c6c6572206973206e6f74207468652062757965722e0000000000000000600082015250565b6000616a31601883615629565b9150616a3c826169fb565b602082019050919050565b60006020820190508181036000830152616a6081616a24565b9050919050565b6000616a7282615496565b9150616a7d83615496565b9250828201905080821115616a9557616a94616772565b5b92915050565b6000616aa682615496565b9150616ab183615496565b9250828203905081811115616ac957616ac8616772565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000616b098261561e565b616b138185616941565b9350616b2381856020860161563a565b80840191505092915050565b6000616b3b8284616afe565b915081905092915050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000616ba2602983615629565b9150616bad82616b46565b604082019050919050565b60006020820190508181036000830152616bd181616b95565b9050919050565b6000616be382615496565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203616c1557616c14616772565b5b600182019050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302616c6d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82616c30565b616c778683616c30565b95508019841693508086168417925050509392505050565b6000819050919050565b6000616cb4616caf616caa84615496565b616c8f565b615496565b9050919050565b6000819050919050565b616cce83616c99565b616ce2616cda82616cbb565b848454616c3d565b825550505050565b600090565b616cf7616cea565b616d02818484616cc5565b505050565b5b81811015616d2657616d1b600082616cef565b600181019050616d08565b5050565b601f821115616d6b57616d3c8161694c565b616d4584616c20565b81016020851015616d54578190505b616d68616d6085616c20565b830182616d07565b50505b505050565b600082821c905092915050565b6000616d8e60001984600802616d70565b1980831691505092915050565b6000616da78383616d7d565b9150826002028217905092915050565b616dc08261561e565b67ffffffffffffffff811115616dd957616dd86156d5565b5b616de3825461658b565b616dee828285616d2a565b600060209050601f831160018114616e215760008415616e0f578287015190505b616e198582616d9b565b865550616e81565b601f198416616e2f8661694c565b60005b82811015616e5757848901518255600182019150602085019450602081019050616e32565b86831015616e745784890151616e70601f891682616d7d565b8355505b6001600288020188555050505b505050505050565b600081549050616e988161658b565b9050919050565b818103616ead575050616f85565b616eb682616e89565b67ffffffffffffffff811115616ecf57616ece6156d5565b5b616ed9825461658b565b616ee4828285616d2a565b6000601f831160018114616f135760008415616f01578287015490505b616f0b8582616d9b565b865550616f7e565b601f198416616f218761694c565b9650616f2c8661694c565b60005b82811015616f5457848901548255600182019150600185019450602081019050616f2f565b86831015616f715784890154616f6d601f891682616d7d565b8355505b6001600288020188555050505b5050505050505b565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000616fe3602683615629565b9150616fee82616f87565b604082019050919050565b6000602082019050818103600083015261701281616fd6565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000617075602883615629565b915061708082617019565b604082019050919050565b600060208201905081810360008301526170a481617068565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000617107602583615629565b9150617112826170ab565b604082019050919050565b60006020820190508181036000830152617136816170fa565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b6000617199602a83615629565b91506171a48261713d565b604082019050919050565b600060208201905081810360008301526171c88161718c565b9050919050565b600060408201905081810360008301526171e98185615b77565b905081810360208301526171fd8184615b77565b90509392505050565b7f455243313135353a206275726e2066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000617262602383615629565b915061726d82617206565b604082019050919050565b6000602082019050818103600083015261729181617255565b9050919050565b7f455243313135353a206275726e20616d6f756e7420657863656564732062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b60006172f4602483615629565b91506172ff82617298565b604082019050919050565b60006020820190508181036000830152617323816172e7565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000617360602083615629565b915061736b8261732a565b602082019050919050565b6000602082019050818103600083015261738f81617353565b9050919050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b60006173f2602983615629565b91506173fd82617396565b604082019050919050565b60006020820190508181036000830152617421816173e5565b9050919050565b600060408201905061743d600083018561550c565b61744a602083018461550c565b9392505050565b600081519050919050565b600082825260208201905092915050565b600061747882617451565b617482818561745c565b935061749281856020860161563a565b61749b81615664565b840191505092915050565b600060a0820190506174bb6000830188615e9f565b6174c86020830187615e9f565b81810360408301526174da8186615b77565b905081810360608301526174ee8185615b77565b90508181036080830152617502818461746d565b90509695505050505050565b60008151905061751d81615562565b92915050565b6000602082840312156175395761753861542e565b5b60006175478482850161750e565b91505092915050565b60008160e01c9050919050565b600060033d111561757c5760046000803e617579600051617550565b90505b90565b600060443d1061760c57617591615424565b60043d036004823e80513d602482011167ffffffffffffffff821117156175b957505061760c565b808201805167ffffffffffffffff8111156175d7575050505061760c565b80602083010160043d0385018111156175f457505050505061760c565b61760382602001850186615704565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b600061766b603483615629565b91506176768261760f565b604082019050919050565b6000602082019050818103600083015261769a8161765e565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b60006176fd602883615629565b9150617708826176a1565b604082019050919050565b6000602082019050818103600083015261772c816176f0565b9050919050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061778f602183615629565b915061779a82617733565b604082019050919050565b600060208201905081810360008301526177be81617782565b9050919050565b600060a0820190506177da6000830188615e9f565b6177e76020830187615e9f565b6177f4604083018661550c565b617801606083018561550c565b8181036080830152617813818461746d565b90509695505050505050565b7f455243313135353a206275726e20616d6f756e74206578636565647320746f7460008201527f616c537570706c79000000000000000000000000000000000000000000000000602082015250565b600061787b602883615629565b91506178868261781f565b604082019050919050565b600060208201905081810360008301526178aa8161786e565b905091905056fea264697066735822122078e6b643286f9246774eda6553730785d364a44e8c9867816f97690cb687ad5764736f6c63430008110033",
    linkReferences: {},
    deployedLinkReferences: {},
  },
];
