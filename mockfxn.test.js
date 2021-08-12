
const axios=require("axios");

//star wars api
//https://swapi.dev/api/people

//get a star wars person by using its ID
const warperson=(id)=>{
    axios.get(`https://swapi.dev/api/people/${id}/`)
    .then((res)=>{res.data.name})
    .catch((err)=>{
        console.error(err)
    })

    
}


describe("star wars", ()=>{
    test("test to return a name", ()=>{
        const result=warperson(1);
        console.log(result);
        expect(result).toBe("Luke Skywalker")
    })
})