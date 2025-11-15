// Q7. Customer Feedback Processor
let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ").length;
let containsNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("Words:", words);
console.log(containsNegative ? "Needs Improvement" : "Positive Feedback");
