	class Decimal{
		constructor(num){
			this.number=num;
		}
		toBinary(){
			return this.number.toString(2);
		}
		toOctal(){
			return  this.number.toString(8);
		}
		toHexadecimal(){
			return this.number.toString(16);
		}
		add(decimal){
			return this.number+decimal;
		}
		subtract(decimal){
			return this.number-decimal;
		}
		multiply(decimal){
			return this.number*decimal;
		}
		divide(decimal){
			return this.number/decimal;
		}
		print(dec2,dec3){
			return ("Decimal: " + this.number + " - " + dec2 + " = " + dec3);
		}
	}

	$(function () {
		const $container=$("#container");
		const $bin=$container.find("#outbox-bin");
		const $dec=$container.find("#input-dec");
		const $oct=$container.find("#outbox-oct");
		const $hex=$container.find("#outbox-hex");
		const $convert=$container.find("#convert-link");
		const $inputBox=$container.find("#input-box");
		const $decNum1=$inputBox.find("#dec-num1");
		const $decNum2=$inputBox.find("#dec-num2");
		const $operation=$inputBox.find("#operation");
		const $calculate=$container.find("#calculate-link");
		var dec1=new Decimal();
		var dec2="";
		var operation="+";
		var valid=true;    
        $convert.on("click", function () {
			dec1.number=$("#input-dec").val() || 0;
			valid=true;
			for(var i=0;i<dec1.number.length;i++){
				if ((dec1.number[i].codePointAt(0))-48 < 0 || (dec1.number[i].codePointAt(0))-48 > 9){
					valid=false;
				}
			}
			if(valid)
			{	
				dec1.number=parseInt(dec1.number);
				$bin.text(dec1.toBinary());
				$oct.text(dec1.toOctal());
				$hex.text(dec1.toHexadecimal().toUpperCase());
			}
			else{
				alert("incorrect entry please enter valid number."); 
			}
		});
        $dec.on("keypress", function (event) {
			if(event.which===13)
			{
				dec1.number=$(this).val() || 0;
				valid=true;
				for(var i=0;i<dec1.number.length;i++){
					if ((dec1.number[i].codePointAt(0))-48 < 0 || (dec1.number[i].codePointAt(0))-48 > 9){
						valid=false;
					}
				}
				if(valid)
				{	
					dec1.number=parseInt(dec1.number);
					$bin.text(dec1.toBinary());
					$oct.text(dec1.toOctal());
					$hex.text(dec1.toHexadecimal().toUpperCase());
				}
				else{
					alert("incorrect entry please enter valid number."); 
				}
			}
		});
		$calculate.on("click", function(){
			dec1.number=$decNum1.val() || 0;
			dec2=$decNum2.val() || 0;
			operation = $operation.val();
			calculate(dec1,dec2,operation);
		});
	});
	function calculate(dec1,dec2,operation) {
		valid=true;
		for(var i=0;i<dec1.number.length;i++){
			if ((dec1.number[i].codePointAt(0))-48 < 0 || (dec1.number[i].codePointAt(0))-48 > 9){
				valid=false;
			}
		}
		for(var j=0;j<dec2.length;j++){
			if ((dec2[j].codePointAt(0))-48 < 0 || (dec2[j].codePointAt(0))-48 > 9){
				valid=false;
			}
		}
		if(valid)
		{
			dec1.number=parseInt(dec1.number);
			dec2=parseInt(dec2);
			var $decResult=$("#dec-result");
			var dec3;
			var result="";
			if(operation==="+")
			{
				dec3 = dec1.add(dec2);
			}
			else if (operation==="-") {
				dec3 = dec1.subtract(dec2);
			}
			else if (operation==="*") {
				dec3 = dec1.multiply(dec2);
			}
			else {
				if (dec2=== 0) {
					return alert("Cannot divide by zero.");	 
				}
				else{
					dec3 = dec1.divide(dec2);
				}
			}
			result="Decimal: " + dec1.number + " " + operation + " "+ dec2 + " = " + dec3;
			$decResult.text(result);
		}
		else {
			alert("incorrect entry please enter valid number."); 
		}
	}
	