class Hexadecimal{
	constructor(num){
		this.number=num;
	}
	toBinary()
	{
		var num=this.toDecimal();
		return num.toString(2);
	// 	var bin = "";
	// 	for (var i = 0; i < this.number.length; i++)
	// 	{
	// 		var temp = "";
	// 		var x = ((this.number[i].codePointAt(0))-48);
	// 		if (x > 9)
	// 		{
	// 			x = ((this.number[i].codePointAt(0))-55);
	// 		}
	// 		while (x != 0)
	// 		{
	// 			var c = parseInt(x % 2);
	// 			if (c != 0)
	// 				temp = temp + "1";
	// 			else
	// 				temp = temp + "0";
	// 			x = parseInt(x / 2);
	// 		}
	// 		//before inserting, reverses the string 
	// 		//to get correct Binary value:
	// 		temp = temp.split("").reverse().join("");
	// 		if (temp.length === 3)
	// 		{
	// 			temp="0"+temp;
	// 		}
	// 		else if (temp.length === 2)
	// 		{
	// 			temp="00"+temp;
	// 		}
	// 		else if (temp.length === 1)
	// 		{
	// 			temp="000"+temp;
	// 		}
	// 		else if (temp.length === 0)
	// 		{
	// 			temp="0000";
	// 		}
	// 		bin = bin + temp;
	// 	}
	// 	if (bin.length === 0)
	// 	{
	// 		return "0";
	// 	}
	// 	return bin;
	}
	toDecimal()
	{
		var dec = 0;
		var j = 0;
		for (var i = this.number.length - 1; i >= 0; i--)
		{
			var hexPosValue = ((this.number[i].codePointAt(0))-48);
			if (hexPosValue > 9)
			{
				hexPosValue = ((this.number[i].codePointAt(0))-55);
			}
			dec += parseInt(Math.pow(16, j)) * hexPosValue;
			j++;
		}
		return dec;
	}
	toOctal()
	{
		var num=this.toDecimal();
		return num.toString(8);
		// var dec = this.toDecimal();
		// var oct = "";
		// if(dec===0)
		// {
		// 	return "0";
		// }
		// else
		// {
		// 	var j = 0;
		// 	//Decimal to Oct:
		// 	while (dec != 0)
		// 	{
		// 		var remainder = parseInt(dec % 8);
		// 		oct = oct + String(remainder);
		// 		dec = parseInt(dec / 8);
		// 	}
		// 	//reverses the string to get correct Octal value
		// 	return oct.split("").reverse().join("");
		// }
	}	
	toHexadecimal()
	{
		var num=this.toDecimal();
		return num.toString(16).toUpperCase();
		// var num = parseInt(this.number);
		// var hex = "";
		// if (num === 0)
		// {
		// 	return "0";
		// }
		// while (num != 0)
		// {
		// 	var remainder = parseInt(num % 16);
		// 	if (remainder > 9)
		// 	{
		// 		hex = hex + String.fromCharCode(remainder + 55);
		// 		num = parseInt(num / 16);
		// 		continue;
		// 	}
		// 	hex = hex + String(remainder);
		// 	num = parseInt(num / 16);
		// }
		// //reverses the string to get correct Hexadecimal value
		// return hex.split("").reverse().join("");
	}
	add(hex){
		var hex2=new Hexadecimal(hex);
		var hexResult= this.toDecimal()+hex2.toDecimal();
		// hex2.number=String(hexResult);
		// hex2.number=hex2.toHexadecimal();
		// return hex2.number;
		return hexResult.toString(16);
	}
	subtract(hex){
		var hex2=new Hexadecimal(hex);
		var hexResult= this.toDecimal()-hex2.toDecimal();
		// hex2.number=String(hexResult);
		// hex2.number=hex2.toHexadecimal();
		// return hex2.number;
		return hexResult.toString(16).toUpperCase();
	}
	multiply(hex){
		var hex2=new Hexadecimal(hex);
		var hexResult= this.toDecimal()*hex2.toDecimal();
		// hex2.number=String(hexResult);
		// hex2.number=hex2.toHexadecimal();
		// return hex2.number;
		return hexResult.toString(16).toUpperCase();
	}
	divide(hex){
		var hex2=new Hexadecimal(hex);
		var hexResult= this.toDecimal()/hex2.toDecimal();
		// hex2.number=String(hexResult);
		// hex2.number=hex2.toHexadecimal();
		return hexResult.toString(16).toUpperCase();
	}
}

$(function () {
	const $container=$("#container");
	const $bin=$container.find("#outbox-bin");
	const $dec=$container.find("#outbox-dec");
	const $oct=$container.find("#outbox-oct");
	const $convert=$container.find("#convert-link");
	const $inputBox=$container.find("#input-box");
	const $hexNum1=$inputBox.find("#hex-num1");
	const $hexNum2=$inputBox.find("#hex-num2");
	const $operation=$inputBox.find("#operation");
	const $calculate=$container.find("#calculate-link");
	var hex1=new Hexadecimal();
	var hex2=new Hexadecimal();
	var valid=true;
	var operation="+";   
	$convert.on("click", function () {
		hex1.number=$("#input-hex").val() || 0;
		hex1.number=hex1.number.toUpperCase();
		valid=true;
		for(var i=0;i<hex1.number.length;i++){
			if ((hex1.number[i].codePointAt(0))-48 > 9 && (hex1.number[i].codePointAt(0))-55 > 15){
				valid=false;
				break;
			}
		}
		if(valid)
		{	
			$bin.text(hex1.toBinary());
			$dec.text(hex1.toDecimal());
			$oct.text(hex1.toOctal());
		}
		else{
			alert("incorrect entry please enter valid number."); 
		}
	});
    $calculate.on("click", function(){
		hex1.number=$hexNum1.val() || 0;
		hex1.number=hex1.number.toUpperCase();
		hex2.number=$hexNum2.val() || 0;
		hex2.number=hex2.number.toUpperCase();
		operation = $operation.val();
		calculate(hex1,hex2,operation);
    });
});

function calculate(hex1,hex2,operation) {
    valid=true;
    for(var i=0;i<hex1.number.length;i++){
		if ((hex1.number[i].codePointAt(0))-48 > 9 && (hex1.number[i].codePointAt(0))-55 > 15){
			valid=false;
		}
	}
    for(var j=0;j<hex2.number.length;j++){
		if ((hex2.number[j].codePointAt(0))-48 > 9 && (hex1.number[j].codePointAt(0))-55 > 15){
			valid=false;
		}
	}
    if(valid)
    {
		var $hexResult=$("#hexa-result");
		var $decResult=$("#dec-result")
		var hex3=new Hexadecimal();
        if(operation==="+")
        {
			hex3.number = hex1.add(hex2.number);    
        }
        else if (operation==="-") {
            hex3.number = hex1.subtract(hex2.number);
        }
        else if (operation==="*") {
            hex3.number = hex1.multiply(hex2.number);
        }
        else {
            if (hex2.toDecimal()=== 0) {
                return alert("Cannot divide by zero.");    
            }
            else{
                hex3.number = hex1.divide(hex2.number);
            }
		}
		var result= "Hexadecimal: "+ hex1.number + " " + operation + " " + hex2.number + " = " + hex3.number;
		$hexResult.text(result);
		result="Decimal: " + hex1.toDecimal() + " " + operation + " " + hex2.toDecimal() + " = " + hex3.toDecimal();
		$decResult.text(result);
    }
    else {
        alert("incorrect entry please enter valid number."); 
    }
}
