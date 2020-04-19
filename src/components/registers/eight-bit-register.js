import "../../util/types";
import { defaultByte, defaultBit } from "../../util/defaults";
import { GatedLatch } from "../latches";

export class EightBitRegister {
	constructor() {
		this.l0 = new GatedLatch();
		this.l1 = new GatedLatch();
		this.l2 = new GatedLatch();
		this.l3 = new GatedLatch();
		this.l4 = new GatedLatch();
		this.l5 = new GatedLatch();
		this.l6 = new GatedLatch();
		this.l7 = new GatedLatch();
	}

	/**
	 * @returns {byte}
	 */
	get output() {
		return [
			this.l0.output,
			this.l1.output,
			this.l2.output,
			this.l3.output,
			this.l4.output,
			this.l5.output,
			this.l6.output,
			this.l7.output,
		];
	}

	/**
	 *
	 * @param {byte} input - The input byte
	 * @param {bit} writeEnabled - The shared writeEnabled bit
	 */
	trigger(input = defaultByte, writeEnabled = defaultBit) {
		const [a0, a1, a2, a3, a4, a5, a6, a7] = input;
		this.l0.trigger(a0, writeEnabled);
		this.l1.trigger(a1, writeEnabled);
		this.l2.trigger(a2, writeEnabled);
		this.l3.trigger(a3, writeEnabled);
		this.l4.trigger(a4, writeEnabled);
		this.l5.trigger(a5, writeEnabled);
		this.l6.trigger(a6, writeEnabled);
		this.l7.trigger(a7, writeEnabled);
	}
}
