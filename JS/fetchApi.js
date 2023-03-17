// fetch api:-------

// It take  argument which is resource that we want to fetch,that could be end point to an API or it could be local resource.
// it return the promise(response Object)

fetch('JS/lotus.json').then(response =>{
console.log(response);
return response.json()//return promise
}).then((data)=>{
    console.log(data)
}).catch(err=>{
    console.log("source Error 404 not found")
})
