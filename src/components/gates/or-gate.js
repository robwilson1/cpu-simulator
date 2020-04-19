import "../../util/types";

/**
 * Given 2 bits, returns the OR result
 * @param {bit} inputA - A single bit
 * @param {bit} inputB - A single bit
 * @returns {bit}
 */
export function orGate(inputA = 0b0, inputB = 0b0) {
	return inputA | inputB;
}
