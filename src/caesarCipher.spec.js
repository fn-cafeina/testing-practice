import caesarCipher from "./caesarCipher";

describe("caesarCipher", () => {
  test("works", () => {
    expect(caesarCipher("abc", 3)).toEqual("def");
  });

  test("wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toEqual("abc");
  });

  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
  });

  test("keep punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
  });
});
