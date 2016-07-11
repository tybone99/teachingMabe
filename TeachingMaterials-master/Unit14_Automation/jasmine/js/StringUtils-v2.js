/**
 * Created on 2/10/2016.
 */
var StringUtils = (function() {
    var publicScope = {};

    publicScope.capitalize = capitalize;
    publicScope.format = format;
    publicScope.extractParams = extractParams;
    return publicScope;

    //------------------------------------------------------------------------------------------------------------------
    function capitalize(text) {
		// TODO: implement
        return text;
    }
    function format(formatString) {
        var formatResult = formatString;

        for (var i = 0; (i + 1) < arguments.length; i++) {
            var placeholder = "\\{" + i + "\\}";
            var regex = new RegExp(placeholder, "g");
            // Skip the first argument, the format string
            var replacement = arguments[i + 1];
            formatResult = formatResult.replace(regex, replacement);
        }
        return formatResult;
    }
    function extractParams(url) {
		// TODO: implement
        return {};
    }
}());