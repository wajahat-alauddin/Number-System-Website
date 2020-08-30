class Binary {
    constructor(num){
     this.number=num;
    }
 toBinary()
 {
     var num=this.toDecimal();
     return num.toString(2);
    //  var num = parseInt(this.number);
    //  var bin = "";
    //  while (num != 0)
    //  {
    //      var c = parseInt(num % 2);
    //      if (c > 0)
    //          bin = bin + "1";
    //      else
    //          bin = bin + "0";
    //      num = parseInt(num / 2);
    //  }
    //  return bin.split("").reverse().join("");
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
     var num=this.toDecimal();
     return num.toString(8);
    //  var oct = "";
    //  var j = 0;
    //  for (var i = (this.number.length - 1); i >= 0; i -= 3)
    //  {
    //      var p = 0;
    //      var positionValue = 0;
    //      for (var j = i; j > i - 3; j--)
    //      {
    //          if (this.number[j] != '0')
    //          {
    //              p += parseInt(Math.pow(2, positionValue));
    //          }
    //          if (j == 0)
    //          {
    //              break;
    //          }
    //          positionValue++;
    //      }
    //      if (p == 0 && i == 0)
    //      {
    //          break;
    //      }
    //      oct += p.toString(10);
    //  }
    //  if (oct.length == 0)
    //  {
    //      return "0";
    //  }
    //  //reverses the oct string to get correct result:
    //  return oct.split("").reverse().join("");
 }
 toHexadecimal()
 {
    var num=this.toDecimal();
    return num.toString(16).toUpperCase();
    //  var hex = "";
    //  var j = 0;
    //  for (var i = (this.number.length - 1); i >= 0; i -= 4)
    //  {
    //      var dec = 0;
    //      var positionValue = 0;
    //      for (var j = i; j > i - 4; j--)
    //      {
    //          if (this.number[j] != '0')
    //          {
    //              dec += parseInt(Math.pow(2, positionValue));
    //          }
    //          if (j == 0)
    //          {
    //              break;
    //          }
    //          positionValue++;
    //      }
    //      if (dec > 9)
    //      {
    //              hex = hex + String.fromCharCode(dec + 55);
    //              continue;
    //      }
    //      if (dec == 0 && i == 0)
    //          break;
    //      hex += String(dec);
    //  }
    //  if (hex.length == 0)
    //  {
    //      return "0";
    //  }
    //  //reverses the hex string to get correct result: 
    //  return hex.split("").reverse().join("");
 }
 add(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()+bin2.toDecimal();
     return binResult.toString(2);
    //  bin2.number=String(binResult);
    //  bin2.number=bin2.toBinary();
    //  return bin2.number;
 }
 subtract(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()-bin2.toDecimal();
     return binResult.toString(2);
    //  bin2.number=String(binResult);
    //  bin2.number=bin2.toBinary();
    //  return bin2.number;
 }
 multiply(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()*bin2.toDecimal();
     return binResult.toString(2);
    //  bin2.number=String(binResult);
    //  bin2.number=bin2.toBinary();
    //  return bin2.number;
 }
 divide(binary){
     var bin2=new Binary(binary);
     var binResult= this.toDecimal()/bin2.toDecimal();
     return binResult.toString(2);
    //  bin2.number=String(binResult);
    //  bin2.number=bin2.toBinary();
    //  return bin2.number;
 }
}

$(function () {
    const $container=$("#container");
    const $dec=$container.find("#outbox-dec");
    const $bin=$container.find("#input-bin");
    const $oct=$container.find("#outbox-oct");
    const $hex=$container.find("#outbox-hex");
    const $convert=$container.find("#convert-link");
    const $inputBox=$container.find("#input-box");
    const $binNum1=$inputBox.find("#bin-num1");
    const $binNum2=$inputBox.find("#bin-num2");
    const $operation=$inputBox.find("#operation");
    const $calculate=$container.find("#calculate-link");
    var bin1=new Binary();
    var bin2=new Binary();
    var operation="+"; 
    var valid =true;
    $convert.on("click", function () {
        bin1.number=$bin.val();
        valid=true;
        for(var i=0;i<bin1.number.length;i++){
            if(bin1.number[i] !="0" && bin1.number[i]!="1"){
                return alert("incorrect entry please enter valid this.number."); 
            }
        }
            $dec.text(bin1.toDecimal());
            $oct.text(bin1.toOctal());
            $hex.text(bin1.toHexadecimal());
    });
    $bin.on("keypress", function (event) {
        if(event.which===13)
        {
            bin1.number=$(this).val();
            valid=true;
            for(var i=0;i<bin1.number.length;i++){
                if(bin1.number[i] !="0" && bin1.number[i]!="1"){
                    return alert("incorrect entry please enter valid this.number."); 
                }
        }
            $dec.text(bin1.toDecimal());
            $oct.text(bin1.toOctal());
            $hex.text(bin1.toHexadecimal());
        }
    });
    $calculate.on("click", function(){
        bin1.number=$binNum1.val() || "0";
        bin2.number=$binNum2.val() || "0";
        operation = $operation.val();
        calculate(bin1,bin2,operation);
    });
});
function calculate(bin1,bin2,operation) {
    for(var i=0;i<bin1.number.length;i++){
        if(bin1.number[i] !="0" && bin1.number[i]!="1"){
            return alert("incorrect entry please enter valid number.");
        }
    }
    for(var j=0;j<bin2.number.length;j++){
        if(bin2.number[j] !="0" && bin2.number[j]!="1"){
            return alert("incorrect entry please enter valid number.");
        }
    }
    var $binResult= $("#bin-result");
    var $decResult=  $("#dec-result");
    var bin3=new Binary();
    if(operation==="+")
    {
        bin3.number = bin1.add(bin2.number);
    }
    else if (operation==="-") {
        bin3.number = bin1.subtract(bin2.number);
    }
    else if (operation==="*") {
        bin3.number = bin1.multiply(bin2.number);
    }
    else {
        if (bin2.toDecimal()=== 0) {
            return alert("Cannot divide by zero.");    
        }
        else{
            bin3.number = bin1.divide(bin2.number);
        }
    }
    var result="Binary: " + bin1.number + " " + operation + " " + bin2.number + " = " + bin3.number;
    $binResult.text(result);
    result="Decimal: " + bin1.toDecimal() + " " + operation + " " + bin2.toDecimal() + " = " + bin3.toDecimal();
    $decResult.text(result);
}


    
 