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
            	$("#outbox-bin").html(toBinary(value));
            	$("#outbox-oct").html(toOctal(value));
           		$("#outbox-hex").html(toHexadecimal(value).toUpperCase());
			}
			else{
				alert("incorrect entry please enter valid number."); 
			}
        });
	});