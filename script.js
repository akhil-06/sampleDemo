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
