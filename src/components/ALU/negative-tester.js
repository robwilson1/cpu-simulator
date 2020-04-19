import "../../util/types";
import { defaultByte } from "../../util/defaults";

/**
 * Given a byte, returns a bit to indicate if the byte is negative
 * @param {byte} input - The input byte
 * @returns {bit}
 */
export function isNegative(input = defaultByte) {
	return input[0] === 0b1;
}
