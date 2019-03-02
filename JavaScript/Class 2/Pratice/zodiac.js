function input(){
	var d = Number(prompt('Enter the date', ''));
	var m = Number(prompt('Enter the month number',''));
	document.write(zodiac(d,m));
}

function zodiac(d,m){
	if(m==1 && d>=20 && d<=31 || m==2 && d>=1&&d<=18)
		return ('Aquarius');
	else if(m==2 && d>=19 && d<=29 || m==3 && d>=1&&d<=20)
		return ('Pisces');
	else if(m==3 && d>=21 && d<=31 || m==4 && d>=1&&d<=19)
		return ('Aries');
	else if(m==4 && d>=20 && d<=30 || m==5 && d>=1&&d<=20)
		return ('Taurus');
	else if(m==5 && d>=21&& d<=31 || m==6 && d>=1&&d<=20)
		return('Gemini');
	else if(m==6 && d>=21&& d<=30 || m==7 && d>=1&&d<=22)
		return('Cancer');
	else if(m==7 && d>=23&& d<=31 || m==8 && d>=1&&d<=22)
		return('Leo');
	else if(m==8 && d>=23&& d<=31 || m==9 && d>=1&&d<=22)
		return('Virgo');
	else if(m==9 && d>=23&& d<=30 || m==10 && d>=1&&d<=22)
		return('Libra');
	else if(m==10 && d>=23&& d<=31 || m==11 && d>=1&&d<=21)
		return('Scorpio');
	else if(m==11 && d>=22&& d<=30 || m==12 && d>=1&&d<=21)
		return('Sagittarious');
	else if(m==12 && d>=22&& d<=31 || m==1 && d>=1&&d<=19)
		return('Capricorn');
}





function cgpa(b)
{
	
	if(b>=0 && b<=100)
	{
	    if(80<=b && b<=100)
	    	{
	    		//b=5;
	    		return("A+");
	    	}
	        
	    else if(70<=b && b<=79)
	    	{
	    		//b=4;
	    		return("A");
	    		
	    	}
	        
	    else if(60<=b&&b<=69)
	        {
	        	//b=3.5
	        	return("A-");
	    		
	        }
	    else if(50<=b&&b<=59)
	        {
	        	//b=3;
	        	return("B");
	    		
	        }
	    else if(40<=b&&b<=49)
	        {
	        	//b=2;
	        	return("C");
	    		
	        }
	    else if(33<=b&&b<=39)
	    	{
	    		//b=1;
	    		return("D");
	    		
	    	}
	    else
	    	{
	    		//b=0;
	        	alert("Fail");
		      }
	}
	else
		alert("Invalid Input");
}

function cgpa(e)
{
	
	if(e>=0 &&  e<=100)
	{
		if(80<=e && e<=100)
		{
			//e=5;
	        return("A+");
	    	
	    }
	    else if(70<=e&&e<=79)
	    {
	    	//e=4;
	        return("A");
	    	
	    }
	    else if(60<=e&&e<=69)
	    {
	    	//e=3.5;
	        return("A-");
	    	
	    }
	    else if(50<=e&&e<=59)
	    {
	    	//e=3;
	        return("B");
	    	
	    }
	    else if(40<=e&&e<=49)
	    {
	    	//e=2;
	        return("C");
	    	
	    }
	    else if(33<=e&&e<=39)
	    {
	    	//e=1;
	    	return("D");
	    	
	    }
	    else
	    {
	    	//e=0;
	        alert("Fail");
	    }
	}
	else
		alert("Invalid Input");
}


function cgpa(m)
{
	
	if(m>=0 && m<=100)
	{
		if(80<=m && m<=100)
		{
			//m=5;
	        return("A+");
	    	

	    }
	    else if(70<=m&&m<=79)
	    {
	    	//m=4;
	        return("A");
	    	
	    }
	    else if(60<=m&&m<=69)
	    {
	    	//m=3.5;
	        return("A-");
	    	
	    }
	    else if(50<=m&&m<=59)
	    {
	    	//m=3;
	        return("B");
	    	
	    }
	    else if(40<=m&&m<=49)
	    {
	    	//m=2;
	        return("C");
	    	
	    }
	    else if(33<=m&&m<=39)
	    {
	    	//m=1;
	    	return("D");
	    	
	    }
	    else
	    {
	    	//m=0;
	        alert("Fail");
	    }
	}
	else
		alert("Invalid Input");
}

function avg(b,e,m)
{
	 if(80<=b && b<=100)
	    	{
	    		b1=5;
	    	}
	        
	    else if(70<=b && b<=79)
	    	{
	    		b1=4;
	    	}
	        
	    else if(60<=b&&b<=69)
	        {
	        	b1=3.5
	        }
	    else if(50<=b&&b<=59)
	        {
	        	b1=3;
	        }
	    else if(40<=b&&b<=49)
	        {
	        	b1=2;
	        }
	    else if(33<=b&&b<=39)
	    	{
	    		b1=1;
	    	}
	    else
	    	{
	    		b1=0;
		     }

		      
		if(80<=e && e<=100)
		{
			e1=5;
	    }
	    else if(70<=e&&e<=79)
	    {
	    	e1=4;
	    }
	    else if(60<=e&&e<=69)
	    {
	    	e1=3.5;
	    }
	    else if(50<=e&&e<=59)
	    {
	    	e1=3;
	    }
	    else if(40<=e&&e<=49)
	    {
	    	e1=2;
	    }
	    else if(33<=e&&e<=39)
	    {
	    	e1=1;
	    }
	    else
	    {
	    	e1=0;
	    }

	if(80<=m && m<=100)
		{
			m1=5;
	    }
	    else if(70<=m&&m<=79)
	    {
	    	m1=4;
	    }
	    else if(60<=m&&m<=69)
	    {
	    	m1=3.5;
	    }
	    else if(50<=m&&m<=59)
	    {
	    	m1=3;
	    }
	    else if(40<=m&&m<=49)
	    {
	    	m1=2;
	    }
	    else if(33<=m&&m<=39)
	    {
	    	m1=1;
	    }
	    else
	    {
	    	m1=0;
	    }
	r=(b1+e1+m1)/3;
	return r;
}

function gpa(){
	
	var b = Number(prompt('Enter the marks of Bangla', ''));
	var e = Number(prompt('Enter the marks of English',''));
	var m = Number(prompt('Enter the marks of Math',''));
	document.write('Bangla='+cgpa(b)+'<br>');
	document.write('English='+cgpa(e)+'<br>');
	document.write('Math='+cgpa(m)+'<br>');
	document.write('Average='+avg(b,e,m)+'<br>');
}


