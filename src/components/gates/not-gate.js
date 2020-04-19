import "../../util/types";

/**
 * Given a bit, returns the NOT result
 * @param {bit} input - A single bit
 * @returns {bit}
 */
export function notGate(input = 0b0) {
	return input ? 0b0 : 0b1;
}
