import { defaultByte } from "../../util/defaults";
import { halfAdder } from "./half";
import { fullAdder } from "./full";

/**
 * Given 2 bytes, returns the sum and the carry
 * @param {0b0 | 0b1[]} inputA - The first byte
 * @param {0b0 | 0b1[]} inputB - The second byte
 * @returns {{ sum: 0b0 | 0b1[], carry: 0b0 | 0b1 }} - If carry is 1, then overflow occured!
 */
export function rippleCarryAdder(inputA = defaultByte, inputB = defaultByte) {
	const [a0, a1, a2, a3, a4, a5, a6, a7] = inputA;
	const [b0, b1, b2, b3, b4, b5, b6, b7] = inputB;

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
			result0.sum,
			result1.sum,
			result2.sum,
			result3.sum,
			result4.sum,
			result5.sum,
			result6.sum,
			result7.sum,
		],
		carry: result7.carry,
	};
}
