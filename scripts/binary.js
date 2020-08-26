   
	function toBinary(number)
    {
        var num = parseInt(number);
        var bin = "";
        while (num != 0)
        {
            var c = num % 2;
            if (c > 0)
                bin = bin + "1";
            else
                bin = bin + "0";
            num = num / 2;
        }
        return bin.split("").reverse().join("");
    }
    
    function toDecimal(number)
    {
        var dec = 0;
        var j = 0;
        for (var i = (number.length - 1); i >= 0; i--)
        {
            if (number[i] != '0')
            {
                dec += parseInt(Math.pow(2, j));
            }
            j++;
        }
        return dec;
    }
	function toOctal(number)
    {
        var oct = "";
        var j = 0;
        for (var i = (number.length - 1); i >= 0; i -= 3)
        {
            var p = 0;
            var positionValue = 0;
            for (var j = i; j > i - 3; j--)
            {
                if (number[j] != '0')
                {
                    p += parseInt(Math.pow(2, positionValue));
                }
                if (j == 0)
                {
                    break;
                }
                positionValue++;
            }
            if (p == 0 && i == 0)
            {
                break;
            }
            oct += p.toString(10);
        }
        if (oct.length == 0)
        {
            return "0";
        }
        //reverses the oct string to get correct result:
        return oct.split("").reverse().join("");
    }
    function toHexadecimal(number)
    {
        var hex = "";
        var j = 0;
        for (var i = (number.length - 1); i >= 0; i -= 4)
        {
            var dec = 0;
            var positionValue = 0;
            for (var j = i; j > i - 4; j--)
            {
                if (number[j] != '0')
                {
                    dec += parseInt(Math.pow(2, positionValue));
                }
                if (j == 0)
                {
                    break;
                }
                positionValue++;
            }
            if (dec > 9)
            {
                    hex = hex + String.fromCharCode(dec + 55);
                    continue;
            }
            if (dec == 0 && i == 0)
                break;
            hex += String(dec);
        }
        if (hex.length == 0)
        {
            return "0";
        }
        //reverses the hex string to get correct result: 
        return hex.split("").reverse().join("");
    }

    $(function () {
        var value;
        var valid =true;
        $("#input-bin").on("input", function () {
            value=$("#input-bin").val();
        });    
        $("#input-bin").on("keypress", function (event) {
            valid=true;
            if(event.which===13){
            for(var i=0;i<value.length;i++){
                if(value[i] !="0" && value[i]!="1"){
                    valid=false;
                }
            }
            if(valid)
            {
                $("#outbox-dec").html(toDecimal(value));
                $("#outbox-oct").html(toOctal(value));
                $("#outbox-hex").html(toHexadecimal(value));
            }
            else {
                alert("incorrect entry please enter valid number."); 
            }
        }
        }); 
    });