function input(){
	var val = confirm('Do you want to reload the page??');
	if( val === true)
		document.write('Reloaded');
	else
		document.write('Unreloaded');
}

function popup(){
	window.open("https://www.google.com","_blank","fullscreen=yes","height=300px",
		"width=300px","left=200px","top=200px","menubar=yes","resizeable=yes",
		"scrollbars=yes","status=yes","titlebar=yes","toolbar=yes");
}