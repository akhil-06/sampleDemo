console.log("hello")

// What is API ?
// const url = "https://reqres.in/api/users?pge=2";
// let promise = fetch(url);
//reject
///resolve
//pending
// console.log(promise);


// function append(data){
//     console.log(data)
//     let container = document.getElementById("container");
//     data.forEach(function(el){
//         let img = document.createElement("img");
//         img.src = el.avatar;
//         let p = document.createElement("p");
//         p.innerText = `${el.first_name} ${el.last_name}`;
        
//         let div = document.createElement("div");
//         div.append(img, p);
//         container.append(div)
//     })
// }


// fetch("https://reqres.in/api/users?pge=2")
// .then(function(res){
//     // console.log(res)
//     return res.json()
// })
// .then(function(val){
//     // console.log(val.data);
//     append(val.data)
// })

// readableStream = readable + stream
// statuscodes => 200 to 299


function append(data){
    // console.log(data)
    let container = document.getElementById("container");
    data.sort(function(a,b){
        return a.price - b.price;
    })
    console.log(data);

    data = data.filter(function(el){
        return el.category === "jewelery"
    })
    console.log(data)
    data.forEach(function(el){
        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText = el.title;
        let p1 = document.createElement("p");
        p1.innerText = el.description;
        let p2 = document.createElement("p");
        p2.innerText = el.price;

        let div = document.createElement("div");
        div.append(img, p, p1, p2);
        container.append(div)
        container.style.fontWeight="bold";
    })

}
const url = "https://fakestoreapi.com/products";
async function getdata(){
    try{
        let res = await fetch(url);
        // console.log(res);
        let data = await res.json();
        append(data);
        // console.log(data);
    }catch(err){
        console.log(err);
    }
}

getdata();





// Session on Objects



//object

let student = {
    name:"Akhil",
    rollNo:10,
    marks:100,
    1:"web sessions"
};
// console.log(student.rollNo);
student.name = "qwerty";
// console.log(student.semester);
student.semester = 6;
// console.log(student);
// console.log(student["rollNo"]);
// console.log(student.1);
// console.log(student[name]);
// delete student.name;
delete student[1];
// console.log(student);

// for(var prop in student){
//     console.log(prop);
// }

// var keys = Object.keys(student)
// console.log(keys);

// var key = Object.getOwnPropertyNames(student);
// console.log(key);



// nested objects

var student1 = {
    name:'abc',
    rolno:20,
    marks:100,
    semester:6,
    address:{
        city:'delhi',
        pincode:127111,
        state:'delhi',
        country:'india',
        asia:{
            country:'india',
            continent:"asia"
        }
    }
}

// console.log(student1.address.asia.continent);
// console.log(student1["address"]["state"]);
// console.log(student1);
console.log(Object.values(student1));
// for(let prop in student1){
//     console.log(prop);
// }



//OOPS continued
// var demo2 = function(){
//     console.log(this);
// }
// function demo(){
//     console.log(this);
// }
// console.log(this);
// demo2()
// demo()

// 'use strict'
// function demo(){
//     console.log(this);
// }
// demo()
// var obj = {
//     'prop1':12,
//     'prop2':function(){
//         console.log(this);
//     }
// }

// obj.prop2();


// var student = {
//     name:"abc",
//     marks:80,
//     rollno:90
// }



// function Student(name,rollno,makrs){
//     // console.log(this);
//     this.name= name;
//     this.rollno = rollno
//     this.makrs = makrs
//     // this.getMarks = function(){
//     //     console.log(this.makrs);
//     // }
// }

// var student1 = new Student("abc",30,40)
// var student2 = new Student("ska",30,40)
// // console.log(student1);
// student1.getMarks()
// console.log(student2);


'use strict'
function Student(name,rollno,makrs){
        // console.log(this);
        this.name= name;
        this.rollno = rollno
        this.makrs = makrs
        this.getMarks = function(){
            console.log(this.makrs);
        }
    }
    
    var student1 = new Student("abc",30,40)
    var student2 = new Student("ska",30,40)
    // console.log(student1);
    student1.getMarks()
    console.log(student2);

    // company employee atleast 6 properties
    //2 methods

    let x1 = new String()

    let x2 = new Number()

    let x3 = new Boolean()
    x3 = true;
    
    let x4 = new Object()

    let x5 = new Array()
    x5 = []

    let x6 = new RegExp()

    let x7 = new Function()

    let x8 = new Date()

    
    
    
    
//    Objects and Clases
    // // console.log("hello");

// // object vs Object

// function Vechile(wheel, price){
//     this.price = price
//     this.wheel = wheel;
// }

// Vechile.prototype.getPrice = function(){
//     return this.price;
// }

// var v1 = new Vechile(2,5000);
// var v2 = new Vechile(4,1000);
// var v3 = new Vechile(10,100);

// v3.capacity;

// // v1 -> prototype -> Object

// Class







// Object.getPrototypeOf(v1) === Vechile.prototype


// var v1 = Vechile(2,100);
// function Vechile(price,wheel){
//     var vechile = {}
//     vechile.price = price
//     vechile.wheel = wheel
//     return vechile;
// }
// var v1 = Vechile(2,100);




// var a = function(){
//     console.log("hello");
// }
// a()



// var Vechile = class{
//     constructor(wheel,price){
//         this.wheel = wheel
//         this.price = price
//     }
//     getprice(){
//         console.log(this.price);
//     }
//     getWheel(){
//         console.log(this.wheel);
//     }
// }

// var v1 = new Vechile(4,2000);
// var v2 = new Vechile(10,500);

// Inheritance
class Vechile{
    constructor(wheel,price){
        this.wheel = wheel
        this.price = price
    }
    getprice(){
        console.log(this.price);
    }
    getWheel(){
        console.log(this.wheel);
    }
    printDescription(){
        console.log("Vechile", this.wheel, this.price);
    }
}

class Car extends Vechile{
    constructor(doors, price){
        super(4,price)
        this.doors = doors
    }
    printDescription(){
        super.getWheel()
        console.log("Car", this.doors);
    }
}

var c1 = new Car(5,200000);
var c2 = new Car(5,2);
var c3 = new Car(5,20);



// closures
//closures
var i =10;
function outer(){
    var j =20;
    var inner = function(){
        var k =30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner;
}

var inner = outer();
inner();
inner();

    



// function validateForm() {
//   var name = document.forms["RegForm"]["Name"];
//   var email = document.forms["RegForm"]["EMail"];
//   var password = document.forms["RegForm"]["Password"];
//   var confirmPassword = document.forms["RegForm"]["Confirm"];

//   if (name.value == "") {
//     window.alert("Please enter your name.");
//     name.focus();
//     return false;
//   }

//   if (email.value == "") {
//     window.alert("Please enter a valid e-mail address.");
//     email.focus();
//     return false;
//   }

//   if (password.value == "") {
//     window.alert("Please enter your password");
//     password.focus();
//     return false;
//   }

//   if (confirmPassword.value == "") {
//     window.alert("Please enter your password");
//     password.focus();
//     return false;
//   }

//   if (password.value === confirmPassword.value) {
//     if (storedInLS()) {
//       window.alert("Registration is done successfully!!!");
//       return true;
//     }
//   } else {
//     window.alert("Password and confirm password should be same");
//     return false;
//   }

//   return true;
// }

// var users = JSON.parse(localStorage.getItem("userInLS")) ? JSON.parse(localStorage.getItem("userInLS")):[];
// console.log(users);
// function storedInLS() {
//   var name = document.forms["RegForm"]["Name"].value;
//   var email = document.forms["RegForm"]["EMail"].value;
//   var password = document.forms["RegForm"]["Password"].value;
//   var confirmPassword = document.forms["RegForm"]["Confirm"].value;

//   var userData = {
//     id:Number(new Date),
//     "name": name,
//     "email": email,
//     "password": password,
//     "confirmPassword": confirmPassword,
//   };
//   console.log(JSON.stringify(userData));

//   console.log(userData);
//   users.push(userData);

//   var userString = JSON.stringify(users);
//   localStorage.setItem("userInLS", userString);
// }





let innerObj = {
    name:"Ak",
    age:30,
    address:{
        street:"123 pal ghar",
        city:"Delhi",
        state:"Haryana"
    }
};

let outerObj = {};
innerObj.address.name = innerObj.name;
delete innerObj.name;

// console.log(outerObj);
console.log(innerObj);
console.log(innerObj.address);








//Whole DSA Code

// // // // function validateForm() {
// // // //   var name = document.forms["RegForm"]["Name"];
// // // //   var email = document.forms["RegForm"]["EMail"];
// // // //   var password = document.forms["RegForm"]["Password"];
// // // //   var confirmPassword = document.forms["RegForm"]["Confirm"];

// // // //   if (name.value == "") {
// // // //     window.alert("Please enter your name.");
// // // //     name.focus();
// // // //     return false;
// // // //   }

// // // //   if (email.value == "") {
// // // //     window.alert("Please enter a valid e-mail address.");
// // // //     email.focus();
// // // //     return false;
// // // //   }

// // // //   if (password.value == "") {
// // // //     window.alert("Please enter your password");
// // // //     password.focus();
// // // //     return false;
// // // //   }

// // // //   if (confirmPassword.value == "") {
// // // //     window.alert("Please enter your password");
// // // //     password.focus();
// // // //     return false;
// // // //   }

// // // //   if (password.value === confirmPassword.value) {
// // // //     if (storedInLS()) {
// // // //       window.alert("Registration is done successfully!!!");
// // // //       return true;
// // // //     }
// // // //   } else {
// // // //     window.alert("Password and confirm password should be same");
// // // //     return false;
// // // //   }

// // // //   return true;
// // // // }

// // // // var users = JSON.parse(localStorage.getItem("userInLS")) ? JSON.parse(localStorage.getItem("userInLS")):[];
// // // // console.log(users);
// // // // function storedInLS() {
// // // //   var name = document.forms["RegForm"]["Name"].value;
// // // //   var email = document.forms["RegForm"]["EMail"].value;
// // // //   var password = document.forms["RegForm"]["Password"].value;
// // // //   var confirmPassword = document.forms["RegForm"]["Confirm"].value;

// // // //   var userData = {
// // // //     id:Number(new Date),
// // // //     "name": name,
// // // //     "email": email,
// // // //     "password": password,
// // // //     "confirmPassword": confirmPassword,
// // // //   };
// // // //   console.log(JSON.stringify(userData));

// // // //   console.log(userData);
// // // //   users.push(userData);

// // // //   var userString = JSON.stringify(users);
// // // //   localStorage.setItem("userInLS", userString);
// // // // }

// // // let innerObj = {
// // //     name:"Ak",
// // //     age:30,
// // //     address:{
// // //         street:"123 pal ghar",
// // //         city:"Delhi",
// // //         state:"Haryana"
// // //     }
// // // };

// // // let outerObj = {};
// // // innerObj.address.name = innerObj.name;
// // // delete innerObj.name;

// // // // console.log(outerObj);
// // // console.log(innerObj);
// // // console.log(innerObj.address);

// // class Basket {
// //     constructor() {
// //       this.basketValue = 0;
// //       this.items = [];
// //     }

// //     addToBasket(itemName, itemPrice) {
// //       this.basketValue += itemPrice;
// //       this.items.push({ itemName, itemPrice });
// //     }

// //     clearBasket() {
// //       this.basketValue = 0;
// //       this.items = [];
// //     }

// //     getBasketValue() {
// //       return this.basketValue;
// //     }

// //     pay() {
// //       console.log(`${this.getBasketValue()} has been paid.`);
// //     }
// //   }

// //   const myBasket = new Basket();
// //   myBasket.addToBasket("honey", 200);
// //   myBasket.addToBasket("Vegetable", 2000);
// //   myBasket.addToBasket("Parchun ka saman", 5876);
// //   console.log( myBasket.getBasketValue());
// //   myBasket.pay();
// //   console.log(myBasket.items);
// //   myBasket.clearBasket();
// //   console.log(myBasket.items);

// // Push zero to the en of array
// // function pushZerotoEnd(arr){
// //   var n = arr.length;
// //   var count = 0;
// //   for(var i=0;i<n;i++){
// //     if(arr[i]!=0){
// //       arr[count] = arr[i];
// //       count++;
// //     }
// //   }

// //   for(var j=count;j<n;j++){
// //     arr[count] = 0;
// //     count++;
// //   }
// // }

// // let arr = [1,0,4,0,2,0,3,0];
// // pushZerotoEnd(arr);
// // console.log(arr);

// // function reverse(arr,s,e){
// //   while(s<e){
// //   let temp = arr[s];
// //   arr[s] = arr[e]
// //   arr[e] = temp
// //   s++;
// //   e--;
// //   }
// // }
// // function roate(arr,k){
// //   if(k==0||arr.length == 1){
// //     return arr;
// //   }
// //   reverse(arr,0,arr.length-1)
// //   reverse(arr,0,k-1)
// //   reverse(arr,k,arr.length-1)
// // }

// // let arr1 = [1,2,3,4,5];
// // let k = 3;
// // roate(arr1,k);
// // console.log(arr1);

// // function sort012(arr){
// //   let n = arr.length;
// //   let count = 0;
// //   let count1 = 0;
// //   for(let i=0;i<n;i++){
// //     if(arr[i] ==0){
// //       count++
// //     }
// //     if(arr[i]==1){
// //       count1++;
// //     }
// //   }

// //   for(let i=0;i<count;i++){
// //     arr[i] = 0;
// //   }
// //   for(let i=count;i<count+count1;i++){
// //     arr[i] = 1;
// //   }
// //   for(let i=count+count1;i<n;i++){
// //     arr[i] = 2;
// //   }
// // }

// // let arr = [0,2,1,0,0,1,1,0,0,2,2];
// // sort012(arr)
// // console.log(arr);

// // function sumOfTwoArrays(arr1, arr2, outputArr) {
// //   const n = arr1.length;
// //   const m = arr2.length;
// //   let carry = 0;

// //   for (let i = n - 1, j = m - 1, k = outputArr.length - 1; k >= 0; i--, j--, k--) {
// //     const digit1 = i >= 0 ? arr1[i] : 0;
// //     const digit2 = j >= 0 ? arr2[j] : 0;
// //     const sum = digit1 + digit2 + carry;
// //     outputArr[k] = sum % 10;
// //     carry = Math.floor(sum / 10);
// //   }
// // }

// // const arr1 = [6, 2, 4];
// // const arr2 = [7, 5, 6];
// // const outputArr = Array(Math.max(arr1.length, arr2.length) + 1).fill(0);

// // sumOfTwoArrays(arr1, arr2, outputArr);

// // console.log(outputArr.join(' '));

// // function sumOfTwoArrays(arr1, arr2, outputArr) {
// //   const num1 = BigInt(arr1.join('')); // convert arr1 to BigInt
// //   const num2 = BigInt(arr2.join('')); // convert arr2 to BigInt
// //   const sum = num1 + num2; // calculate sum as BigInt
// //   const sumArr = sum.toString().split('').map(Number); // convert sum to array of digits

// //   for (let i = 0; i < sumArr.length; i++) {
// //     outputArr[i] = sumArr[sumArr.length - 1 - i]; // copy digits to output array in reverse order
// //   }

// //   if (outputArr[0] === 0) {
// //     outputArr.shift(); // remove leading zero if present
// //   }
// // }

// // Linear Search
// // function linearSearchBetter(arr,target,si){
// //   if(si==arr.length) return false;

// //   if(arr[si] ==  target) return true;

// //   return linearSearchBetter(arr,target,si+1);
// // }

// // function linearSearch(arr,target){
// //   return linearSearchBetter(arr,target,0);
// // }

// // let arr = [3,5,2,1,12,4,5,45,34,12,1,42,6];
// // let target = 420;
// // console.log(linearSearch(arr,target));

// // Count Zeros
// // function countZeros(num){
// //   if(num < 10){
// //     if(num == 0){
// //       return 1;
// //     }else{
// //       return 0;
// //     }
// //   }

// //   if(num%10 == 0){
// //     return countZeros(num/10)+1;
// //   }else{
// //     return countZeros(num/10);
// //   }
// // }

// // let num = 10001;
// // console.log(countZeros(num));

// // function binarySearch(arr,target){
// //   let s =0;
// //   let e = arr.length-1;
// //   while(s<e){
// //     let mid = Math.floor((s+e)/2);
// //     if(target > arr[mid]){
// //       s = mid+1;
// //     }
// //     else if(arr[mid] == target){
// //       return mid;
// //     }else{
// //       e = mid-1;
// //     }
// //   }
// //   return -1;
// // }

// // let arr= [1,2,3,4,5,6,7,8,9];
// // let target = 50;
// // console.log(binarySearch(arr,target));

// // Merge Sort
// // function merge(arr,s,mid,e){
// //   let n1 = mid-s+1;
// //   let n2 = e-mid;
// //   let left = [];
// //   let right = [];
// //   for(let i=0;i<n1;i++){
// //     left.push(arr[s+i]);
// //   }
// //   for(let i=0;i<n2;i++){
// //     right.push(arr[mid+1+i]);
// //   }
// //   let i=0;
// //   let j=0;
// //   let k = s;

// //   while(i<n1&&j<n2){
// //     if(left[i]<right[j]){
// //       arr[k] = left[i];
// //       i++;
// //     }else{
// //       arr[k] = right[j];
// //       j++;
// //     }
// //     k++;
// //   }

// //   while(i<n1){
// //     arr[k] = left[i];
// //     i++;
// //     k++
// //   }

// //   while(i<n2){
// //     arr[k] = right[i];
// //     j++;
// //     k++
// //   }
// // }

// // function mergeSort(arr,s,e){
// //   if(arr.length<2){
// //     return arr;
// //   }
// //     if(s >= e){
// //       return;
// //     }
// //     let mid = Math.floor((s+e)/2);
// //     mergeSort(arr,s,mid);
// //     mergeSort(arr,mid+1,e);
// //     merge(arr,s,mid,e);
// //   }

// //   let arr = [4,6,2,1,2,4,5,657734,512,41,4,34,2345,23,45];
// //   mergeSort(arr,0,arr.length-1);
// //   console.log(arr);

// function partition(arr, s, e) {
//   let pivot = arr[s];
//   let count = 0;
//   for (let i = s+1; i <= e; i++) {
//     if (arr[i] <= pivot) {
//       count++;
//     }
//   }
//   let pivotIndex = s + count;
//   let temp = arr[s];
//   arr[s] = arr[pivotIndex];
//   arr[pivotIndex] = temp;

//   let i = s,
//     j = e;
//   while (i <= pivotIndex && j >= pivotIndex) {
//     while (i <= pivotIndex && arr[i] <= pivot) {
//       i++;
//     }
//     while (j <= pivotIndex && arr[j] <= pivot) {
//       j--;
//     }
//     if (i < pivotIndex && j > pivotIndex) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       i++;
//       j--;
//     }
//   }
//   return pivotIndex;
// }

// function qs(arr, s, e) {
//   if (s >= e) {
//     return;
//   }
//   let pivotPos = partition(arr, s, e);
//   qs(arr, s, pivotPos - 1);
//   qs(arr, pivotPos + 1, e);
// }

// let arr = [4, 6, 2, 1, 2, 4, 5, 657734, 512, 41, 4, 34, 2345, 23, 45];
// qs(arr, 0, arr.length - 1);
// console.log(arr);
















// Stack
// class Stack{
//     constructor(){
//         this.stackArray = [];
//     }
//     push(data){
//         this.stackArray.push(data);
//     }
//     pop(){
//         if(this.stackArray.length  === 0){
//             return "No data is found in the stack";
//         }
//         return this.stackArray.pop();
//     }
//     top(){
//         if(this.stackArray.length  === 0){
//             return "No data is found in the stack";
//         }
//         return this.stackArray[this.stackArray.length - 1];
//     }
//     isEmpty(){
//         return this.stackArray.length === 0;
//     }
//     size(){
//         return this.stackArray.length;
//     }
//     printStack(){
//         return this.stackArray;
//     }
// }

// let stack = new Stack()
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.pop());
// console.log(stack.top());
// console.log(stack.isEmpty());
// stack.push(40);
// console.log(stack.size())
// console.log(stack.printStack())



//Queue
class Queue{
    constructor(){
        this.queueArray = [];
    }
    enqueue(data){
        this.queueArray.push(data);
    }
    dequeue(){
        if(this.queueArray.length === 0){
            return "no elements is present in our queue"
        }
        return this.queueArray.shift();
    }
    front(){
        if(this.queueArray.length === 0){
            return "no elements is present in our queue"
        }
        return this.queueArray[0];
    }
    rear(){
        if(this.queueArray.length === 0){
            return "no elements is present in our queue"
        }
        return this.queueArray[this.queueArray.length-1];
    }
    size(){
        return this.queueArray.length;
    }
    isEmpty(){
        if(this.queueArray.length === 0){
            return true;
        }else{
            return false;
        }
    }
    printQueue(){
        for(let i=0;i<this.queueArray.length;i++){
            console.log(this.queueArray[i]);
        }
    }
}

let queue = new Queue();
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.rear());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());
queue.enqueue(80);
console.log(queue.rear());
console.log(queue.dequeue());
console.log(queue.size());
queue.printQueue()






















