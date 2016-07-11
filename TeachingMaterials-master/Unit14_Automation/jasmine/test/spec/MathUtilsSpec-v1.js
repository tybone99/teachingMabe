/**
 * Created on 2/10/2016.
 */
describe("MathUtils.average", function() {
    it("works for single values", function() {
        expect(MathUtils.average(0)).toEqual(0);
        expect(MathUtils.average(1)).toEqual(1);
        expect(MathUtils.average(-1)).toEqual(-1);
    });

    it("works for multiple values", function() {
        expect(MathUtils.average(-1, 0, 1)).toEqual(0);
        expect(MathUtils.average(7, 7, 7, 7, 7, 7, 7)).toEqual(7);
    });

    it("works for decimal values", function() {
        // Of course this works
        expect(MathUtils.average(-0.1, 0, 0.1)).toEqual(0);
        // Of course this works.... Wait, what?
        expect(MathUtils.average(0.1, 0.2)).toEqual(0.15);
    });
});