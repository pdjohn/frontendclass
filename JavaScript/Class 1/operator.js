 function cal(){
		 var a , b;

		 a = 10;

		 b = 15;

		 c = b%a;
		 document.write(c);
}

function add(a, b)
{
	sum = a+b;
	return sum;
}

function input_add()
{
	var m = Number(prompt('Enter a Number',''));
	var n = Number(prompt('Enter a Number',''));

	document.write(add(m,n));
}

function aalert(){
	alert("Hello I am John Dee");
}