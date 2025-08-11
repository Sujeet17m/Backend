// let a = [1,2,3,4];
// let b = [...a];
// a.pop();
// console.log(a);
// console.log(b);

// let a = {1:2,3:4};
// let b = a;
// a[1] = 5;
// console.log(a);
// console.log(b);

// let a = {1:2,3:4};
// let b = {...a};
// a[1] = 5;
// console.log(a);
// console.log(b);

// //for loop
// for(let i = 0; i <= 12; i++){
//     console.log(i);
// }

// //foreach (in array)
// let arr = [1 , 2, 3 , 4 , 5];
// arr.forEach(i => {
//     console.log(i);
    
//     // You can use 'item' inside this block
// });

// //forin (for object)
// let obj = {name:'harsha', age: 23};
// for (let key in obj) {
//     console.log(key, obj[key]);
    
// }

//callback hell
// function connectToServer(cbfn){
//     console.log("Connecting to server...");
//     setTimeout(()=>{
//         console.log("Connected to server");
//         cbfn();
//     },2000)
// }

// function fetchData(cbfn){
//     console.log("Fetching data...");
//     setTimeout(()=>{
//         console.log("Data fetched");
//         cbfn(["course1", "course2", "course3"]);
//     },2000);
// }

// connectToServer(function(){
//     fetchData(function(data){
//         console.log("Data received:", data);
//     });
// });

// Promise example
// function connectToServer() {        
//     console.log("Connecting to server...");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Connected to server");
//             resolve();
//         }, 2000);
//     });
// }

//writing file using fs module
const fs = require('fs');
fs.writeFile("example.txt", "Hello, this is a test file.", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully.");
    }
});

//reading file using fs module
fs.readFile("example.txt","Utf8",(err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }       
});
