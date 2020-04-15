const Web3=require('web3')
async function main(){
    const testnet = 'https://mainnet.infura.io/v3/88ae0e6a5f5e46a89c9398ccefc41647';
    const walletAddress = '0xc94770007dda54cF92009BFF0dE90c06F603a09f';

    const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
    var balance = await web3.eth.getBalance(walletAddress); //Will give value in.
    console.log(balance)
    // balance = web3.toDecimal(balance);
}
main()

// web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
// .once('transactionHash', function(hash){ ... })
// .once('receipt', function(receipt){ ... })
// .on('confirmation', function(confNumber, receipt){ ... })
// .on('error', function(error){ ... })
// .then(function(receipt){
//     // will be fired once the receipt is mined
// });

//code C#
//get balance
// var b = Web3.Convert.FromWei(balance, int.Parse(deci));

//tranfer coin
// TokenTranfer tranfer = new TokenTranfer();
// string url = "https://mainnet.infura.io/dW9nzrZ4ad6kCn0sHzD9";
// tranfer.Build(private_key, constract,vi_nhan, url,deci,sl, gas);
// var task = tranfer.TransferAsync();