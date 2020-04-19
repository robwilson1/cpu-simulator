import { orGate, andGate, notGate } from "../gates";

const defaultBit = 0b0;

export class AndOrLatch {
	constructor() {
		this.current = defaultBit;
	}

	get output() {
		return this.current;
	}

	trigger(set = defaultBit, reset = defaultBit) {
		const orResult = orGate(this.current, set);
		const andResult = andGate(orResult, notGate(reset));
		this.current = andResult;
	}
}
