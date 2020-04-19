import "../../util/types";
import { andGate } from "./and-gate";
import { orGate } from "./or-gate";
import { notGate } from "./not-gate";

/**
 * Given 2 bits, returns the XOR result
 * @param {bit} inputA - A single bit
 * @param {bit} inputB - A single bit
 * @returns {bit}
 */
export function xorGate(inputA = 0b0, inputB = 0b0) {
	// Note: Javascript has XOR built in with:
	// a ^ b
	// However, the below shows how they are typically built

	const notAndResult = notGate(andGate(inputA, inputB));
	const orResult = orGate(inputA, inputB);

	return andGate(notAndResult, orResult);
}
