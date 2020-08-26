function toBinary(number)
{
	var bin = "";
	for (var i = 0; i < number.length; i++)
	{
		var temp = "";
		var x = ((number[i].codePointAt(0))-48);
		if (x > 9)
		{
			x = ((number[i].codePointAt(0))-55);
		}
		while (x != 0)
		{
			var c = parseInt(x % 2);
			if (c != 0)
				temp = temp + "1";
			else
				temp = temp + "0";
			x = parseInt(x / 2);
		}
		//before inserting, reverses the string 
		//to get correct Binary value:
		temp = temp.split("").reverse().join("");
		if (temp.length === 3)
		{
			temp="0"+temp;
		}
		else if (temp.length === 2)
		{
			temp="00"+temp;
		}
		else if (temp.length === 1)
		{
			temp="000"+temp;
		}
		else if (temp.length === 0)
		{
			temp="0000";
		}
		bin = bin + temp;
	}
	if (bin.length === 0)
	{
		return "0";
	}
	return bin;
}
function toDecimal(number)
{
	var dec = 0;
	var j = 0;
	for (var i = number.length - 1; i >= 0; i--)
	{
		var hexPosValue = ((number[i].codePointAt(0))-48);
		if (hexPosValue > 9)
		{
			hexPosValue = ((number[i].codePointAt(0))-55);
		}
		dec += parseInt(Math.pow(16, j)) * hexPosValue;
		j++;
	}
	return dec;
}
function toOctal(number)
{
	var dec = toDecimal(number);
	var oct = "";
	if(dec===0)
	{
		return "0";
	}
	else
	{
		var j = 0;
		//Decimal to Oct:
		while (dec != 0)
		{
			var remainder = parseInt(dec % 8);
			oct = oct + String(remainder);
			dec = parseInt(dec / 8);
		}
		//reverses the string to get correct Octal value
		return oct.split("").reverse().join("");
	}
}	
function toHexadecimal(number)
{
	var num = parseInt(number);
	var hex = "";
	if (num === 0)
	{
		return "0";
	}
	while (num != 0)
	{
		var remainder = parseInt(num % 16);
		if (remainder > 9)
		{
			hex = hex + String.fromCharCode(remainder + 55);
			num = parseInt(num / 16);
			continue;
		}
		hex = hex + String(remainder);
		num = parseInt(num / 16);
	}
	//reverses the string to get correct Hexadecimal value
	return hex.split("").reverse().join("");
}

$(function () {
	var value;
	var valid=true;
	$("#input-hex").on("input", function () {
		value=$("#input-hex").val();
	});    
	$("#input-hex").on("keypress", function (event) {
		valid=true;
		if(event.which===13){
			for(var i=0;i<value.length;i++){
				if ((value[i].codePointAt(0))-48 > 9 && (value[i].codePointAt(0))-55 > 15){
					valid=false;
				}
			}
		if(valid)
		{	
			$("#outbox-bin").html(toBinary(value));
			$("#outbox-dec").html(toDecimal(value));
			$("#outbox-oct").html(toOctal(value));
		}
		else{
			alert("incorrect entry please enter valid number."); 
		}
	}
	});
});
