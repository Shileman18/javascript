// function p1(name, callBack){
//     console.log(`hii ${name} am busy ill call you back`)
// }
// function p2(){
//     console.log(`hi can i call you?`)
// }
// p1('kiran',p2())

// var obj={
//     name:'allen',
//     age:22,
//     job:'manager'
// }
// console.log(obj)
// console.log(typeof obj)
// obj.sal=555
// console.log(obj)
// obj.name='viart'
// console.log(obj)
// delete obj.sal
// console.log(obj)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// var src={
//     phno:123456789,
//     company:'tcs'
// }
// console.log(src)
// Object.assign(obj,src)
// console.log(obj)

// console.log(obj)

// Object.seal(obj)//we can change new values
// obj.age=23
// obj.address='mysore'// we cannot add values
// console.log(obj)

// Object.freeze(obj)
// obj.name='sheela'
// console.log(obj)//  we cannot change and add values

var a=prompt("enter string1")
var b=prompt("enter string2")
if(a==b){
    console.log("matched");
}else{
    console.log("mis matched");
}
