var foo = require('../js/foo');
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    foo();
    expect(document.body.innerHTML).toBe("Hello World!");
  });
});