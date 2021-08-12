function getData(){
    return new Promise((resolve,reject)=>{
        resolve("Hello Sumit")
    })
}


test("Test of async function", async ()=>{
    const data= await getData();
    expect(data).toBe("Hello Sumit")

})