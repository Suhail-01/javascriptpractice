// let product ={
//     name:"apple",
//     price:33223,
//     discountedprice:function(){
//         return this.price - 200;
//     },
// }
// console.log(product.discountedprice());







// 2
// class car{
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return this.brand + " - " + this.speed;
//     }
// }
// let car1 = new car("audi", 200)



// 3
// class student{
//     constructor(name,rollnumer){
//         this.name = name;
//         this.rollnumer = rollnumer;
//     }
//     introduce(){
//         console.log(this.name + "-" + this.rollnumer);
        
//     }
// }
// let st1 = new student("harsh", 21);




// 4
// let obj = {
//     sayname: function () {
//         console.log(this);
//     },
//     sayarrwoname:()=>{
//         console.log(this);
        
//     }
// }
// obj.sayarrwoname();
// obj.sayname();





// 5
// function abcd() {
//     console.log(this.name);
// }
// let obj = {
//     name:"dddd"
// }
// abcd.call(obj)





// function chalunga(fnc) {
//     setTimeout(fnc,Math.floor(Math.random()*10)*1000);
// }
// chalunga(function() {
//     console.log("hey");
// })


// function chaloge(username, cb) {
//     setTimeout(() => {
//         cb({ username, age: 22, email: "jsjshsshsj" });
//     }, 2000);
// }

// chaloge("sss", function (data) {
//     console.log(data);
// });





// function name(username, cb) {
//     console.log("fetching all data......");
//     setTimeout(() => {
//         cb({ _id: 2222, username, age: 22, email: "sjsjhshhsh" });
//     }, 2000);
// }

// function name22(id, cb) {
//     console.log("fetching all posts......");
//     setTimeout(() => {
//         cb({ _id: id, posts: {} });
//     }, 2000);
// }

// // Example usage:
// name("john_doe", function (userData) {
//     console.log("User Data:", userData);

//     name22(userData._id, function (postData) {
//         console.log("Post Data:", postData);
//     });
// });










// function fetchUser(username, cb) {
//     console.log("fetching user...");
//     setTimeout(() => {
//         cb({ _id: 2222, username, age: 22, email: "sjsjhshhsh" });
//     }, 800);
// }

// function fetchPosts(userId, cb) {
//     console.log("fetching posts for user:", userId);
//     setTimeout(() => {
//         cb([{ id: 1, title: "First post" }, { id: 2, title: "Second post" }]);
//     }, 700);
// }

// function fetchPostDetails(postId, cb) {
//     console.log("fetching details for post:", postId);
//     setTimeout(() => {
//         cb({ id: postId, content: "This is the content of post " + postId, likes: 10 });
//     }, 600);
// }

// function fetchComments(postId, cb) {
//     console.log("fetching comments for post:", postId);
//     setTimeout(() => {
//         cb([{ commentId: "c1", text: "Nice!" }, { commentId: "c2", text: "Great read." }]);
//     }, 500);
// }

// function fetchCommentAuthor(commentId, cb) {
//     console.log("fetching author for comment:", commentId);
//     setTimeout(() => {
//         cb({ authorId: "a" + commentId, name: "Author_" + commentId });
//     }, 400);
// }

// function sendNotification(userEmail, message, cb) {
//     console.log("sending notification to:", userEmail);
//     setTimeout(() => {
//         cb({ success: true, to: userEmail, message });
//     }, 300);
// }

// === CALLBACK HELL ===
// fetchUser("john_doe", function (user) {
//     console.log("USER:", user);

//     fetchPosts(user._id, function (posts) {
//         console.log("POSTS:", posts);

//         // take first post
//         fetchPostDetails(posts[0].id, function (postDetails) {
//             console.log("POST DETAILS:", postDetails);

//             fetchComments(postDetails.id, function (comments) {
//                 console.log("COMMENTS:", comments);

//                 // take first comment
//                 fetchCommentAuthor(comments[0].commentId, function (author) {
//                     console.log("COMMENT AUTHOR:", author);

//                     const message = `Hi ${user.username}, someone (${author.name}) commented on your post "${posts[0].title}"`;
//                     sendNotification(user.email, message, function (result) {
//                         console.log("NOTIFICATION RESULT:", result);

//                         // more nesting if you want — for no good reason:
//                         setTimeout(() => {
//                             console.log("All done. Deeply nested callback hell complete.");
//                         }, 200);
//                     });
//                 });
//             });
//         });
//     });
// });






// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function done() {
//   console.log("Callback finished!");
// }

// greet("Alice", done);



// function doTask(cb) {
//   cb("Task done!");
// }

// doTask(message => console.log(message));











// function delayedLog(callback) {
//   setTimeout(() => {
//     callback("Delayed Hello!");
//   }, 1000);
// }

// delayedLog(msg => console.log(msg));




// function double(n, callback) {
//   callback(n * 2);
// }

// double(5, result => console.log(result));




// const nums = [1, 2, 3];
// const doubled = nums.map(x => x * 2);
// console.log(doubled);




// function sayHi() {
//   console.log("Hi!");
// }

// function run(cb) {
//   cb();
// }

// run(sayHi);




// function finish() {
//   console.log("Done!");
// }

// function work(cb) {
//   console.log("Working...");
//   cb();
// }

// work(finish);




// function compute(num, callback) {
//   const result = num * num;
//   callback(result);
// }

// compute(4, value => console.log(value));




// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);






// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(function(num) {
//   return num * 2;
// });

// console.log(doubled);





// setTimeout(function () {
//     console.log("thi is mess");
    
// })



// function calculate(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// calculate(5, 3, function(result) {
//   console.log("Result is:", result);
// });











// this is vimp to understand the callbacke make sure to practice it again
// function abcd(fn) {
//   fn(function (fn3) {
//     fn3(function () {
//       // final callback
//     });
//   });
// }

// abcd(function (fn2) {
//   fn2(function (fn3) {
//     fn3(function (fn4) {
//       fn4();
//     });
//   });
// });









// callback situation
// function amitpassjao(address , cb){
//   console.log("fetching the detailses.........");
  
//   setTimeout(() => {
//     cb({lat: 23.44, lng: 76.5});
//   }, 3000);
// }
// amitpassjao("ashok nagar bengaal", function(det){
//   console.log(det);
// })






// Create a function called getUserLocation that:
// Takes two parameters
// username
// callback
// 👇

// function getuserlocation(username,cb) {
//   console.log("locating user....");
//   setTimeout(() => {
//     cb({  user: username,
//   lat: 12.9716,
//   lng: 77.5946})
//   }, 3000);
  
// }
// getuserlocation("raju",function(dets){
//   console.log(dets);
  
// })






// question 1 :- callback run after delayed
// function afterdelayed(time,cb){
//   setTimeout(() => {
//     cb();
//   }, time);
// }
// afterdelayed(3000,function () {
//   console.log("callback executed...");
  
// })





// function getUser(username, cb) {
//   setTimeout(() => {
//     cb({ id: 1, username: "ssoohh" });
//   }, 1000);
// }

// function getUserPost(id, cb) {
//   setTimeout(() => {
//     cb(["hello", "good boy", "f*** you"]);
//   }, 2000);
// }

// getUser("ssoohh", function (data) {
//   getUserPost(data.id, function (allposts) {
//     console.log(data.username, allposts);
//   });
// });











// callback hell / cristhmass tree problem
// function loginUser(username, cb) {
//   console.log("logged in user...");
//   setTimeout(() => {
//     cb({ id: 1122, username: username });
//   }, 1000);
// }

// function fetchPermissions(id, cb) {
//   console.log("fetching permissions...");
//   setTimeout(() => {
//     cb(["read", "write", "delete"]);
//   }, 2000);
// }

// function loadDashboard(permissions, cb) {
//   console.log("loading dashboard...");
//   setTimeout(() => {
//     cb();
//   }, 2000);
// }

// loginUser("nameaagaya", function (userdata) {
//   fetchPermissions(userdata.id, function (permissions) {
//     loadDashboard(permissions, function () {
//       console.log("✅ dashboard loaded");
//     });
//   });
// });






// function printNumber(num) {
//   console.log(num);
// }

// const numbers = [1, 2, 3, 4, 5];

// // printNumber is passed as a callback
// numbers.forEach(printNumber);



// function greet() {
//   console.log("Hello after 2 seconds!");
// }

// // greet is a callback function
// setTimeout(greet, 2000);



// function fetchData(callback) {
//   const success = true;

//   if (success) {
//     callback(null, "Data fetched successfully");
//   } else {
//     callback("Error fetching data", null);
//   }
// }

// fetchData(function (error, data) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// });




// const prn = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });
// prn.then(function () {
//   console.log("Promise resolved");
// });
// prn.catch(function () {
//   console.log("Promise rejected");
// }); 










// APi example
// fetch('https://randomuser.me/api/')
// .then(function (nrd) {
//   return nrd.json();
// })
// .then(function (aslidata) {
//   console.log(aslidata.results[0].name.first);
// }) 








// Asynch Awit example
// async function abcd() {
//     let raw = await fetch('https://randomuser.me/api/');
//     let data = await raw.json();
//     console.log(data);
// }
// abcd();




// TRy CAtch Example
// function getweather(city) {
//     let apikey = `d5aeb6cb592e85ac12812d4a6c452c84`;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//         .then(raw => raw.json())
//         .then(result => {
//             console.log(result);
//         });
// }

// getweather("London");



 
// using async and awit above code 
// async function getwaether(city) {
//     try {
//         let apikey = `d5aeb6cb592e85ac12812d4a6c452c84`;
//         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=solapur&appid=${apikey}`)
//         let result = await raw.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// getwaether('solapur')


// async function getweather(city) {
//     try {
//         let apikey = `d5aeb6cb592e85ac12812d4a6c452c84`;
//         let raw = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//         );

//         if (!raw.ok) {
//             throw new Error("city not found try different city");
//         }

//         let data = await raw.json();
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// getweather("dehli")





// Debouncing & Throttling:-
// function debouncing(fn,delay) {
//    let timer;
//    return function () {
//     clearTimeout(timer);
//     timer = setTimeout((fn ,delay) => {
//     }, delay);
//    } 
// }
// document.querySelector("#search").addEventListener("input",debouncing(function () {
//     console.log("fetching data...");
// }),300)




// function guess(no) {
//     new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             let randomnum = Math.floor(Math.random() * 100);
//             if(randomnum === no){
//                 resolve("you guessed it right");
//             }else{
//                 reject("wrong guess try again");
//             }
//         }, no);
//     })
// }
// guess


const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failure");

Promise.allSettled([p1, p2])
  .then(results => console.log(results));
