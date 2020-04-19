import { AndOrLatch } from "../and-or";

describe("Latches - AndOrLatch", () => {
	test("new latch outputs 0", () => {
		const latch = new AndOrLatch();
		expect(latch.output).toBe(0b0);
	});

	test("Setting input to 1 outputs 1", () => {
		const latch = new AndOrLatch();
		latch.trigger(0b1, 0b0);
		expect(latch.output).toBe(0b1);
	});

	test("Setting input to 0 outputs 0", () => {
		const latch = new AndOrLatch();
		latch.trigger(0b0, 0b0);
		expect(latch.output).toBe(0b0);
	});

	test("Latch remembers its value", () => {
		const latch = new AndOrLatch();

		(() => {
			// source 1
			latch.trigger(0b1, 0b0);
			latch.trigger(0b0, 0b0);
		})();

		(() => {
			// source 2
			latch.trigger(0b0, 0b0);
			latch.trigger(0b1, 0b0);
		})();

		expect(latch.output).toBe(0b1);
	});

	test("Resetting latch outputs 0", () => {
		const latch = new AndOrLatch();

		latch.trigger(0b1, 0b1);
		expect(latch.output).toBe(0b0);

		latch.trigger(0b0, 0b1);
		expect(latch.output).toBe(0b0);
	});
});
