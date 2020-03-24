describe("Drink", function() {
    describe("Drinking tests", function() {
        it("should return Drink Toddy", function() {
            expect(whatCanIDrink(2)).toBe("Drink Toddy");
        });
        it("should return Drink Coke", function() {
            expect(whatCanIDrink(14)).toBe("Drink Coke");
        });
        it("should return Drink Coke", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("should return Drink Beer", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return Drink Whiskey", function() {
            expect(whatCanIDrink(21)).toBe("Drink Whiskey");
        });
        it("should return Drink Whiskey", function() {
            expect(whatCanIDrink(120)).toBe("Drink Whiskey");
        });
        it("should return an error message", function() {
            expect(whatCanIDrink(130)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should return an error message", function() {
            expect(whatCanIDrink(-3)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should return an error message", function() {
            expect(whatCanIDrink("Hilda")).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    })
})
