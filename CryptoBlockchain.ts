import { CryptoBlock } from './CryptoBlock';

export class CryptoBlockchain {
	public blockchain: CryptoBlock[];
	public difficulty: number;
	constructor() {
		this.blockchain = [this.startGenesisBlock()];
		this.difficulty = 4;
	}

	startGenesisBlock(): CryptoBlock {
		return new CryptoBlock(0, String(Date.now()), { data: 'Initial Block of the chain' }, '0');
	}

	obtainLatestBlock(): CryptoBlock {
		return this.blockchain[this.blockchain.length - 1];
	}

	addNewBlock(newBlock: CryptoBlock): void {
		newBlock.precedingHash = this.obtainLatestBlock().hash;
		console.log(newBlock);
		// newBlock.hash = newBlock.computeHash();
		this.checkChainValidity();
		newBlock.proofOfWork(this.difficulty);
		this.difficulty++;
		this.blockchain.push(newBlock);
	}

	checkChainValidity(): boolean {
		for (let i = 1; i < this.blockchain.length; i++) {
			const currentBlock: CryptoBlock = this.blockchain[i];
			const precedingBlock: CryptoBlock = this.blockchain[i - 1];

			if (currentBlock.hash !== currentBlock.computeHash()) return false;

			if (currentBlock.precedingHash !== precedingBlock.hash) return false;

			return true;
		}
		return false;
	}
}
