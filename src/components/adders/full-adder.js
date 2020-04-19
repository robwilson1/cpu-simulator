import "../../util/types";
import { orGate } from "../gates";
import { halfAdder } from "./half-adder";

/**
 * Given 3 bits, returns the sum and the carry result
 * @param {bit} inputA - A single bit
 * @param {bit} inputB - A single bit
 * @param {bit} inputC - A single bit
 * @returns {{ sum: bit, carry: bit }}
 */
export function fullAdder(inputA = 0b0, inputB = 0b0, inputC = 0b0) {
	const firstPassResult = halfAdder(inputA, inputB);
	const secondPassResult = halfAdder(firstPassResult.sum, inputC);

	return {
		sum: secondPassResult.sum,
		carry: orGate(firstPassResult.carry, secondPassResult.carry),
	};
}
