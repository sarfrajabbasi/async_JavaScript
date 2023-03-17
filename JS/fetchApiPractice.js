// fetch api:-------

// It take  argument which is resource that we want to fetch,that could be end point to an API or it could be local resource.
// it return the promise(response Object)

fetch('JS/lotus.json').then(response=>{
    console.log(response);
    return response.json()
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log('Source Error 404 not found');
})

// async-await:--

 async function  getTodos2(resource){
    //response await and fetch
    const response = await fetch(resource);
    if(response.status !==200){
        throw new Error ('cannot fetch data')

    }
    // JSON.parse:---
    const data = await response.json();
    return data
 }//return promise

getTodos2('JS/hold.json').then(data=>{
    console.log(data);
    return getTodos2("JS/lotus.json")
}).then((data1=>{
    console.log(data1);
    return getTodos2("JS/todo.json")
})).then(data2=>{
    console.log(data2);
}).catch(err=>{
    console.error("reject your req. sarfraj",err.message)
})

