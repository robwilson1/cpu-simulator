import "../../util/types";
import { defaultByte } from "../../util/defaults";
import { halfAdder } from "./half-adder";
import { fullAdder } from "./full-adder";

/**
 * Given 2 bytes, returns the sum and the carry
 * @param {byte} inputA - The first byte
 * @param {byte} inputB - The second byte
 * @returns {{ sum: byte, carry: bit }} - If carry is 1, then overflow occured!
 */
export function rippleCarryAdder(inputA = defaultByte, inputB = defaultByte) {
	// Read the bytes from right to left
	const [a7, a6, a5, a4, a3, a2, a1, a0] = inputA;
	const [b7, b6, b5, b4, b3, b2, b1, b0] = inputB;

	const result0 = halfAdder(a0, b0);
	const result1 = fullAdder(result0.carry, a1, b1);
	const result2 = fullAdder(result1.carry, a2, b2);
	const result3 = fullAdder(result2.carry, a3, b3);
	const result4 = fullAdder(result3.carry, a4, b4);
	const result5 = fullAdder(result4.carry, a5, b5);
	const result6 = fullAdder(result5.carry, a6, b6);
	const result7 = fullAdder(result6.carry, a7, b7);

	return {
		sum: [
			result7.sum,
			result6.sum,
			result5.sum,
			result4.sum,
			result3.sum,
			result2.sum,
			result1.sum,
			result0.sum,
		],
		carry: result7.carry,
	};
}
