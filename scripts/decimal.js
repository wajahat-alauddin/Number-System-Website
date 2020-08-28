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
	}

	$(function () {
		const $outputContainer=$(".output-container");
		const $bin=$outputContainer.find("#outbox-bin");
		const $oct=$outputContainer.find("#outbox-oct");
		const $hex=$outputContainer.find("#outbox-hex");
		var dec1=new Decimal();
		var dec2="";
		var operation="+";
		var valid=true;
        $("#input-dec").on("input", function () {
			dec1.number=$("#input-dec").val();
        });    
        $("#convert-link").on("click", function () {
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
		$("#dec-num1").on("input", function () {
			dec1.number=$(this).val() || 0;
		});
		$("#dec-num2").on("input", function () {
			dec2=$(this).val() || 0;
		});
		$("#calculate-link").on("click", function(){
			calculate(dec1,dec2,operation);
		});
		$("#operation").on("change", function () {
			operation = $(this).val();
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
				result="Decimal: " + dec1.number + " + " + dec2 + " = " + dec3;
				$decResult.text(result);
			}
			else if (operation==="-") {
				dec3 = dec1.subtract(dec2);
				result="Decimal: " + dec1.number + " - " + dec2 + " = " + dec3;
				$decResult.text(result);
				}
			else if (operation==="*") {
				dec3 = dec1.multiply(dec2);
				result="Decimal: " + dec1.number + " * " + dec2 + " = " + dec3;
				$decResult.text(result);
				}
			else {
				if (dec2=== 0) {
					alert("Cannot divide by zero.");    
				}
				else{
					dec3 = dec1.divide(dec2);
					result="Decimal: " + dec1.number + " / " + dec2 + " = " + dec3;
					$decResult.text(result);
				}
			}
		}
		else {
			alert("incorrect entry please enter valid number."); 
		}
	}