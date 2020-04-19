import { orGate } from "../gates";
import { halfAdder } from "./half";

export function fullAdder(inputA = 0b0, inputB = 0b0, inputC = 0b0) {
	const firstPassResult = halfAdder(inputA, inputB);
	const secondPassResult = halfAdder(firstPassResult.sum, inputC);

	return {
		sum: secondPassResult.sum,
		carry: orGate(firstPassResult.carry, secondPassResult.carry),
	};
}
