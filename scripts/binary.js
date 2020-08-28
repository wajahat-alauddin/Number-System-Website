class Binary {
    constructor(num){
     this.number=num;
    }
 toBinary()
 {
     var num = parseInt(this.number);
     var bin = "";
     while (num != 0)
     {
         var c = parseInt(num % 2);
         if (c > 0)
             bin = bin + "1";
         else
             bin = bin + "0";
         num = parseInt(num / 2);
     }
     return bin.split("").reverse().join("");
 }
 
 toDecimal()
 {
     var dec = 0;
     var j = 0;
     for (var i = (this.number.length - 1); i >= 0; i--)
     {
         if (this.number[i] != '0')
         {
             dec += parseInt(Math.pow(2, j));
         }
         j++;
     }
     return dec;
 }
 toOctal()
 {
     var oct = "";
     var j = 0;
     for (var i = (this.number.length - 1); i >= 0; i -= 3)
     {
         var p = 0;
         var positionValue = 0;
         for (var j = i; j > i - 3; j--)
         {
             if (this.number[j] != '0')
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
 toHexadecimal()
 {
     var hex = "";
     var j = 0;
     for (var i = (this.number.length - 1); i >= 0; i -= 4)
     {
         var dec = 0;
         var positionValue = 0;
         for (var j = i; j > i - 4; j--)
         {
             if (this.number[j] != '0')
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
 add(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()+bin2.toDecimal();
     bin2.number=String(binResult);
     bin2.number=bin2.toBinary();
     return bin2.number;
 }
 subtract(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()-bin2.toDecimal();
     bin2.number=String(binResult);
     bin2.number=bin2.toBinary();
     return bin2.number;
 }
 multiply(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()*bin2.toDecimal();
     bin2.number=String(binResult);
     bin2.number=bin2.toBinary();
     return bin2.number;
 }
 divide(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()/bin2.toDecimal();
     bin2.number=String(binResult);
     bin2.number=bin2.toBinary();
     return bin2.number;
 }
}

$(function () {
    const $outputContainer=$(".output-container");
    const $dec=$outputContainer.find("#outbox-dec");
    const $oct=$outputContainer.find("#outbox-oct");
    const $hex=$outputContainer.find("#outbox-hex");
    var bin1=new Binary();
    var bin2=new Binary();
    var operation="+"; 
    var valid =true;
    $("#input-bin").on("input", function () {
        bin1.number=$("#input-bin").val();
    });    
    $("#convert-link").on("click", function () {
        valid=true;
        for(var i=0;i<bin1.number.length;i++){
            if(bin1.number[i] !="0" && bin1.number[i]!="1"){
                valid=false;
            }
        }
        if(valid)
        {
            $dec.text(bin1.toDecimal());
            $oct.text(bin1.toOctal());
            $hex.text(bin1.toHexadecimal());
        }
        else {
            alert("incorrect entry please enter valid this.number."); 
        }
    }); 
    $("#bin-num1").on("input", function () {
        bin1.number=$(this).val() || "0";
    });
    $("#bin-num2").on("input", function () {
        bin2.number=$(this).val() || "0";
    });
    $("#calculate-link").on("click", function(){
        calculate(bin1,bin2,operation);
    });
    $("#operation").on("change", function () {
        operation = $(this).val();
    }); 
});
function calculate(bin1,bin2,operation) {
    valid=true;
    for(var i=0;i<bin1.number.length;i++){
        if(bin1.number[i] !="0" && bin1.number[i]!="1"){
            valid=false;
        }
    }
    for(var j=0;j<bin2.number.length;j++){
        if(bin2.number[j] !="0" && bin2.number[j]!="1"){
            valid=false;
        }
    }
    if(valid)
    {
        var $binResult= $("#bin-result");
        var $decResult=  $("#dec-result");
        var bin3=new Binary();
        var result="";
        if(operation==="+")
        {
            bin3.number = bin1.add(bin2.number);
            result="Binary: " + bin1.number + " + " + bin2.number + " = " + bin3.number;
            $binResult.text(result);
            result="Decimal: " + bin1.toDecimal() + " + " + bin2.toDecimal() + " = " + bin3.toDecimal();
            $decResult.text(result);
        }
        else if (operation==="-") {
            bin3.number = bin1.subtract(bin2.number);
            result="Binary: " + bin1.number + " - " + bin2.number + " = " + bin3.number;
            $binResult.text(result);
            result="Decimal: " + bin1.toDecimal() + " - " + bin2.toDecimal() + " = " + bin3.toDecimal();
            $decResult.text(result);
        }
        else if (operation==="*") {
            bin3.number = bin1.multiply(bin2.number);
            result="Binary: " + bin1.number + " * " + bin2.number + " = " + bin3.number;
            $binResult.text(result);
            result="Decimal: " + bin1.toDecimal() + " * " + bin2.toDecimal() + " = " + bin3.toDecimal();
            $decResult.text(result);
        }
        else {
            if (bin2.toDecimal()=== 0) {
                alert("Cannot divide by zero.");    
            }
            else{
                bin3.number = bin1.divide(bin2.number);
                result="Binary: " + bin1.number + " / " + bin2.number + " = " + bin3.number;
                $binResult.text(result);
                result="Decimal: " + bin1.toDecimal() + " / " + bin2.toDecimal() + " = " + bin3.toDecimal();
                $decResult.text(result);
            }
        }
    }
    else {
        alert("incorrect entry please enter valid number."); 
    }
}


    
 