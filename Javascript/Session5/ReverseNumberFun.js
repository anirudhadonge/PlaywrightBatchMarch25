let reverseNumber = function (num){
    let reverse =0;
    while(num>0){
    let lastNum=num%10;
    reverse=reverse*10+lastNum;
    num=num/10 - (num%10)/10;// 123.4-.4=123 12.34,1.234
    }
    return reverse;
    }
     
    console.log(reverseNumber(1234));

    console.log(reverseNumber(456346363))

    console.log(reverseNumber(123456789))