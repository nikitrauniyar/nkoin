import crypto from 'crypto';

export class CryptoBlock {
	public index: number;
	public timestamp: string;
	public data: Record<string, any>;
	public precedingHash: string;
	public hash: string;
	public nonce: number;

	constructor(index: number, timestamp: string, data: Record<string, any>, precedingHash = ' ') {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.precedingHash = precedingHash;
		this.hash = this.computeHash();
		this.nonce = 0;
	}

	computeHash() {
		return crypto
			.createHash('sha256')
			.update(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data) + this.nonce)
			.digest('hex');
	}

	proofOfWork(difficulty: number): void {
		console.log(Array(5).join('0'));
		while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
			this.nonce++;
			this.hash = this.computeHash();
		}
	}
}
