/**
 * Created on 2/10/2016.
 */
var MathUtils = (function (){
    var publicScope = this;

    publicScope.average = average;
    return publicScope;

    //------------------------------------------------------------------------------------------------------------------
    function average() {
        var total = argsToArray(arguments).reduce(function(val1, val2) {
            return val1 + val2;
        });
        return total / arguments.length;
    }
    // Taken from http://stackoverflow.com/a/960870/2047962
    function argsToArray(args) {
        return Array.prototype.slice.call(args);
    }
}());