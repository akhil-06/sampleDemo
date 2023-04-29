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
