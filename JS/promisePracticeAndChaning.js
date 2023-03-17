// Asynchronous code  start now and finish it  later(take sometime like network request for data to a database or api)

// promise:--

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

function getTodos(resource){
    return new Promise((resolve,reject)=>{
        // Inside we do network,fetch,XMLHttpRequest
        const request = new XMLHttpRequest();
        // event add to it
        request.addEventListener('readystatechange',function fireWhenStateChange(){
            // status code 
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data)
            }else if(request.readyState === 4){
                reject('Sarfraj :- Error getting Resources');
                console.log(resource);
                
            }
        })
        request.open('GET',resource)
        request.send()

    })
}
// promise chaining
getTodos('JS/hold.json').then((data)=>{
    console.log(data)
    return getTodos('JS/lotus.json')
}).then((data2)=>{
    console.log(data2);
    return getTodos('JS/todo.json')
}).then((data3)=>{
    console.log(data3);
    }).catch((err)=>{
        console.error('Promise Rejected',err)
    })

