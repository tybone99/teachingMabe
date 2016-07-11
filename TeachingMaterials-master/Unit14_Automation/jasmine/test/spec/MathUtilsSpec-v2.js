/**
 * Created on 2/10/2016.
 */
describe("MathUtils.average", function() {
    beforeEach(function() {
        jasmine.addMatchers({
            'toBeCloseTo': TestUtils.matchers.toBeCloseTo
        });

        // Or, you could simply do this to add all matchers to this test suite:
        // jasmine.addMatchers(TestUtils.matchers);
    });

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
        // We account for this in our custom matcher
        expect(MathUtils.average(0.1, 0.2)).toBeCloseTo(0.15, 0.0000001);
    });
});