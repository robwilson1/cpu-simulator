import { xorGate } from "..";

describe("Gates - XOR", () => {
	test("0 XOR 0 to be 0", () => {
		expect(xorGate(0b0, 0b0)).toBe(0b0);
	});
	test("0 XOR 1 to be 1", () => {
		expect(xorGate(0b0, 0b1)).toBe(0b1);
	});
	test("1 XOR 0 to be 1", () => {
		expect(xorGate(0b1, 0b0)).toBe(0b1);
	});
	test("1 XOR 1 to be 0", () => {
		expect(xorGate(0b1, 0b1)).toBe(0b0);
	});
});
