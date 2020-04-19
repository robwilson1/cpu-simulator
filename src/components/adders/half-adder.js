import "../../util/types";
import { xorGate, andGate } from "../gates";

/**
 * Given 2 bits, returns the sum and the carry result
 * @param {bit} inputA - A single bit
 * @param {bit} inputB - A single bit
 * @returns {{ sum: bit, carry: bit }}
 */
export function halfAdder(inputA = 0b0, inputB = 0b0) {
	return {
		sum: xorGate(inputA, inputB),
		carry: andGate(inputA, inputB),
	};
}
