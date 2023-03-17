const getTodos = async (resource)=>{
const response = await fetch(resource);
if(response.status !=200){
    throw new Error("cannot fetch the data")
}
//JSON.parse---
const data = await response.json();
return data;

};//return promise


console.log("Non- blocking");

// getTodos("JS/hold.json")
//       .then(data => console.log(data))
//       .catch(() => console.error(" 404 Source not found"));

// getTodos("JS/lotus.json")
//       .then(data => console.log(data))
//       .catch(() => console.error(" 404 Source not found"));

getTodos("JS/todos.json")
      .then(data => console.log(data))
      .catch((err) => console.error("rejected:",err.message))


//  Throws Errors:----

// custom error inside the async function when reject the promise that this returns