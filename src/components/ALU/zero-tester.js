import "../../util/types";
import { defaultByte } from "../../util/defaults";
import { orGate, notGate } from "../gates";

/**
 * Given a byte, returns a bit to indicate if the byte is equal to 0
 * @param {byte} input - The input byte
 * @returns {bit}
 */
export function isZero(input = defaultByte) {
	const [a0, a1, a2, a3, a4, a5, a6, a7] = input;

	const result1 = orGate(a0, a1);
	const result2 = orGate(a2, a3);
	const result3 = orGate(a4, a5);
	const result4 = orGate(a6, a7);
	const result5 = orGate(result1, result2);
	const result6 = orGate(result3, result4);
	const result7 = orGate(result5, result6);

	return notGate(result7);
}
