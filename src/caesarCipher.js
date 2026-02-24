function caesarCipher(string, shift) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alpha.split("");
  const stringArr = string.split("");

  const shiftedString = [];

  for (const letter of stringArr) {
    const lower = letter.toLowerCase();

    if (alphaArr.includes(lower)) {
      let index = alphaArr.findIndex((i) => i === lower) + shift;

      if (index >= alpha.length) {
        index = index - alpha.length;
      }

      if (lower === letter) {
        shiftedString.push(alphaArr[index]);
      } else {
        shiftedString.push(alphaArr[index].toUpperCase());
      }
    } else {
      shiftedString.push(letter);
    }
  }

  return shiftedString.join("");
}

export default caesarCipher;
