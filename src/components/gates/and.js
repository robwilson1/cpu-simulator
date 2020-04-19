/**
 * Given 2 bits, returns the AND result
 * @param {0b0 | 0b1} inputA - A single bit
 * @param {0b0 | 0b1} inputB - A single bit
 * @returns {0b0 | 0b1}
 */
export function andGate(inputA = 0b0, inputB = 0b0) {
	return inputA & inputB;
}
