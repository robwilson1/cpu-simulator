import { MultiPlexer } from "..";

describe("Registers - Multiplexer", () => {
	test("new multiplexeris 16x16 matrix", () => {
		const multiplexer = new MultiPlexer();
		expect(multiplexer.matrix).toHaveLength(16);
		expect(multiplexer.matrix[0]).toHaveLength(16);
		expect(multiplexer.matrix[1]).toHaveLength(16);
		expect(multiplexer.matrix[15]).toHaveLength(16);
	});

	test("The trigger can read/write to specific latches", () => {
		const multiplexer = new MultiPlexer();
		const address1 = [0b0, 0b0, 0b1, 0b0, 0b0, 0b1, 0b1, 0b1]; // col 2, row 7
		const address2 = [0b0, 0b1, 0b1, 0b0, 0b0, 0b0, 0b1, 0b1]; // col 5, row 3

		const read = (addr) => {
			return multiplexer.trigger(addr, 0b0, 0b0, 0b1);
		};

		const write = (addr, dataIn) => {
			multiplexer.trigger(addr, dataIn, 0b1, 0b0);
		};

		// 1) can read address
		expect(read(address1)).toBe(0b0);

		// 2) can write 1 to address
		write(address1, 0b1);
		expect(read(address1)).toBe(0b1);

		// 3) Can remember values in different addresses
		expect(read(address2)).toBe(0b0);
		expect(read(address1)).toBe(0b1);
	});
});
