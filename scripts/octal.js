function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
	function toBinary(number)
	{
		var bin = "";
		for (var i = 0; i < number.length; i++)
		{
			var temp = "";
			var a = parseInt(number[i]);
			console.log(a);
			while (a != 0)
			{
				var c = a % 2;
				if (c != 0)
					temp = temp + "1";
				else
					temp = temp + "0";
				a = a / 2;
			}
			//before inserting, reverses the string 
			//to get correct Binary value:
			temp.split("").reverse().join("");
			console.log(temp);
			if (temp.length === 2)
			{
				insert(temp,0, "0");
			}
			else if (temp.length === 1)
			{
				insert(temp,0, "00");
			}
			console.log(temp);
			bin = bin + temp;
		}
		if (bin.length === 0)
		{
			return "0";
		}
		return bin;
	}
	function toDecimal()
	{
		var dec = 0;
		var j = 0;
		for (var i = (this.num.length - 1); i >= 0; i--)
		{
			if (num[i] != '0')
			{
				dec += parseInt(Math.pow(2, j));
			}
			j++;
		}
		return dec;
	}	
		// toOctal();
		// toHexadecimal();
		// add(Octal);
		// subtract(Octal);
		// multiply(Octal);
		// divide(Octal);
	var oct="663";
	console.log(toBinary(oct));