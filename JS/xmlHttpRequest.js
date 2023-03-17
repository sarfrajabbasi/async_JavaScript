// asynchronous code  start now and finish it  later(take sometime like network request for data to a database or api)
// HTTP request
function getTodos(resource, callback){
    const request = new XMLHttpRequest();

    //  console.log(request);
    
    request.addEventListener("readystatechange", function fireWhenStateChanges() {
    // status codes
    if(request.readyState ==4 && request.status ==200){
        const data = JSON.parse(request.responseText)
        //callback
        callback(undefined,data)
    }else if(request.readyState ==4){
        // callback
        callback("could not fetch the data",undefined)
    }
    });
    request.open("GET", resource);
    
    request.send();
    
}

// just for convention error first and data second.it make it moreFlexible

// function callbackForFired(err,data){
    
// }

getTodos("JS/lotus.json",(err,data)=>{
// return (err)? console.log(err) :console.log(data)
    // CALLBACK HELL
    console.log(data);
    getTodos("JS/hold.json",(err,data)=>{
        console.log(data)
        getTodos("JS/todos.json",(err,data)=>{
            console.log(data)
        })
    })
});
