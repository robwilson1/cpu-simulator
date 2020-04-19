import { orGate } from "..";

describe("Gates - OR", () => {
	test("0 OR 0 to be 0", () => {
		expect(orGate(0b0, 0b0)).toBe(0b0);
	});
	test("0 OR 1 to be 1", () => {
		expect(orGate(0b0, 0b1)).toBe(0b1);
	});
	test("1 OR 0 to be 1", () => {
		expect(orGate(0b1, 0b0)).toBe(0b1);
	});
	test("1 OR 1 to be 1", () => {
		expect(orGate(0b1, 0b1)).toBe(0b1);
	});
});
