/**
 * Created on 2/15/2016.
 *
 * A set of useful custom matchers
 */
var TestUtils = (function () {
    return {
        matchers: {
            toBeInRange: matcherFrom(toBeInRange),
            toBeCloseTo: matcherFrom(toBeCloseTo)
        }
    };

    function toBeInRange(actual, min, max) {
        var result = {
            pass: false,
            message: ""
        };

        result.pass = actual >= min && actual <= max;
        if (!result.pass) {
            result.message = "Value " + actual + " is not in range [" + min + ", " + max + "]";
        }
        return result;
    }
    function toBeCloseTo(actual, value, precision) {
        return toBeInRange(actual, value - precision, value + precision);
    }

    // Create a factory function to conform to Jasmine's specification
    function matcherFrom(matchFunction) {
        return function() {
            return {
                compare: matchFunction
            };
        };
    }
}());