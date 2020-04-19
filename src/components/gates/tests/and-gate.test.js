import { andGate } from "..";

describe("Gates - AND", () => {
	test("defaults to 0", () => {
		expect(andGate()).toBe(0b0);
	});

	test("0 AND 0 to be 0", () => {
		expect(andGate(0b0, 0b0)).toBe(0b0);
	});

	test("0 AND 1 to be 0", () => {
		expect(andGate(0b0, 0b1)).toBe(0b0);
	});

	test("1 AND 0 to be 0", () => {
		expect(andGate(0b1, 0b0)).toBe(0b0);
	});

	test("1 AND 1 to be 1", () => {
		expect(andGate(0b1, 0b1)).toBe(0b1);
	});
});
