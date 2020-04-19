import { andGate } from "./and";
import { orGate } from "./or";
import { notGate } from "./not";

export function xorGate(inputA = 0b0, inputB = 0b0) {
	// Note: Javascript has XOR built in with:
	// a ^ b
	// However, the below shows how they are typically built

	const notAndResult = notGate(andGate(inputA, inputB));
	const orResult = orGate(inputA, inputB);

	return  andGate(notAndResult, orResult);
}
