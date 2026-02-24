function analyzeArray(array) {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length || 0,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export default analyzeArray;
