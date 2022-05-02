function biggerFont() {
    
    var text = document.getElementById("text1");
    text.style.fontSize="24pt";
}

function fancyCalled(){
	var radio = document.getElementById("fancy");
	var text = document.getElementById("text1");

	if(radio.checked) {
		text.style.fontWeight = "bold";
		text.style.color = "blue";
		text.style.textDecoration = "underline";

	} else {
		text.style.fontWeight = "normal";
		text.style.color = "black";
		text.style.textDecoration = "none";
	}
}

function mooClicked(){
	var text = document.getElementById("text1");
	text.value = text.value.toUpperCase();

	var parts = text.value.split(".");
	text.value = parts.join("-Moo.");
}