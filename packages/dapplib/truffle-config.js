require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet reward stereo coin grace depth furnace gift'; 
let testAccounts = [
"0x01e8d3c6c390558df5235534f7d77e94fa4da48a2867b9cfe1564047ba7a9f3a",
"0xf1533ca5f9efe1f26e6fd276a82a8bdd018d5fa62bb7ed94bc63ebb78b1996c8",
"0xb4a5fab1fe19eb0cb012db958e040b2d79a787540b4dc50f9b58c0fd3137f4fc",
"0xe22633877ed74cf58b61dbc1851e8247bb6a241c89026f9f26e93c6dc840dab5",
"0xb2ae701a7e2f05cf20e55c8c37bae8218786ed6a6fb180677a3e10a89ac62ff7",
"0x8ca6b4bb47a405f4681808d2dd70be9af5952724ce8eeb43c78f66fb9ac6c482",
"0xaad7a2da7a249014e526d3314505a5ef4d664f5998ca6b526baa72d7ea36cc5f",
"0xb24a2f0273268a83be6b1100bc64812d386b6399bfe4bfcc417337eaf9d218df",
"0xda2d85faaff5f06585965743c94fc97280b0e7314bbd355a1540c442f93b4a24",
"0x5fa802643c03a9efc069d918ed4d34d3c2cccc036b90845d22349c3ac7e21a38"
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
