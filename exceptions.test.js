//how to test the whether a particular expections is throws an error or not 
function compileNodejsProject() {
    throw new Error('you are not using express package to run the server');
  }
  
  test('compiling node js  goes as expected', () => {
    expect(() => compileNodejsProject()).toThrow();
    expect(() => compileNodejsProject()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => compileNodejsProject()).toThrow('you are not using express package to run the server');
    expect(() => compileNodejsProject()).toThrow(/EXPRESS/i);
  });