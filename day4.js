// console.log(1+1);
// console.log(1+'1');
// console.log (12-'1');
// console.log(10-'3');
// console.log(10-'a');
// console.log(typeof NaN)
// console.log((0)?'true':'false')
// console.log((null)?'true':'false')
// console.log((1)?'true':'false')
// console.log((undefined)?'true':'false')
// console.log(("")?'true':'false')//if space between string then true
// console.log((NaN)?'true':'false')
// console.log(('')?'true':'false')


// STRING METHODS//

var a='java'
var b=a.length;
console.log(b)


var a='java'
var b=a.toUpperCase();
console.log(b)


var a='JAVA'
var b=a.toLowerCase();
console.log(b)

var a='java'
var b='script'
console.log(a.concat(b))


var a='sheela'
var b=a.charAt(3);
console.log(b)


var a='sheela'
var b=a.charCodeAt(3);
console.log(b);


var a='sheela'
var b=a.repeat(3);
console.log(b)

var a=' sheela  '
var b=a.trim()
console.log(b)



var a= 'rudresh loves sheela'
var b=a.replace('sheela', 'sonu')
console.log(b)


var a=`welcome to dubai`
var b=a.startsWith(`w`)
console.log(b)


var a=`welcome to dubai`
var b=a.endsWith(`w`)
console.log(b)

var a=`rudresh loves seela`
var b=a.split(``)
console.log(b)


var a=`rudresh loves seela`
var b=a.split(` `)
console.log(b)


var a=`rudresh loves seela`
var b=a.split(` | `)
console.log(b)

var a='java script'
var b= a.substr(0,4)
console.log(b)


var a='java script'
var b= a.includes('script')
console.log(b)


var a='javascript'
var b=a.indexOf('j')
console.log(b)


//DECISION MAKING

var a=18;
var b=38;
if(a<b){

    console.log('is a greatest num')
}


var a=18;
var b=38;
if(a>b){

    console.log('is a greatest num')
}
else{
    console.log('is a greatest num')
}


//read name of the city from the user using prompt, read a single digit lucky number from the user display the character present in the index position on the console

var a=prompt("name of the city")
var b=prompt("enter the index position")//use string
var c=a.charAt(b)
console.log(c)





