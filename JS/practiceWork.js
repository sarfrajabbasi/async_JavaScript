// xml http request:-----

// doing the request:---

function getTodos(resource,callback){

const request = new XMLHttpRequest();
request.addEventListener("readystatechange",function(){
    if(request.readyState ==4 && request.status ==200){
        const data = JSON.parse(request.responseText)
        callback(undefined,data)
    }else if(request.readyState ==4){
    callback("could not fetch the data",undefined)
    }
})

// Open server:--
request.open("GET",resource)

//request send:--
request.send();
}

getTodos("JS/todos.json",(err,data)=>{
   console.log(data);
   getTodos("JS/lotus.json",(err,data)=>{
    console.log(data);
    getTodos("JS/hold.json",(err,data)=>{
        console.log(data);
        
       })
   })
})
