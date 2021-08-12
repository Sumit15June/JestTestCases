function f1(){
    return "checking data"
}

function common(){
    return "initial data"
}

beforeEach(()=>{
    console.warn(common());
})

test("fetch data testing",()=>{
    expect(f1()).toBe("checking data")
})

test("fetch data testing",()=>{
    expect(f1()).toBe("checking data")
})


afterEach(()=>{
    console.warn("after data")
})

//Note even though the before and after each fxns is written only once but it will execute same no of times as test fnx gets called
