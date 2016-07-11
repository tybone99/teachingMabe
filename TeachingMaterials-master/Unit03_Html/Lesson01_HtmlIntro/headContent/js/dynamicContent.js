function makeSomeModifications() {
	var mysteryButton = document.getElementById("mysteryButton");
	mysteryButton.onclick = function () {
		alert("You clicked the button! It does work now.");
	};
	
	var showing = false;
	var elements = document.getElementsByClassName("blinking");
	setInterval(function() {
		for (var i = 0; i < elements.length; i++) {
			if (showing) {
				elements[i].setAttribute("style", "");
			} else {
				elements[i].setAttribute("style", "visibility:hidden;");
			}
		}
		showing = !showing;
	}, 600);
}
document.addEventListener("DOMContentLoaded", function(event) { 
	makeSomeModifications();
});
