let d1=new Date (prompt('enter the date 1'))
let d2=new Date (prompt('enter the date 2'))
let td=d2-d1;

let seconds=td/1000;
let minutes=seconds/60;
let hours=minutes/60;
let days=hours/24;

console.log(`days=${days}, hours=${hours}, minutes=${minutes}, seconds=${seconds}`)