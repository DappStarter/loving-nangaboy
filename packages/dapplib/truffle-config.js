require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rescue mad smooth gesture beach tattoo giggle'; 
let testAccounts = [
"0x3823d7479de8394f4206d7213ae8e32a3428f51958ac46e59389acf5f28cd9cf",
"0x8629499f88909736c0db74d26f09f126a54b37511d105cc7c2aa662cefb84c72",
"0x1ec58d98f934110fb94bfe46bb3ca4b37cc17fca7af6695c7d82acd3ef4eb940",
"0xb9c65e8c95674a9287fe9032a66a748adef6e9ec5a423bbac4f8af0ad6010b15",
"0x9eb7f526946b6a22beaeab941ad3136442e20cd5340e48a1690b66223afc91f3",
"0xd69e285a5a7ac661e30dfecf6469a1e15471a354c6e274393c30b59a157d5d87",
"0x280f875b44b74fb40ad55c8f7a8306aa4601825872695ccd6fbb51adb177d4bd",
"0x7f0692a1be8ca23abeb3e78243cbef05c982e713845e69d980a548e3c057e2dd",
"0xff143fa6b309811ae14f23fb9317943cdafd68d7960773086dfa553edc595c63",
"0xd74a8412a1925e16ef0668b0b6d398962082ce162a4ff346a4b331b5620de929"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
