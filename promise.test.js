

function fetchingData(){
    return new Promise((resolve,reject)=>{
        resolve("Hello World");
    })
}
//pass the test case
test("Testing the promise",()=>{
      return fetchingData().then((data)=>{
          expect(data).toBe("Hello World")
      })

})
//fail the test case 
test("Testing the promise",()=>{
    return fetchingData().then((data)=>{
        expect(data).toBe("Hi")
    })

})