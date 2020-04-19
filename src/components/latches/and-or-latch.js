import "../../util/types";
import { defaultBit } from "../../util/defaults";
import { orGate, andGate, notGate } from "../gates";

export class AndOrLatch {
	constructor() {
		this.current = defaultBit;
	}

	/**
	 * @returns {bit}
	 */
	get output() {
		return this.current;
	}

	/**
	 * Triggers the and-or-latch with an input bit and a reset bit
	 * @param {bit} set - The input bit
	 * @param {bit} reset - The reset bit (if 1, sets the latch to 0)
	 * @returns {void}
	 */
	trigger(set = defaultBit, reset = defaultBit) {
		const orResult = orGate(this.current, set);
		const andResult = andGate(orResult, notGate(reset));
		this.current = andResult;
	}
}
