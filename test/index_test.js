const assert = require("assert");
const Rooster = require("../index");

describe("Tests for the Rooster object", () => {
	describe(".announceDawn method", () => {
		it("returns a rooster call", () => {
			const expected = "cock-a-doodle-doo!";
			const result = Rooster.announceDawn();
			assert.strictEqual(result, expected);
		});
	});
	describe(".timeAtDawn", () => {
		it("returns its argument as a string", () => {
			const expected = "0";
			const result = Rooster.timeAtDawn(0);
			assert.strictEqual(result, expected);
		});
		it("returns an error if the argument is less than 0", () => {
			assert.throws(() => {
				Rooster.timeAtDawn(-4);
			}, RangeError);
		});
		it("return as error if hour is greater than 23", () => {
			assert.throws(() => {
				Rooster.timeAtDawn(24);
			}, RangeError);
		});
	});
});
