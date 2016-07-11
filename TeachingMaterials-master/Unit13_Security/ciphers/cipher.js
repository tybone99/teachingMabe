function encodeBasic(message) {
	var shiftDistance = 17;
	var minCode = 97;
	var maxCode = 122;
	var modulus = maxCode - minCode + 1;
	
	var output = "";
	for (var i = 0; i < message.length; i++) {
		var currentCharCode = message.charCodeAt(i);
		if (currentCharCode < minCode || currentCharCode > maxCode) {
			output += message[i];
		}
		else 
		{
			var encoded = (currentCharCode - minCode + shiftDistance) % modulus;
			encoded += minCode;
			output += String.fromCharCode(encoded);
		}
	}
	return output;
}

function encodeLarger(message) {
	var shiftDistance = 70;
	var minCode = 32;
	var maxCode = 126;
	var modulus = maxCode - minCode + 1;
	
	var output = "";
	for (var i = 0; i < message.length; i++) {
		var currentCharCode = message.charCodeAt(i);
		if (currentCharCode < minCode || currentCharCode > maxCode) {
			output += message[i];
		}
		else 
		{
			var encoded = (currentCharCode - minCode + shiftDistance) % modulus;
			encoded += minCode;
			output += String.fromCharCode(encoded);
		}
	}
	return output;
}