var foo = require('../js/foo');
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(foo()).toBe("Hello World!");
  });
});