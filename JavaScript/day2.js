    
    //arthmetic operator
    var a=10;
    var b=50;
    console.log("Addition is ", a+b);//60
    console.log("substraction is ", a-b);//-40
    console.log("multiplication is ", a*b);
    console.log("division is ", a/b);
    console.log("modulus is ", a%b);

    
    console.log(a++);
    console.log(++a);
    console.log(a--);
    console.log(--a);

    //logical operator
    console.log(a<b && b>a);
    console.log(a>b && b<a);
    console.log(a<b && b<a);
    console.log(a>b && b<a);
    console.log(a<b || b>a);
    console.log(a>b || b>a);
    console.log(a>b || b<a);
    console.log(a<b || b<a);

    //Assignment operator
    var a=20;
    var b=10;
    console.log("Addition of ", a+=b);
    console.log("substraction of ", a-=b);
    console.log("multiplication of ", a*=b);
    console.log("division is ", a/=b);
    console.log("modulus is ", a%=b);

    //coparision operator
     var a=10;
     var b='10';
     console.log(a==b);
     console.log(a===b);
     console.log(a!=b);
     console.log(a>b);
     console.log(a<b);
     console.log(a>=b);
     console.log(a<=b);



var c= prompt('plz give a input');
var a=(c>=18)?'adult':'child';
console.log(a);