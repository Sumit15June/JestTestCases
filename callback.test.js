function fetchData1(back){
    return back("Hello")
}


test("testing a callback function",(done)=>{
function callback1(data){
    try{
        expect(data).toBe("Hello")
        done();
    }
    catch(error){
        done(error)

    }
}
   fetchData1(callback1)
})