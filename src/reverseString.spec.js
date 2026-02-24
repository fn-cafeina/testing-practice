import reverseString from "./reverseString";

describe("reverseString", () => {
  test("takes a string and returns it reversed", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
});
