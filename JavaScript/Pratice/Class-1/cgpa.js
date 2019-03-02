function input(){
	var m = Number(prompt('Enter the marks','0'));
	document.write(cgpa(m));
}

function cgpa(m){
	if(80<=m && m<=100)
        return("A+");
    else if(70<=m&&m<=79)
        return("A");
    else if(60<=m&&m<=69)
        return("B");
    else if(50<=m&&m<=59)
        return("C");
    else if(40<=m&&m<=49)
        return("D");
    else
        alert("Fail");
}