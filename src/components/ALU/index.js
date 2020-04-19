import { defaultByte } from "../../util/defaults";
import { rippleCarryAdder } from "../adders";
import { isZero } from "./zero-tester";
import { isNegative } from "./negative-tester";

/**
 *
 * @param {byte} inputA
 * @param {byte} inputB
 * @param {nibble} opCode
 */
export function ALU(
	inputA = defaultByte,
	inputB = defaultByte,
	opCode = [0b1, 0b0, 0b0, 0b0]
) {
	const result = rippleCarryAdder(inputA, inputB);

	return {
		output: result.sum,
		flags: {
			overflow: result.carry,
			zero: isZero(result.sum),
			negative: isNegative(result.sum),
		},
	};
}
