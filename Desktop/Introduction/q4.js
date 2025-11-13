// Q4 Academic Performance Evaluator
let marks = [85, 90, 78, 88, 92];
let anyFail = marks.some(m => m < 35);
let avg = marks.reduce((a,b)=>a+b,0) / marks.length;

if(anyFail){
    console.log("Detained (failed in a subject)");
} else if(avg >= 85){
    console.log("Promoted with Distinction");
} else if(avg >= 50){
    console.log("Promoted");
} else {
    console.log("Detained");
}
