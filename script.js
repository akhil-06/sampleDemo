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

    
