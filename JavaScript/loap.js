
// for(let i=1;i<=10;i++){
// if(i%2==0){
//     console.log(i)
// }
// }

// *****************************************************

    // let a=parseInt(prompt(`enter first number`))
    // let b=parseInt(prompt(`enter second  number`))
    // let c=parseInt(prompt(`enter third number`))

    // if(a>b&&a>c){
    //     console.log(`${a} is greatest number`)
    // }

    // else if(b>c){
    //     console.log(`${b} is greatest number`)
    // }

    // else{
    //     console.log(` ${c} is greatest number`)
    // }



// *****************************************
    // let a=parseInt(prompt(`enter first number`))
    // if(a>=0){
    //     console.log(` ${a} is positive number`)
    // }
    // else{
    //     console.log(` ${a} is negative  number`)
    // }
    
    // ***********************************



//     let str=['javascript']


// for(let c of str){
//     console.log(c)
// }

let FrontEnd = ["HTML", "CSS", "Javascript", "React", "MongoDB", 'android']

let str = 'Javascript'


for (let c of FrontEnd)
{
    
    if (c==str){
        continue;
    }
    console.log(c)
}