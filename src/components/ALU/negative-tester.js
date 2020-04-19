import { defaultByte } from "../../util/defaults";

/**
 * Given a byte, returns a bit to indicate if the byte is negative
 * @param {0b0 | 0b1[]} input - A single byte
 * @returns {0b0 | 0b1} - a single bit
 */
export function isNegative(input = defaultByte) {
	return input[0] === 0b1;
}
