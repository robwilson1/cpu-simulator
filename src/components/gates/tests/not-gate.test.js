import { notGate } from "..";

describe("Gates - NOT", () => {
	test("0 to become 1", () => {
		expect(notGate(0b0)).toBe(0b1);
	});
	test("1 to become 0", () => {
		expect(notGate(0b1)).toBe(0b0);
	});
});
