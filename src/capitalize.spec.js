import capitalize from "./capitalize";

describe("capitalize", () => {
  test("takes a string and returns it with the first character capitalized", () => {
    expect(capitalize("hello")).toEqual("Hello");
  });
});
