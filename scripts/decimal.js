	function toBinary(number){
		return number.toString(2);
	}
	function toOctal(number){
		return  number.toString(8);
	}
	function toHexadecimal(number){
		return number.toString(16);
	}

	$(function () {
		var $outputContainer=$(".output-container");
		var $bin=$outputContainer.find("#outbox-bin");
		var $oct=$outputContainer.find("#outbox-oct");
		var $hex=$outputContainer.find("#outbox-hex");
		var value="";
		var valid=true;
        $("#input-dec").on("input", function () {
			value=$("#input-dec").val();
        });    
        $("#convert-link").on("click", function (event) {
			valid=true;
			for(var i=0;i<value.length;i++){
				if ((value[i].codePointAt(0))-48 < 0 || (value[i].codePointAt(0))-48 > 9){
					valid=false;
				}
			}
			if(valid)
			{	
				value=parseInt(value);
            	$bin.html(toBinary(value));
            	$oct.html(toOctal(value));
           		$hex.html(toHexadecimal(value).toUpperCase());
			}
			else{
				alert("incorrect entry please enter valid number."); 
			}
        });
	});