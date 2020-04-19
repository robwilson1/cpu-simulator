import { defaultByte } from "../../../util/defaults";
import { EightBitRegister } from "..";

describe("Registers - 8-bit register", () => {
	test("new register outputs a zero byte", () => {
		const register = new EightBitRegister();
		expect(register.output).toStrictEqual(defaultByte);
	});

	test("Setting input to 10101010 with writeEnabled 1, outputs 10101010", () => {
		const register = new EightBitRegister();
		register.trigger([0b1, 0b0, 0b1, 0b0, 0b1, 0b0, 0b1, 0b0], 0b1);
		expect(register.output).toStrictEqual([
			0b1,
			0b0,
			0b1,
			0b0,
			0b1,
			0b0,
			0b1,
			0b0,
		]);
	});

	test("Setting input to 10101010 with writeEnabled 0, outputs zero byte", () => {
		const register = new EightBitRegister();
		register.trigger([0b1, 0b0, 0b1, 0b0, 0b1, 0b0, 0b1, 0b0], 0b0);
		expect(register.output).toStrictEqual(defaultByte);
	});

	test("Changing the input with writeEnabled 0, preserves stored value", () => {
		const register = new EightBitRegister();

		// set 10101010 with write enabled
		register.trigger([0b1, 0b0, 0b1, 0b0, 0b1, 0b0, 0b1, 0b0], 0b1);
		expect(register.output).toStrictEqual([
			0b1,
			0b0,
			0b1,
			0b0,
			0b1,
			0b0,
			0b1,
			0b0,
		]);

		// set 11111111 without write enabled
		register.trigger([0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1], 0b0);
		expect(register.output).toStrictEqual([
			0b1,
			0b0,
			0b1,
			0b0,
			0b1,
			0b0,
			0b1,
			0b0,
		]);

		// set 11111111 with write enabled
		register.trigger([0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1, 0b1], 0b1);
		expect(register.output).toStrictEqual([
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
		]);

		// set 00000000 without write enabled
		register.trigger(defaultByte, 0b0);
		expect(register.output).toStrictEqual([
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
			0b1,
		]);
	});
});
