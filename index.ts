import { CryptoBlock } from "./CryptoBlock";
import { CryptoBlockchain } from "./CryptoBlockchain";

try {
  const nkoin: CryptoBlockchain = new CryptoBlockchain();

  console.log("nkoin mining in progress....");
  const block1: CryptoBlock = new CryptoBlock(1, String(Date.now()), {
    sender: "nikit",
    receiver: "jack",
    amount: 0.00000122
  });
  // console.log(block1);
  const block2: CryptoBlock = new CryptoBlock(2, String(Date.now()), {
    sender: "jack",
    receiver: "beck",
    amount: 1.00000122
  });
  // console.log(block2);
  nkoin.addNewBlock(block1);
  nkoin.addNewBlock(block2);
  console.log("blocks added");
  console.log(JSON.stringify(nkoin, null, 4));
} catch (error: any) {
  console.log(error);
}
