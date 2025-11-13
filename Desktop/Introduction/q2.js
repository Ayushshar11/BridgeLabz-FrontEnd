// Q2 Multi-Type Data Summary
let str = "Hello";
let num = 20;
let bool = true;
let arr = [1,2,3];
let obj = {name:"Ayush"};
let nul = null;
let undef;

console.table({
    String:{value:str, type:typeof str},
    Number:{value:num, type:typeof num},
    Boolean:{value:bool, type:typeof bool},
    Array:{value:arr, type:Array.isArray(arr)},
    Object:{value:obj, type:typeof obj},
    Null:{value:nul, type:typeof nul},
    Undefined:{value:undef, type:typeof undef}
});
