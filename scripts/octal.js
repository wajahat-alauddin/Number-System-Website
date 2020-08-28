class Octal {
		constructor(num){
			this.number=num;
		}
	toBinary()
	{
		var bin = "";
		for (var i = 0; i < this.number.length; i++)
		{
			var temp = "";
			var a = parseInt(this.number[i]);
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
	toDecimal()
	{
		var dec = 0;
		var position = 0;
		for (var i = (this.number.length - 1); i >= 0; i--)
		{
			var octPosValue = parseInt(this.number[i]);
			dec += parseInt(Math.pow(8, position)) * octPosValue;
			position++;
		}
		return dec;
	}
	toOctal()
	{
		var num = parseInt(this.number);
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
	toHexadecimal()
	{
	
		var dec = this.toDecimal();
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
	add(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()+oct2.toDecimal();
		oct2.number=String(octResult);
		oct2.number=oct2.toOctal();
		return oct2.number;
	}
	subtract(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()-oct2.toDecimal();
		oct2.number=String(octResult);
		oct2.number=oct2.toOctal();
		return oct2.number;
	}
	multiply(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()*oct2.toDecimal();
		oct2.number=String(octResult);
		oct2.number=oct2.toOctal();
		return oct2.number;
	}
	divide(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()/oct2.toDecimal();
		oct2.number=String(octResult);
		oct2.number=oct2.toOctal();
		return oct2.number;
	}
}
	$(function () {
		const $outputContainer=$(".output-container");
		const $bin=$outputContainer.find("#outbox-bin");
		const $dec=$outputContainer.find("#outbox-dec");
		const $hex=$outputContainer.find("#outbox-hex");
		var oct1= new Octal();
		var oct2= new Octal();
		var operation="+";
		var valid=true;
		$("#input-oct").on("input", function () {
			oct1.number=$("#input-oct").val();
		});    
		$("#convert-link").on("click", function () {
			valid=true;
			for(var i=0;i<oct1.number.length;i++){
				if((oct1.number[i].codePointAt(0))-48 < 0 || (oct1.number[i].codePointAt(0))-48 > 7 ){
					valid=false;
				}
			}
			if(valid)
			{	
				$bin.text(oct1.toBinary());
				$dec.text(oct1.toDecimal());
				$hex.text(oct1.toHexadecimal());
			}
			else{
				alert("incorrect entry please enter valid number."); 
			}
		});
		$("#oct-num1").on("input", function () {
			oct1.number=$(this).val() || 0;
		});
		$("#oct-num2").on("input", function () {
			oct2.number=$(this).val() || 0;
		});
		$("#calculate-link").on("click", function(){
			calculate(oct1,oct2,operation);
		});
		$("#operation").on("change", function () {
			operation = $(this).val();
		}); 

	});

function calculate(oct1,oct2,operation) {
	valid=true;
	for(var i=0;i<oct1.number.length;i++){
		if ((oct1.number[i].codePointAt(0))-48 < 0 || (oct1.number[i].codePointAt(0))-48 > 7){
			valid=false;
		}
	}
	for (let j=0; j < oct2.number.length; j++) {
		if((oct2.number[j].codePointAt(0))-48 < 0 || (oct2.number[j].codePointAt(0))-48 > 7)
		{
			valid=false;
		}
		
	}
	if(valid)
	{
		var $octResult= $("#oct-result");
		var $decResult= $("#dec-result");
		var oct3=new Octal();
		var result="";
		if(operation==="+")
		{
			oct3.number = oct1.add(oct2.number);
			result= "Octal: "+ oct1.number + " + " + oct2.number + " = " + oct3.number;
			$octResult.text(result);
			result="Decimal: " + oct1.toDecimal() + " + " + oct2.toDecimal() + " = " + oct3.toDecimal();
			$decResult.text(result);
		}
		else if (operation==="-") {
			oct3.number = oct1.subtract(oct2.number);
			result="Octal: " + oct1.number + " - " + oct2.number + " = " + oct3.number;
			$octResult.text(result);
			result="Decimal: " + oct1.toDecimal() + " - " + oct2.toDecimal() + " = " + oct3.toDecimal();
			$decResult.text(result);
		}
		else if (operation==="*") {
			oct3.number = oct1.multiply(oct2.number);
			result="Octal: " + oct1.number + " * " + oct2.number + " = " + oct3.number;
			$octResult.text(result);
			result="Decimal: " + oct1.toDecimal() + " * " + oct2.toDecimal() + " = " + oct3.toDecimal();
			$decResult.text(result);
		}
		else {
			if (oct2.toDecimal()=== 0) {
				alert("Cannot divide by zero.");    
			}
			else{
				oct3.number = oct1.divide(oct2.number);
				result="Octal: " + oct1.number + " / " + oct2.number + " = " + oct3.number;
				$octResult.text(result);
				result="Decimal: " + oct1.toDecimal() + " / " + oct2.toDecimal() + " = " + oct3.toDecimal();
				$decResult.text(result);
			}
		}
	}
	else {
		alert("incorrect entry please enter valid number."); 
	}
}