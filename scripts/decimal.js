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
		var value;
		var valid=true;
        $("#input-dec").on("input", function () {
			value=parseInt($("#input-dec").val());
			console.log(value);
        });    
        $("#input-dec").on("keypress", function (event) {
            valid=true;
            if(event.which===13){
			if(Number.isNaN(value)){
				valid=false;
			}
			if(valid)
			{	
            	$("#outbox-bin").html(toBinary(value));
            	$("#outbox-oct").html(toOctal(value));
           		$("#outbox-hex").html(toHexadecimal(value).toUpperCase());
			}
			else{
				alert("incorrect entry please enter valid number."); 
			}
		}
        });
	});