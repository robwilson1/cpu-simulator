import "../../util/types";
import { defaultBit } from "../../util/defaults";
import { andGate, notGate } from "../gates";
import { AndOrLatch } from "./and-or-latch";

export class GatedLatch {
	constructor() {
		this.andOrLatch = new AndOrLatch();
	}

	/**
	 * @returns {bit}
	 */
	get output() {
		return this.andOrLatch.current;
	}

	/**
	 * Triggers the gated-latch with an input bit and a writeEnabled bit
	 * @param {bit} dataInput - The input bit
	 * @param {bit} writeEnabled - The writeEnabled bit (if 1, then stores the new input)
	 * @returns {void}
	 */
	trigger(dataInput = defaultBit, writeEnable = defaultBit) {
		const set = andGate(dataInput, writeEnable);
		const reset = andGate(notGate(dataInput), writeEnable);
		this.andOrLatch.trigger(set, reset);
	}
}
