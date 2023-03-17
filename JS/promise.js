// Asynchronous code  start now and finish it  later(take sometime like network request for data to a database or api)


// HTTP request
function getTodos(resource){
    return new Promise((resolve,reject)=>{
        // Inside we do network request
        const request = new XMLHttpRequest(); 
    request.addEventListener("readystatechange", function fireWhenStateChanges() {

    // status codes
    if(request.readyState ==4 && request.status ==200){
        const data = JSON.parse(request.responseText)
        //callback
       resolve(data)
    }else if(request.readyState ==4){
        reject("Sarfraj:-Error getting Resource")
    }
    });
    request.open("GET", resource);
    
    request.send();
    })   
}

getTodos("JS/hold.json").then((data)=> console.log(data)).catch((err)=> console.error("Promise rejected",err))



// Promise example:----
const getSomething = ()=>{
    return new Promise((resolve,reject)=>{
        // Inside we do network request,fetch,XMlHttpRequest
        // resolve("some data")
        // reject("some error")
    })
}
// getSomething().then((data)=>console.log(data),(err)=>console.log(err));
getSomething().then((data)=>console.log(data)).catch((err)=>console.log(err));