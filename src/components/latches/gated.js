import { andGate, notGate } from "../gates";
import { AndOrLatch } from "./and-or";

const defaultBit = 0b0;

export class GatedLatch {
	constructor() {
		this.andOrLatch = new AndOrLatch();
	}

	get output() {
		return this.andOrLatch.current;
	}

	trigger(dataInput = defaultBit, writeEnable = defaultBit) {
		const set = andGate(dataInput, writeEnable);
		const reset = andGate(notGate(dataInput), writeEnable);
		this.andOrLatch.trigger(set, reset);
	}
}
