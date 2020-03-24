describe("FizzBuzz", function() {
    describe("FizzBuzz tests", function() {
        it("should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return Fizz", function() {
            expect(fizzBuzz(3)).toBe("Fizz");
        });
        it("should return Buzz", function() {
            expect(fizzBuzz(5)).toBe("Buzz");
        });
        it("should return number", function() {
            expect(fizzBuzz(7)).toBe(7);
        });
        it("should return an error message", function() {
            expect(fizzBuzz("Hilda")).toBe("Sorry. You need a number to run this code");
        });
    })
})
