let url = "https://6553a36f5449cfda0f2efc2a.mockapi.io/userapi";

let p1 = new Promise((resolve,reject)=>{

    let req = new XMLHttpRequest();

    req.open("GET",url);

    req.send();

    req.onload = function(){
     

        setTimeout(()=>{
            if(true){
                let data = JSON.parse(req.response);
                resolve("1");
            }
            else{
                reject("Failed to fetch data1");
            }
        },2000)
    }  
})

let p2 = new Promise((resolve,reject)=>{

    let req = new XMLHttpRequest();

    req.open("GET",url);

    req.send();

    req.onload = function(){
        
        setTimeout(()=>{
            if(false){
                let data = JSON.parse(req.response);
                resolve("2");
            }
            else{
                reject("Failed to fetch data2");
            }
        },2000)
    }  
})

let p3 = new Promise((resolve,reject)=>{

    let req = new XMLHttpRequest();

    req.open("GET",url);

    req.send();

    req.onload = function(){
        
        setTimeout(()=>{
            if(false){
                let data = JSON.parse(req.response);
                resolve(data);
            }
            else{
                reject("Failed to fetch data3");
            }
        },2000)
    }  
})

//Using many .then for promise chaining

// p1.then((data)=>console.log(data)).catch((err)=>console.log(err));
// p2.then((data)=>console.log(data)).catch((err)=>console.log(err));

//Promise all
// If any one get failed it will not show fullfilled, it shows only one failed which one
// failed at first.

// Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err));

// Promise all settled
// Once all  the promise settled means, it shows all the settled promise whether it is
// fullfilled or failed with status and value/reject reason.

// Promise.allSettled([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err));

//Promise any
// It shows only one promise any one settled which one settles first.
// If none fullfilled, it shows Aggregator error "No Promise fullfilled"

// Promise.any([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err));

//Promise race
//It return a single promise
// Whether it is fullfilled or rejected, it shows only one which one settles first.

Promise.race([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err));