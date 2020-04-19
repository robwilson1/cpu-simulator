import { defaultByte } from "../../util/defaults";
import { rippleCarryAdder } from "../adders";
import { isZero } from "./zero-tester";
import { isNegative } from "./negative-tester";

export function ALU(
	inputA = defaultByte,
	inputB = defaultByte,
	opCode = 0b1000
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
