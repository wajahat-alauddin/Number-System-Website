	function toBinary(number)
	{
		var bin = "";
		for (var i = 0; i < number.length; i++)
		{
			var temp = "";
			var a = parseInt(number[i]);
			while (a != 0)
			{
				var c = parseInt(a % 2);
				if (c != 0) {
					temp = temp + "1";
				}
				else
				{
					temp = temp + "0";
				}
				a = parseInt(a / 2);
			}
			//before inserting, reverses the string 
			//to get correct Binary value:
			temp=temp.split("").reverse().join("");
			if (temp.length === 2)
			{
				temp="0"+temp;
			}
			else if (temp.length === 1)
			{
				temp="00"+temp;
			}
			else if (temp.length === 0)
			{
				temp="000"+temp;
			}
			bin = bin + temp;
		}
		if (bin.length === 0)
		{
			return "000";
		}
		return bin;
	}
	function toDecimal(number)
	{
		var dec = 0;
		var position = 0;
		for (var i = (number.length - 1); i >= 0; i--)
		{
			var octPosValue = parseInt(number[i]);
			dec += parseInt(Math.pow(8, position)) * octPosValue;
			position++;
		}
		return dec;
	}
	function toOctal(number)
	{
		var num = parseInt(number);
		if (num === 0)
		{
			return "0";
		}
		var oct = "";
		while (num != 0)
		{
			var c = parseInt(num % 8);
			oct = oct + String(c);
			num = parseInt(num / 8);
		}
		//reverses the string to get correct Octal value:
		return oct.split("").reverse().join("");
	}
	function toHexadecimal(number)
	{
	
		var dec = toDecimal(number);
		var hex = "";
		if (dec === 0)
		{
			return ("0");
		}
		else
		{
			//Octal to Hex: through Dec 
			while (dec != 0)
			{
				var remainder = parseInt(dec % 16);
				if (remainder > 9)
				{
					hex = hex + String.fromCharCode(remainder + 55);
					dec = parseInt(dec / 16);
					continue;
				}
				hex = hex + String(remainder);
				dec = parseInt(dec / 16);
			}
			//reverses the string to get correct Hexadecimal value:
			return hex.split("").reverse("").join("");
		}
	}
	$(function () {
		var $outputContainer=$(".output-container");
		var $bin=$outputContainer.find("#outbox-bin");
		var $dec=$outputContainer.find("#outbox-dec");
		var $hex=$outputContainer.find("#outbox-hex");
		var value;
		var valid=true;
		$("#input-oct").on("input", function () {
			value=$("#input-oct").val();
		});    
		$("#convert-link").on("click", function (event) {
			valid=true;
			for(var i=0;i<value.length;i++){
				if(parseInt(value) < 0 || parseInt(value[i]) ===NaN || parseInt(value[i]) > 7 ){
					valid=false;
				}
			}
			if(valid)
			{	
				$bin.html(toBinary(value));
				$dec.html(toDecimal(value));
				$hex.html(toHexadecimal(value));
			}
			else{
				alert("incorrect entry please enter valid number."); 
			}
		});
	});
