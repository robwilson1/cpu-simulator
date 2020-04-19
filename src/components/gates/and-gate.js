import "../../util/types";

/**
 * Given 2 bits, returns the AND result
 * @param {bit} inputA - A single bit
 * @param {bit} inputB - A single bit
 * @returns {bit}
 */
export function andGate(inputA = 0b0, inputB = 0b0) {
	return inputA & inputB;
}
