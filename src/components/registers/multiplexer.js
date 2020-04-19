import "../../util/types";
import { defaultByte, defaultBit } from "../../util/defaults";
import { binaryArrayToDecimal } from "../../util/convert";
import { GatedLatch } from "../latches";

const MatrixFactory = (rows, cols) => {
	return [...Array(rows)].map(() => Array(cols).fill(new GatedLatch()));
};

export class MultiPlexer {
	constructor(rows = 16, cols = 16) {
		/** @type {GatedLatch[][]} */
		this.matrix = MatrixFactory(rows, cols);
	}

	/**
	 * Simulates an active intersection wire
	 * @param {byte} address - The address of the latch to enable
	 * @param {bit} data - The input/output data bit
	 * @param {bit} writeEnabled - The shared writeEnabled bit
	 * @param {bit} readEnabled - The shared readEnabled bit
	 */
	trigger(
		address = defaultByte,
		data = defaultBit,
		writeEnabled = defaultBit,
		readEnabled = defaultBit
	) {
		const [c3, c2, c1, c0, r3, r2, r1, r0] = address;
		const colAddress = binaryArrayToDecimal([c3, c2, c1, c0]);
		const rowAddress = binaryArrayToDecimal([r3, r2, r1, r0]);
		this.activeLatch = this.matrix[colAddress][rowAddress];

		// In reality this would use an AND gate
		if (writeEnabled) {
			this.activeLatch.trigger(data, writeEnabled);
		}

		// In reality this would use an AND gate
		if (readEnabled) {
			return this.activeLatch.output;
		}
	}
}
