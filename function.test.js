   // tobe Value
const functions=require("./function");

test("ADD 2 and 2 to be equal to 4",()=>{
    expect(functions.add(2,2)).toBe(4);
})



//not to be Value
test("ADD 2 and 2 to be not equal to 5",()=>{
    expect(functions.add(2,2)).not.toBe(5);
})


//checking for truth and false values
test("should be a null value",()=>{
    expect(functions.isNull()).toBeNull();
});

//check for a value to be false or not
test("should be falsy",()=>{
    expect(functions.checkValue(0)).toBeFalsy();
});

//check for the user object
test("user should be Sumit Saurabh object",()=>{
    expect(functions.createUser()).toEqual({
        firstName:"Sumit",
        lastName:"Saurabh"
    });
});


//check for greater and les than values
test("should be less than 1400",()=>{
    const num1=400;
    const num2=700;
    expect(num1+num2).toBeLessThan(1400);
})

//Regular Expression
test("There is no I in captain",()=>{
    expect('captain').not.toMatch(/I/);
})


//Arrays
test('work should be in employee',()=>{
    employee=["lunch","party","work","meetings"];
    expect(employee).toContain("work");
})

//working with async data
test("user fetched name should be Leanne Graham",()=>{
    expect.assertions(1);
    return functions.fetchUserData()
    .then(data=>{expect(data.name).toEqual("Leanne Graham")})
})


//Object Assignment matchers
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });


//checking the opposite of a matcher 

test('adding positive numbers is not zero', () => {
    for (let a = 5; a < 10; a++) {
      for (let b = 5; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
