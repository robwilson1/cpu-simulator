import { defaultByte } from "../../../util/defaults";
import { rippleCarryAdder } from "..";

describe("Adders - Ripple Carry Adder", () => {
	test("default to output { sum: 00000000, carry: 0 }", () => {
		expect(rippleCarryAdder()).toStrictEqual({
			sum: defaultByte,
			carry: 0b0,
		});
	});

	test("00000000 + 00000000 to output { sum: 00000000, carry: 0 }", () => {
		expect(rippleCarryAdder(defaultByte, defaultByte)).toStrictEqual({
			sum: defaultByte,
			carry: 0b0,
		});
	});

	test("00000001 + 00000001 to output { sum: 00000010, carry: 0 }", () => {
		const byteA = [0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b1];
		const byteB = [0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b1];
		const expectedSum = [0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b1, 0b0];
		expect(rippleCarryAdder(byteA, byteB)).toStrictEqual({
			sum: expectedSum,
			carry: 0b0,
		});
	});

	test("10101010 + 00000101 to output { sum: 10101111, carry: 0 }", () => {
		const byteA = [0b1, 0b0, 0b1, 0b0, 0b1, 0b0, 0b1, 0b0];
		const byteB = [0b0, 0b0, 0b0, 0b0, 0b0, 0b1, 0b0, 0b1];
		const expectedSum = [0b1, 0b0, 0b1, 0b0, 0b1, 0b1, 0b1, 0b1];
		expect(rippleCarryAdder(byteA, byteB)).toStrictEqual({
			sum: expectedSum,
			carry: 0b0,
		});
	});

	test("11111111 + 00000001 to output { sum: 00000000, carry: 1 }", () => {
		const byteA = [0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1];
		const byteB = [0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b1];
		const expectedSum = [0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b0, 0b0];
		expect(rippleCarryAdder(byteA, byteB)).toStrictEqual({
			sum: expectedSum,
			carry: 0b1,
		});
	});
});
