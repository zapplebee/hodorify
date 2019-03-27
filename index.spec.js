const hodorify = require("./index");

describe("hodorify", () => {
  it("should turn string to hodor", () => {
    expect(hodorify("Bran")).toEqual("hodor");
  });

  it("should turn multi word string to hodor", () => {
    expect(hodorify("Bran Stark")).toEqual("hodor hodor");
  });
});
