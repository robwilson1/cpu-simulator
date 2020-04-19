import { orGate } from "../gates";
import { halfAdder } from "./half";

/**
 * Given 3 bits, returns the sum and the carry result
 * @param {0b0 | 0b1} inputA - A single bit
 * @param {0b0 | 0b1} inputB - A single bit
 * @param {0b0 | 0b1} inputC - A single bit
 * @returns {{ sum: 0b0 | 0b1, carry: 0b0 | 0b1 }}
 */
export function fullAdder(inputA = 0b0, inputB = 0b0, inputC = 0b0) {
	const firstPassResult = halfAdder(inputA, inputB);
	const secondPassResult = halfAdder(firstPassResult.sum, inputC);

	return {
		sum: secondPassResult.sum,
		carry: orGate(firstPassResult.carry, secondPassResult.carry),
	};
}
