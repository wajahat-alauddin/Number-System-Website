class Octal {
		constructor(num){
			this.number=num;
		}
	toBinary()
	{
		var num=this.toDecimal();
		return num.toString(2);
		// var bin = "";
		// for (var i = 0; i < this.number.length; i++)
		// {
		// 	var temp = "";
		// 	var a = parseInt(this.number[i]);
		// 	while (a != 0)
		// 	{
		// 		var c = parseInt(a % 2);
		// 		if (c != 0) {
		// 			temp = temp + "1";
		// 		}
		// 		else
		// 		{
		// 			temp = temp + "0";
		// 		}
		// 		a = parseInt(a / 2);
		// 	}
		// 	//before inserting, reverses the string 
		// 	//to get correct Binary value:
		// 	temp=temp.split("").reverse().join("");
		// 	if (temp.length === 2)
		// 	{
		// 		temp="0"+temp;
		// 	}
		// 	else if (temp.length === 1)
		// 	{
		// 		temp="00"+temp;
		// 	}
		// 	else if (temp.length === 0)
		// 	{
		// 		temp="000"+temp;
		// 	}
		// 	bin = bin + temp;
		// }
		// if (bin.length === 0)
		// {
		// 	return "000";
		// }
		// return bin;
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
		var num=this.toDecimal();
		return num.toString(8);
		// var num = parseInt(this.number);
		// if (num === 0)
		// {
		// 	return "0";
		// }
		// var oct = "";
		// while (num != 0)
		// {
		// 	var c = parseInt(num % 8);
		// 	oct = oct + String(c);
		// 	num = parseInt(num / 8);
		// }
		// //reverses the string to get correct Octal value:
		// return oct.split("").reverse().join("");
	}
	toHexadecimal()
	{
		var num=this.toDecimal();
		return num.toString(16).toUpperCase();
		// var dec = this.toDecimal();
		// var hex = "";
		// if (dec === 0)
		// {
		// 	return ("0");
		// }
		// else
		// {
		// 	//Octal to Hex: through Dec 
		// 	while (dec != 0)
		// 	{
		// 		var remainder = parseInt(dec % 16);
		// 		if (remainder > 9)
		// 		{
		// 			hex = hex + String.fromCharCode(remainder + 55);
		// 			dec = parseInt(dec / 16);
		// 			continue;
		// 		}
		// 		hex = hex + String(remainder);
		// 		dec = parseInt(dec / 16);
		// 	}
		// 	//reverses the string to get correct Hexadecimal value:
		// 	return hex.split("").reverse("").join("");
		//}
	}
	add(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()+oct2.toDecimal();
		return octResult.toString(8);
		// oct2.number=String(octResult);
		// oct2.number=oct2.toOctal();
		// return oct2.number;
	}
	subtract(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()-oct2.toDecimal();
		return octResult.toString(8);
		// oct2.number=String(octResult);
		// oct2.number=oct2.toOctal();
		// return oct2.number;
	}
	multiply(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()*oct2.toDecimal();
		return octResult.toString(8);
		// oct2.number=String(octResult);
		// oct2.number=oct2.toOctal();
		// return oct2.number;
	}
	divide(octal){
		var oct2=new Octal(octal);
		var octResult= this.toDecimal()/oct2.toDecimal();
		return octResult.toString(8);
		// oct2.number=String(octResult);
		// oct2.number=oct2.toOctal();
		// return oct2.number;
	}
}
	$(function () {
		const $container=$("#container");
		const $bin=$container.find("#outbox-bin");
		const $dec=$container.find("#outbox-dec");
		const $hex=$container.find("#outbox-hex");
		const $convert=$container.find("#convert-link");
		const $inputBox=$container.find("#input-box");
		const $octNum1=$inputBox.find("#oct-num1");
		const $octNum2=$inputBox.find("#oct-num2");
		const $operation=$inputBox.find("#operation");
		const $calculate=$container.find("#calculate-link");
		var oct1= new Octal();
		var oct2= new Octal();
		var operation="+";    
		$convert.on("click", function () {
			oct1.number=$("#input-oct").val();
			for(var i=0;i<oct1.number.length;i++){
				if((oct1.number[i].codePointAt(0))-48 < 0 || (oct1.number[i].codePointAt(0))-48 > 7 ){
					return alert("incorrect entry please enter valid number."); 
				}
			}
			$bin.text(oct1.toBSinary());
			$dec.text(oct1.toDecimal());
			$hex.text(oct1.toHexadecimal());
		});
		$calculate.on("click", function(){
			oct1.number=$octNum1.val() || 0;
			oct2.number=$octNum2.val() || 0;
			operation = $operation.val();
			calculate(oct1,oct2,operation);
		});
	});

function calculate(oct1,oct2,operation) {
	for(var i=0;i<oct1.number.length;i++){
		if ((oct1.number[i].codePointAt(0))-48 < 0 || (oct1.number[i].codePointAt(0))-48 > 7){
			return alert("incorrect entry please enter valid number.");
		}
	}
	for (let j=0; j < oct2.number.length; j++) {
		if((oct2.number[j].codePointAt(0))-48 < 0 || (oct2.number[j].codePointAt(0))-48 > 7)
		{
			return alert("incorrect entry please enter valid number.");
		}
		
	}
		var $octResult= $("#oct-result");
		var $decResult= $("#dec-result");
		var oct3=new Octal();
		var result="";
		if(operation==="+")
		{
			oct3.number = oct1.add(oct2.number);
		}
		else if (operation==="-") {
			oct3.number = oct1.subtract(oct2.number);
		}
		else if (operation==="*") {
			oct3.number = oct1.multiply(oct2.number);
		}
		else {
			if (oct2.toDecimal()=== 0) {
				return	alert("Cannot divide by zero.");    
			}
			else{
				oct3.number = oct1.divide(oct2.number);
			}
		}
		result="Octal: " + oct1.number + " " + operation + " " + oct2.number + " = " + oct3.number;
		$octResult.text(result);
		result="Decimal: " + oct1.toDecimal() + " " + operation + " " + oct2.toDecimal() + " = " + oct3.toDecimal();
		$decResult.text(result);
}