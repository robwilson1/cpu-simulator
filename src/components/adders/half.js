import { xorGate, andGate } from "../gates";

export function halfAdder(inputA = 0b0, inputB = 0b0) {
	return {
		sum: xorGate(inputA, inputB),
		carry: andGate(inputA, inputB)
	};
}
