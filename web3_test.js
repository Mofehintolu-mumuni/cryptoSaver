const Web3 = require('web3');

//const web3 = new Web3('HTTP://127.0.0.1:7545');

//const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:7545'), null, {});

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

var Contract_Address = "0xeB8AbF1241BE05e3eF24d0385f48c3EE9115CEfe";

var abi = [{
    "contractName": "infura_test",
    "abi": [{
            "constant": true,
            "inputs": [],
            "name": "Namer",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "Name_set_store",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "Name_set_count_store",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [{
                "name": "_Namer",
                "type": "string"
            }],
            "name": "SetName",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5060408051808201909152600a81527f5761726d696e67207570000000000000000000000000000000000000000000006020820190815260038054600190810191829055805480820182557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6019190915560028054918201808255600091909152835190926100c1927f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01916100dd565b505080516100d69060009060208401906100dd565b5050610178565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011e57805160ff191683800117855561014b565b8280016001018555821561014b579182015b8281111561014b578251825591602001919060010190610130565b5061015792915061015b565b5090565b61017591905b808211156101575760008155600101610161565b90565b6104c4806101876000396000f3fe6080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633459fd7c81146100665780634df9dcd3146100f05780638074fe51146101b7578063d416041a146101e1575b600080fd5b34801561007257600080fd5b5061007b61021d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100b557818101518382015260200161009d565b50505050905090810190601f1680156100e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100fc57600080fd5b506101a36004803603602081101561011357600080fd5b81019060208101813564010000000081111561012e57600080fd5b82018360208201111561014057600080fd5b8035906020019184600183028401116401000000008311171561016257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102ab945050505050565b604080519115158252519081900360200190f35b3480156101c357600080fd5b5061007b600480360360208110156101da57600080fd5b503561036a565b3480156101ed57600080fd5b5061020b6004803603602081101561020457600080fd5b50356103de565b60408051918252519081900360200190f35b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102a35780601f10610278576101008083540402835291602001916102a3565b820191906000526020600020905b81548152906001019060200180831161028657829003601f168201915b505050505081565b6000806003541180156102c057506001546000105b15156102cb57600080fd5b600380546001908101918290558054808201825560009182527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60191909155825161031b919060208501906103fd565b5060028054600181018083556000929092528351610360917f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace019060208601906103fd565b5060019392505050565b600280548290811061037857fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156102a35780601f10610278576101008083540402835291602001916102a3565b60018054829081106103ec57fe5b600091825260209091200154905081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061043e57805160ff191683800117855561046b565b8280016001018555821561046b579182015b8281111561046b578251825591602001919060010190610450565b5061047792915061047b565b5090565b61049591905b808211156104775760008155600101610481565b9056fea165627a7a723058203612b1a4564a111ec6cd4340509bfe7b6f4c4be9014f51ac0b2ba96d04d985210029",
    "deployedBytecode": "0x6080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633459fd7c81146100665780634df9dcd3146100f05780638074fe51146101b7578063d416041a146101e1575b600080fd5b34801561007257600080fd5b5061007b61021d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100b557818101518382015260200161009d565b50505050905090810190601f1680156100e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100fc57600080fd5b506101a36004803603602081101561011357600080fd5b81019060208101813564010000000081111561012e57600080fd5b82018360208201111561014057600080fd5b8035906020019184600183028401116401000000008311171561016257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102ab945050505050565b604080519115158252519081900360200190f35b3480156101c357600080fd5b5061007b600480360360208110156101da57600080fd5b503561036a565b3480156101ed57600080fd5b5061020b6004803603602081101561020457600080fd5b50356103de565b60408051918252519081900360200190f35b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102a35780601f10610278576101008083540402835291602001916102a3565b820191906000526020600020905b81548152906001019060200180831161028657829003601f168201915b505050505081565b6000806003541180156102c057506001546000105b15156102cb57600080fd5b600380546001908101918290558054808201825560009182527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60191909155825161031b919060208501906103fd565b5060028054600181018083556000929092528351610360917f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace019060208601906103fd565b5060019392505050565b600280548290811061037857fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156102a35780601f10610278576101008083540402835291602001916102a3565b60018054829081106103ec57fe5b600091825260209091200154905081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061043e57805160ff191683800117855561046b565b8280016001018555821561046b579182015b8281111561046b578251825591602001919060010190610450565b5061047792915061047b565b5090565b61049591905b808211156104775760008155600101610481565b9056fea165627a7a723058203612b1a4564a111ec6cd4340509bfe7b6f4c4be9014f51ac0b2ba96d04d985210029",
    "sourceMap": "36:671:1:-;;;185:186;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;214:35:1;;;;;;;;;;;;;;;;;;;252:16;:18;;;;;;;;;;27:10:-1;;23:18;;;45:23;;273:43:1;;;;;;-1:-1:-1;27:10;;23:18;;;45:23;;;-1:-1;319:27:1;;;;;;23:18:-1;;319:27:1;;;;;;:::i;:::-;-1:-1:-1;;351:14:1;;;;:5;;:14;;;;;:::i;:::-;;185:186;36:671;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;36:671:1;;;-1:-1:-1;36:671:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "36:671:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;61:19;;8:9:-1;5:2;;;30:1;27;20:12;5:2;61:19:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;61:19:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;490:206;;8:9:-1;5:2;;;30:1;27;20:12;5:2;490:206:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;490:206:1;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;490:206:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;490:206:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;490:206:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;490:206:1;;-1:-1:-1;490:206:1;;-1:-1:-1;;;;;490:206:1;;;;;;;;;;;;;;;;;;;124:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;124:30:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;124:30:1;;;85:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;85:34:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;85:34:1;;;;;;;;;;;;;;;;;;;61:19;;;;;;;;;;;;;;;-1:-1:-1;;61:19:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;490:206::-;555:4;435:1;416:16;;:20;415:59;;;;-1:-1:-1;442:20:1;:27;472:1;-1:-1:-1;415:59:1;407:68;;;;;;;;565:16;:18;;;;;;;;;;27:10:-1;;23:18;;;45:23;;565:16:1;586:43;;;;;;;;;632:14;;;;565:16;586:43;632:14;;;;:::i;:::-;-1:-1:-1;649:14:1;27:10:-1;;39:1;23:18;;45:23;;;-1:-1;649:27:1;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;688:4:1;;490:206;-1:-1:-1;;;490:206:1:o;124:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;124:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;124:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;85:34;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;85:34:1;:::o;36:671::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;36:671:1;;;-1:-1:-1;36:671:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity >=0.4.21 <0.6.0;\r\n\r\ncontract infura_test{\r\n\r\nstring public Namer;\r\n\r\nuint[] public Name_set_count_store;\r\n\r\nstring[] public Name_set_store;\r\n\r\nuint Name_set_counter;\r\n\r\nconstructor()public \r\n{\r\n    string memory _Namer = \"Warming up\";\r\nName_set_counter++;\r\nName_set_count_store.push(Name_set_counter);\r\nName_set_store.push(_Namer);\r\n\r\nNamer = _Namer;\r\n\r\n}\r\n\r\n\r\nmodifier CheckCount()\r\n{\r\n    require((Name_set_counter > 0) && (Name_set_count_store.length > 0));\r\n _;\r\n}\r\n\r\n\r\nfunction SetName(string memory _Namer) CheckCount public returns(bool)\r\n{\r\nName_set_counter++;\r\nName_set_count_store.push(Name_set_counter);\r\nNamer = _Namer;\r\nName_set_store.push(_Namer);\r\n\r\nreturn true;\r\n}\r\n\r\n\r\n\r\n\r\n}",
    "sourcePath": "C:/Users/Dr. Mrs A.A.O/Desktop/SOFTWARE-RESOURCES/software books organized/SOLIDITY/infura_truffle/contracts/infura_test.sol",
    "ast": {
        "absolutePath": "/C/Users/Dr. Mrs A.A.O/Desktop/SOFTWARE-RESOURCES/software books organized/SOLIDITY/infura_truffle/contracts/infura_test.sol",
        "exportedSymbols": {
            "infura_test": [
                144
            ]
        },
        "id": 145,
        "nodeType": "SourceUnit",
        "nodes": [{
                "id": 58,
                "literals": [
                    "solidity",
                    ">=",
                    "0.4",
                    ".21",
                    "<",
                    "0.6",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:32:1"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 144,
                "linearizedBaseContracts": [
                    144
                ],
                "name": "infura_test",
                "nodeType": "ContractDefinition",
                "nodes": [{
                        "constant": false,
                        "id": 60,
                        "name": "Namer",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "61:19:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 59,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "61:6:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 63,
                        "name": "Name_set_count_store",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "85:34:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 61,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "85:4:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "id": 62,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "85:6:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                "typeString": "uint256[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 66,
                        "name": "Name_set_store",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "124:30:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 64,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "124:6:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 65,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "124:8:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 68,
                        "name": "Name_set_counter",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "159:21:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 67,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "159:4:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 94,
                            "nodeType": "Block",
                            "src": "207:164:1",
                            "statements": [{
                                    "assignments": [
                                        72
                                    ],
                                    "declarations": [{
                                        "constant": false,
                                        "id": 72,
                                        "name": "_Namer",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 94,
                                        "src": "214:20:1",
                                        "stateVariable": false,
                                        "storageLocation": "memory",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string"
                                        },
                                        "typeName": {
                                            "id": 71,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "214:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }],
                                    "id": 74,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "hexValue": "5761726d696e67207570",
                                        "id": 73,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "237:12:1",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_1ae434268506fe608f694f0a4ee641b41c2f2b7922ed2155c2c50d5a6edfd0a3",
                                            "typeString": "literal_string \"Warming up\""
                                        },
                                        "value": "Warming up"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "214:35:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 76,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "252:18:1",
                                        "subExpression": {
                                            "argumentTypes": null,
                                            "id": 75,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "252:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 77,
                                    "nodeType": "ExpressionStatement",
                                    "src": "252:18:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 81,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "299:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 78,
                                                "name": "Name_set_count_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 63,
                                                "src": "273:20:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                    "typeString": "uint256[] storage ref"
                                                }
                                            },
                                            "id": 80,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "273:25:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 82,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "273:43:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 83,
                                    "nodeType": "ExpressionStatement",
                                    "src": "273:43:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 87,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72,
                                            "src": "339:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 84,
                                                "name": "Name_set_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66,
                                                "src": "319:14:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 86,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "319:19:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$",
                                                "typeString": "function (string storage ref) returns (uint256)"
                                            }
                                        },
                                        "id": 88,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "319:27:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 89,
                                    "nodeType": "ExpressionStatement",
                                    "src": "319:27:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 92,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 90,
                                            "name": "Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60,
                                            "src": "351:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 91,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72,
                                            "src": "359:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "351:14:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 93,
                                    "nodeType": "ExpressionStatement",
                                    "src": "351:14:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 95,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 69,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "196:2:1"
                        },
                        "returnParameters": {
                            "id": 70,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "207:0:1"
                        },
                        "scope": 144,
                        "src": "185:186:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 111,
                            "nodeType": "Block",
                            "src": "400:84:1",
                            "statements": [{
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 107,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "components": [{
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 100,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 98,
                                                        "name": "Name_set_counter",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 68,
                                                        "src": "416:16:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 99,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "435:1:1",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "416:20:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }],
                                                "id": 101,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "415:22:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "&&",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "components": [{
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 105,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 102,
                                                            "name": "Name_set_count_store",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 63,
                                                            "src": "442:20:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                                "typeString": "uint256[] storage ref"
                                                            }
                                                        },
                                                        "id": 103,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "length",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "442:27:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 104,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "472:1:1",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "442:31:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }],
                                                "id": 106,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "441:33:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "415:59:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }],
                                            "id": 97,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                162,
                                                163
                                            ],
                                            "referencedDeclaration": 162,
                                            "src": "407:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 108,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "407:68:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 109,
                                    "nodeType": "ExpressionStatement",
                                    "src": "407:68:1"
                                },
                                {
                                    "id": 110,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "479:1:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 112,
                        "name": "CheckCount",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 96,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "396:2:1"
                        },
                        "src": "377:107:1",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 142,
                            "nodeType": "Block",
                            "src": "562:134:1",
                            "statements": [{
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "565:18:1",
                                        "subExpression": {
                                            "argumentTypes": null,
                                            "id": 121,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "565:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 123,
                                    "nodeType": "ExpressionStatement",
                                    "src": "565:18:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 127,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "612:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 124,
                                                "name": "Name_set_count_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 63,
                                                "src": "586:20:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                    "typeString": "uint256[] storage ref"
                                                }
                                            },
                                            "id": 126,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "586:25:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "586:43:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 129,
                                    "nodeType": "ExpressionStatement",
                                    "src": "586:43:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 130,
                                            "name": "Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60,
                                            "src": "632:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 131,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 114,
                                            "src": "640:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "632:14:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 133,
                                    "nodeType": "ExpressionStatement",
                                    "src": "632:14:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 137,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 114,
                                            "src": "669:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 134,
                                                "name": "Name_set_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66,
                                                "src": "649:14:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 136,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "649:19:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$",
                                                "typeString": "function (string storage ref) returns (uint256)"
                                            }
                                        },
                                        "id": 138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "649:27:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 139,
                                    "nodeType": "ExpressionStatement",
                                    "src": "649:27:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "hexValue": "74727565",
                                        "id": 140,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "688:4:1",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 120,
                                    "id": 141,
                                    "nodeType": "Return",
                                    "src": "681:11:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 143,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [{
                            "arguments": null,
                            "id": 117,
                            "modifierName": {
                                "argumentTypes": null,
                                "id": 116,
                                "name": "CheckCount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 112,
                                "src": "529:10:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_modifier$__$",
                                    "typeString": "modifier ()"
                                }
                            },
                            "nodeType": "ModifierInvocation",
                            "src": "529:10:1"
                        }],
                        "name": "SetName",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 115,
                            "nodeType": "ParameterList",
                            "parameters": [{
                                "constant": false,
                                "id": 114,
                                "name": "_Namer",
                                "nodeType": "VariableDeclaration",
                                "scope": 143,
                                "src": "507:20:1",
                                "stateVariable": false,
                                "storageLocation": "memory",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 113,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "507:6:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }],
                            "src": "506:22:1"
                        },
                        "returnParameters": {
                            "id": 120,
                            "nodeType": "ParameterList",
                            "parameters": [{
                                "constant": false,
                                "id": 119,
                                "name": "",
                                "nodeType": "VariableDeclaration",
                                "scope": 143,
                                "src": "555:4:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 118,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "555:4:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }],
                            "src": "554:6:1"
                        },
                        "scope": 144,
                        "src": "490:206:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 145,
                "src": "36:671:1"
            }
        ],
        "src": "0:707:1"
    },
    "legacyAST": {
        "absolutePath": "/C/Users/Dr. Mrs A.A.O/Desktop/SOFTWARE-RESOURCES/software books organized/SOLIDITY/infura_truffle/contracts/infura_test.sol",
        "exportedSymbols": {
            "infura_test": [
                144
            ]
        },
        "id": 145,
        "nodeType": "SourceUnit",
        "nodes": [{
                "id": 58,
                "literals": [
                    "solidity",
                    ">=",
                    "0.4",
                    ".21",
                    "<",
                    "0.6",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:32:1"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 144,
                "linearizedBaseContracts": [
                    144
                ],
                "name": "infura_test",
                "nodeType": "ContractDefinition",
                "nodes": [{
                        "constant": false,
                        "id": 60,
                        "name": "Namer",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "61:19:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 59,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "61:6:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 63,
                        "name": "Name_set_count_store",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "85:34:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 61,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "85:4:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "id": 62,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "85:6:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                "typeString": "uint256[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 66,
                        "name": "Name_set_store",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "124:30:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 64,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "124:6:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 65,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "124:8:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 68,
                        "name": "Name_set_counter",
                        "nodeType": "VariableDeclaration",
                        "scope": 144,
                        "src": "159:21:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 67,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "159:4:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 94,
                            "nodeType": "Block",
                            "src": "207:164:1",
                            "statements": [{
                                    "assignments": [
                                        72
                                    ],
                                    "declarations": [{
                                        "constant": false,
                                        "id": 72,
                                        "name": "_Namer",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 94,
                                        "src": "214:20:1",
                                        "stateVariable": false,
                                        "storageLocation": "memory",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string"
                                        },
                                        "typeName": {
                                            "id": 71,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "214:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }],
                                    "id": 74,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "hexValue": "5761726d696e67207570",
                                        "id": 73,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "237:12:1",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_1ae434268506fe608f694f0a4ee641b41c2f2b7922ed2155c2c50d5a6edfd0a3",
                                            "typeString": "literal_string \"Warming up\""
                                        },
                                        "value": "Warming up"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "214:35:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 76,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "252:18:1",
                                        "subExpression": {
                                            "argumentTypes": null,
                                            "id": 75,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "252:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 77,
                                    "nodeType": "ExpressionStatement",
                                    "src": "252:18:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 81,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "299:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 78,
                                                "name": "Name_set_count_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 63,
                                                "src": "273:20:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                    "typeString": "uint256[] storage ref"
                                                }
                                            },
                                            "id": 80,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "273:25:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 82,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "273:43:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 83,
                                    "nodeType": "ExpressionStatement",
                                    "src": "273:43:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 87,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72,
                                            "src": "339:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 84,
                                                "name": "Name_set_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66,
                                                "src": "319:14:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 86,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "319:19:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$",
                                                "typeString": "function (string storage ref) returns (uint256)"
                                            }
                                        },
                                        "id": 88,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "319:27:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 89,
                                    "nodeType": "ExpressionStatement",
                                    "src": "319:27:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 92,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 90,
                                            "name": "Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60,
                                            "src": "351:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 91,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72,
                                            "src": "359:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "351:14:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 93,
                                    "nodeType": "ExpressionStatement",
                                    "src": "351:14:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 95,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 69,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "196:2:1"
                        },
                        "returnParameters": {
                            "id": 70,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "207:0:1"
                        },
                        "scope": 144,
                        "src": "185:186:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 111,
                            "nodeType": "Block",
                            "src": "400:84:1",
                            "statements": [{
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "id": 107,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "components": [{
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 100,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 98,
                                                        "name": "Name_set_counter",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 68,
                                                        "src": "416:16:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 99,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "435:1:1",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "416:20:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }],
                                                "id": 101,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "415:22:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "&&",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "components": [{
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 105,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 102,
                                                            "name": "Name_set_count_store",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 63,
                                                            "src": "442:20:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                                "typeString": "uint256[] storage ref"
                                                            }
                                                        },
                                                        "id": 103,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "length",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "442:27:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 104,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "472:1:1",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "442:31:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }],
                                                "id": 106,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "441:33:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "src": "415:59:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }],
                                            "id": 97,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                162,
                                                163
                                            ],
                                            "referencedDeclaration": 162,
                                            "src": "407:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 108,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "407:68:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 109,
                                    "nodeType": "ExpressionStatement",
                                    "src": "407:68:1"
                                },
                                {
                                    "id": 110,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "479:1:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 112,
                        "name": "CheckCount",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 96,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "396:2:1"
                        },
                        "src": "377:107:1",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 142,
                            "nodeType": "Block",
                            "src": "562:134:1",
                            "statements": [{
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "565:18:1",
                                        "subExpression": {
                                            "argumentTypes": null,
                                            "id": 121,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "565:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 123,
                                    "nodeType": "ExpressionStatement",
                                    "src": "565:18:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 127,
                                            "name": "Name_set_counter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "612:16:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 124,
                                                "name": "Name_set_count_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 63,
                                                "src": "586:20:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                    "typeString": "uint256[] storage ref"
                                                }
                                            },
                                            "id": 126,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "586:25:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "586:43:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 129,
                                    "nodeType": "ExpressionStatement",
                                    "src": "586:43:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 130,
                                            "name": "Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 60,
                                            "src": "632:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 131,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 114,
                                            "src": "640:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "632:14:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 133,
                                    "nodeType": "ExpressionStatement",
                                    "src": "632:14:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [{
                                            "argumentTypes": null,
                                            "id": 137,
                                            "name": "_Namer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 114,
                                            "src": "669:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        }],
                                        "expression": {
                                            "argumentTypes": [{
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 134,
                                                "name": "Name_set_store",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 66,
                                                "src": "649:14:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 136,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "649:19:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$",
                                                "typeString": "function (string storage ref) returns (uint256)"
                                            }
                                        },
                                        "id": 138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "649:27:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 139,
                                    "nodeType": "ExpressionStatement",
                                    "src": "649:27:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "hexValue": "74727565",
                                        "id": 140,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "688:4:1",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 120,
                                    "id": 141,
                                    "nodeType": "Return",
                                    "src": "681:11:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 143,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [{
                            "arguments": null,
                            "id": 117,
                            "modifierName": {
                                "argumentTypes": null,
                                "id": 116,
                                "name": "CheckCount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 112,
                                "src": "529:10:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_modifier$__$",
                                    "typeString": "modifier ()"
                                }
                            },
                            "nodeType": "ModifierInvocation",
                            "src": "529:10:1"
                        }],
                        "name": "SetName",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 115,
                            "nodeType": "ParameterList",
                            "parameters": [{
                                "constant": false,
                                "id": 114,
                                "name": "_Namer",
                                "nodeType": "VariableDeclaration",
                                "scope": 143,
                                "src": "507:20:1",
                                "stateVariable": false,
                                "storageLocation": "memory",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 113,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "507:6:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }],
                            "src": "506:22:1"
                        },
                        "returnParameters": {
                            "id": 120,
                            "nodeType": "ParameterList",
                            "parameters": [{
                                "constant": false,
                                "id": 119,
                                "name": "",
                                "nodeType": "VariableDeclaration",
                                "scope": 143,
                                "src": "555:4:1",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 118,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "555:4:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }],
                            "src": "554:6:1"
                        },
                        "scope": 144,
                        "src": "490:206:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 145,
                "src": "36:671:1"
            }
        ],
        "src": "0:707:1"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
    },
    "networks": {
        "5777": {
            "events": {},
            "links": {},
            "address": "0xf5d5A7f6dd2299cE25935066A26d5306B8192A38",
            "transactionHash": "0x8f3af620a45a5dcac772e4e92373f1c44748a28a283bd90f41a88432ed851b0c"
        }
    },
    "schemaVersion": "3.0.1",
    "updatedAt": "2019-07-15T22:06:17.446Z",
    "devdoc": {
        "methods": {}
    },
    "userdoc": {
        "methods": {}
    }
}];

var account = '0xA6480031cF51bd5c24BB94fCb15592BF36B345BC';

const ContractWeb3 = new web3.eth.Contract(abi, Contract_Address, {
    from: account,
    gasLimit: 3000000,
});





/*ContractWeb3.methods.SetName("string memory _Namer").call((err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
*/

//console.log(ContractWeb3.address);

async function getter() {
    var check = await ContractWeb3.methods.SetName("string memory _Namer").call();

    console.log(check);
}


getter();

/*
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')

let web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/---your api key-----"
  )
)

const account = '0x46fC1600b1869b3b4F9097185...'; //Your account address
const privateKey = Buffer.from('6e4702be2aa6b2c96ca22df40a004c2c944...', 'hex');
const contractAddress = '0x2b622616e3f338266a4becb32...'; // Deployed manually
const abi = [Your ABI from contract]
const contract = new web3.eth.Contract(abi, contractAddress, {
  from: account,
  gasLimit: 3000000,
});

const contractFunction = contract.methods.createCampaign(0.1); // Here you can call your contract functions

const functionAbi = contractFunction.encodeABI();

let estimatedGas;
let nonce;

console.log("Getting gas estimate");

contractFunction.estimateGas({from: account}).then((gasAmount) => {
  estimatedGas = gasAmount.toString(16);

  console.log("Estimated gas: " + estimatedGas);

  web3.eth.getTransactionCount(account).then(_nonce => {
    nonce = _nonce.toString(16);

    console.log("Nonce: " + nonce);
    const txParams = {
      gasPrice: 100000,
      gasLimit: 3000000,
      to: contractAddress,
      data: functionAbi,
      from: account,
      nonce: '0x' + nonce
    };

    const tx = new Tx(txParams);
    tx.sign(privateKey); // Transaction Signing here

    const serializedTx = tx.serialize();

    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
      console.log(receipt);
    })
  });
});
*/