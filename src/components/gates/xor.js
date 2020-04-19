import { and } from "./and";
import { or } from "./or";
import { not } from "./not";

export function xor(a = 0b0, b = 0b0) {
	// Note: Javascript has XOR built in with:
	// a ^ b
	// However, the below shows how they are typically built

	const inputA = not(and(a, b));
	const inputB = or(a, b);

	return and(inputA, inputB);
}
