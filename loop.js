let marks = [90,60,50,65,89,99];

let sum = 0;

for(let val of marks){
    sum += val;
}
let avg = sum / marks.length
console.log('avg marks of the class = ${avg} ');