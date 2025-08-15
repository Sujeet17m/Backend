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

// //writing file using fs module
const fs = require('fs');
// fs.writeFile("example.txt", "Hello, this is a test file.", (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File written successfully.");
//     }
// });

// //reading file using fs module
// fs.readFile("example.txt","Utf8",(err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log("File content:", data);
//     }       
// });

// //appending to file using fs module
// fs.appendFile("example.txt", "\nThis is appended text.", (err) => {
//     if (err) {
//         console.error("Error appending to file:", err);
//     } else {
//         console.log("Text appended successfully.");
//     }
// });

// //renaming file using fs module
// fs.rename("example.txt", "renamed_example.txt", (err) => {
//     if (err) {
//         console.error("Error renaming file:", err);
//     } else {
//         console.log("File renamed successfully.");
//     }
// });

//deleting file using fs module
// fs.unlink("renamed_example.txt", (err) => {
//     if (err) {
//         console.error("Error deleting file:", err);
//     } else {
//         console.log("File deleted successfully.");
//     }
// });

//creating a server in http
// const http = require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end("Hello,is a server response!");
// }).listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

// const http = require('http');

// http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.writeHead(301, { 'Location': '/new-page' });
//     res.end();
//   } else if (req.url === '/new-page') {
//     res.end('Welcome to the new page!');
//   }
// }).listen(3000, () => console.log('Server running on port 3000'));

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Welcome Home!");
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end("404 - Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });

// express server
// const express = require('express');
// const app = express();
// const PORT = 5000;

// app.get('/', (req, res) => {
//   res.send("Welcome to the Express server!");
// }); 

// app.get('/about', (req, res) => {
//   res.send("This is the about page.");
// });

// app.get('/:id', (req, res) => {
//   res.send("hii");
// });
// // Handle 404 for undefined routes
// app.use((req, res) => {
//   res.status(404).send("404 - Page Not Found");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const app = express();

// app.get("/",(req, res) => {
//   res.send("Welcome to the Express server!"); 
// });

// app.get('/about', (req, res) => {
//   res.send("This is the about page.");
// });

// app.get('*', (req, res) => {
//   res.status(404).send("404 - Page Not Found");
// });

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });

// const express = require('express');
// const app = express();

// // Example routes
// app.get('/', (req, res) => {
//   res.send('Welcome to Home Page');
// });

// app.get('/about', (req, res) => {
//   res.send('About Us Page');
// });

// // Handle Nonexistent Routes (404)
// app.use((req, res) => {
//   res.status(404).json({
//     error: 'Route not found',
//     message: `The requested URL ${req.originalUrl} was not found on this server`
//   });
// });

// // Start server
// app.listen(5000, () => console.log('Server running on port 5000'));

//jab bhi aap browser se koi request backend server ko bhejte ho,to wo apne route par jaati hai
//toh backend server us request ko handle karta hai aur response bhejta hai.
// agar aapne koi route define nahi kiya hai toh wo 404 error bhejta hai
// agar aapne koi route define kiya hai toh wo us route par jaata hai aur response bhejta hai.
// and agar app chaahte hai route par jaane se pahle koi kaam karna hai toh wo middleware ke through hota hai
// and agar app chaahte hai route par jaane se pahle wo request mein kuch check karna hai toh wo bhi middleware ke through hota hai ya fir aap kuch jodna chahte ho toh wo bhi middleware ke through hota hai.
// middleware ka kaam hai request ko handle karna aur response bhejna

// const express = require('express');
// const app = express();

// // Custom middleware for logging
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
//   next(); // Move to the next middleware or route handler
// });

// app.get('/', (req, res) => {
//   res.send('Hello, Middleware!');
// });

// app.listen(5000, () => console.log('Server running on port 5000'));

// const express = require('express');
// const session = require('express-session');

// const app = express();

// // Configure session middleware
// app.use(session({
//   secret: 'mySuperSecretKey', // used to sign the session ID cookie
//   resave: false,              // don't save session if unmodified
//   saveUninitialized: true,    // save new sessions even if empty
//   cookie: { maxAge: 60000 }    // session expires after 1 min
// }));

// // Set session data
// app.get('/login', (req, res) => {
//   req.session.username = 'JohnDoe';
//   res.send('User logged in and session started');
// });

// // Access session data
// app.get('/profile', (req, res) => {
//   if (req.session.username) {
//     res.send(`Welcome back, ${req.session.username}!`);
//   } else {
//     res.send('Please log in first.');
//   }
// });

// // Destroy session
// app.get('/logout', (req, res) => {
//   req.session.destroy(() => {
//     res.send('Session ended');
//   });
// });

// app.listen(5000, () => console.log('Server running on port 5000'));


const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Setup session middleware (required for connect-flash)
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

// Setup flash middleware
app.use(flash());

// Middleware to pass flash messages to all views
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Route to set a flash message
app.get('/login', (req, res) => {
  req.flash('success_msg', 'You have logged in successfully!');
  res.redirect('/dashboard');
});

// Route to display flash message
app.get('/dashboard', (req, res) => {
  res.send(`
    <h1>Dashboard</h1>
    <p>${res.locals.success_msg}</p>
  `);
});

app.listen(5000, () => console.log('Server started on port 5000'));
