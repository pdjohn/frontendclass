function cal(){
	var a,b;

	a = 50;
	b = 10;

	r1=a+b;
	document.write(r1+'<br>');

	r2 = a-b;
	document.write(r2+'<br>');

	r3 = a*b;
	document.write(r3+'<br>');

	r4 = a/b;
	document.write(r4+'<br>');

	r5 = a%b;
	document.write(r5+'<br>');
}

function input(){
	var x = Number(prompt('Enter a Number','0'));
	var y = Number(prompt('Enter a Number','0'));

	document.write(add(x,y));
}
function add(x,y){
	
	sum=x+y;
	return sum;
}

function lert(){
	alert('I am John');
}