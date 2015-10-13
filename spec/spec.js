// var code = require('../monday.js')
var code = require('../tuesday.js')

describe("convert", function() {
  it("returns the sum of a binary input", function() {
    expect(code.convert("101")).toEqual(5);
  })
  it("returns the sum of a binary input", function() {
    expect(code.convert("1010")).toEqual(10);
  })
  it("returns the sum of a binary input", function() {
    expect(code.convert("10101")).toEqual(21);
  })
  it("returns the sum of a binary input", function() {
    expect(code.convert("101010")).toEqual(42);
  })
  it("returns the sum of a binary input", function() {
    expect(code.convert("1010101")).toEqual(85);
  })
  // it("returns the sum of a binary input", function() {
  //   expect(code.convert("0")).toEqual(0);
  // })
});


// describe("backronym", function() {
//   it("returns an acronym of an input in a single string", function() {
//     expect(code.backronym("aso")).toEqual("animal society oops");
//   })
//   it("returns an acronym of an input in a single string", function() {
//     expect(code.backronym("")).toEqual("");
//   })
// });
