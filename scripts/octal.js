class Octal
{
	constructor(){
        this.num="";
    }
    constructor(num){
        this.num=num;
    }
	setNumber(num)
    {
        this.num = num;
    }
	toBinary()
    {
        var num = parseInt(this.num);
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
    toDecimal()
    {
        var dec = 0;
        var j = 0;
        for (var i = (this.num.length - 1); i >= 0; i--)
        {
            if (num[i] != '0')
            {
                dec += parseInt(Math.pow(2, j));
            }
            j++;
        }
        return dec;
    }	
    toOctal();
	toHexadecimal();
	add(Octal);
	subtract(Octal);
	multiply(Octal);
	divide(Octal);
}
