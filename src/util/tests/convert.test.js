import { binaryArrayToDecimal } from "../convert";

describe("Util - Convert", () => {
	describe("binaryArrayToDecimal method", () => {
		test("converts a byte successfully (00000000)", () => {
			const input = [0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b0];
			const result = binaryArrayToDecimal(input);
			expect(result).toBe(0);
		});

		test("converts a byte successfully (11111111)", () => {
			const input = [0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1];
			const result = binaryArrayToDecimal(input);
			expect(result).toBe(255);
		});

		test("converts a byte successfully (10101010)", () => {
			const input = [0b1, 0b0, 0b1, 0b0, 0b1, 0b0, 0b1, 0b0];
			const result = binaryArrayToDecimal(input);
			expect(result).toBe(170);
		});

		test("converts a byte successfully (01010101)", () => {
			const input = [0b0, 0b1, 0b0, 0b1, 0b0, 0b1, 0b0, 0b1];
			const result = binaryArrayToDecimal(input);
			expect(result).toBe(85);
		});

		test("converts a nibble successfully (0100)", () => {
			const input = [0b0, 0b1, 0b0, 0b0];
			const result = binaryArrayToDecimal(input);
			expect(result).toBe(4);
		});

		test("converts a nibble successfully (1100)", () => {
			const input = [0b1, 0b1, 0b0, 0b0];
			const result = binaryArrayToDecimal(input);
			expect(result).toBe(12);
		});
	});
});
