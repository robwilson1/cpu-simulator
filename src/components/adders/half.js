import { xorGate, andGate } from "../gates";

/**
 * Given 2 bits, returns the sum and the carry result
 * @param {0b0 | 0b1} inputA - A single bit
 * @param {0b0 | 0b1} inputB - A single bit
 * @returns {{ sum: 0b0 | 0b1, carry: 0b0 | 0b1 }}
 */
export function halfAdder(inputA = 0b0, inputB = 0b0) {
	return {
		sum: xorGate(inputA, inputB),
		carry: andGate(inputA, inputB),
	};
}
