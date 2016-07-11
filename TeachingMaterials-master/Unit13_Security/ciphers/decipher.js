// Attempts to shift alphabet characters in a string to find possible solutions
function attemptDecode(message, shift) {
	var minCode = 97;
	var maxCode = 122;
	var modulus = 26;
	
	var output = "";
	
	for (var i = 0; i < message.length; i++) {
		var currentCharCode = message.charCodeAt(i);
		if (currentCharCode < minCode || currentCharCode > maxCode) {
			output += message[i];
		}
		else 
		{
			var encoded = (currentCharCode - minCode + shift) % modulus;
			encoded += minCode;
			output += String.fromCharCode(encoded);
		}
	}
	
	return output;
}

function guessShiftDistance(message) {
	var guesses = "";
	for (var i = 0; i < 26; i++) {
		var possibleSolution = attemptDecode(message, i);
		guesses += i + ": " + possibleSolution + '\n';
	}
	return guesses;
}

function attemptDecodeLarger(message, shift) {
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
			var encoded = (currentCharCode - minCode + shift) % modulus;
			encoded += minCode;
			output += String.fromCharCode(encoded);
		}
	}
	
	return output;
}

function guessLargerShiftDistance(message) {
	var guesses = "";
	for (var i = 0; i < 127; i++) {
		var possibleSolution = attemptDecodeLarger(message, i);
		guesses += i + ": " + possibleSolution + '\n';
	}
	return guesses;
}