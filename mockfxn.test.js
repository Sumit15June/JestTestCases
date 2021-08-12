
const axios=require("axios");

//star wars api
//https://swapi.dev/api/people

//get a star wars person by using its ID
function warperson(id){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
    .then((res)=>res.title)
    .catch((err)=>{
        console.error(err)
    })

    
}


describe("star wars", ()=>{
    test("test to return a name",async()=>{
        const result= await warperson(1);
        console.log(result);
        expect(result).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    })
})