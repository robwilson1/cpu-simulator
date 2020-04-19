import { GatedLatch } from "../gated";

describe("Latches - GatedLatch", () => {
	test("new latch outputs 0", () => {
		const latch = new GatedLatch();
		expect(latch.output).toBe(0b0);
	});

	test("Setting input to 1 outputs 0", () => {
		const latch = new GatedLatch();
		latch.trigger(0b1, 0b0);
		expect(latch.output).toBe(0b0);
	});

	test("Setting input to 1 with write enabled outputs 1", () => {
		const latch = new GatedLatch();
		latch.trigger(0b1, 0b1);
		expect(latch.output).toBe(0b1);
	});

	test("Changing the input without write enabled, preserves output", () => {
		const latch = new GatedLatch();
		latch.trigger(0b1, 0b1);
		expect(latch.output).toBe(0b1);
		latch.trigger(0b0, 0b0);
		expect(latch.output).toBe(0b1);
		latch.trigger(0b1, 0b0);
		expect(latch.output).toBe(0b1);
		latch.trigger(0b0, 0b0);
		expect(latch.output).toBe(0b1);
		latch.trigger(0b1, 0b1);
		expect(latch.output).toBe(0b1);
		latch.trigger(0b0, 0b1);
		expect(latch.output).toBe(0b0);
		latch.trigger(0b1, 0b0);
		expect(latch.output).toBe(0b0);
	});
});
