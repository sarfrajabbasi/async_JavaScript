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
        console.log(resource)
    }
});
    request.open("GET", resource);
    
    request.send();
    })   
}

getTodos("JS/hold.json").then((data)=>{
    console.log("Promise 1 resolve",data);
    return getTodos("JS/lotus.json")
} ).then((data2) =>{
    console.log("Promise 2 resolve ",data2);
    return getTodos("JS/todos.json")
}).then((data3)=>{
    console.log("Promise 3 resolve",data3);
}).catch((err)=> console.error("Promise rejected",err))