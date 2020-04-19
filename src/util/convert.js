import "./types";

/**
 * Converts a byte to decimal
 * @param {byte | nibble} input
 */
export function binaryArrayToDecimal(input) {
	return parseInt(input.join(""), 2);
}
