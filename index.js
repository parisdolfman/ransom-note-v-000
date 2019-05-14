function binaryMatch(mag_array) {
  let histogramArray = [];
  const histogram = buildHistogram(mag_array);

  for (letter in histogram) {
    letterObj = {};
    letterObj[letter] = histogram[letter];
    histogramArray.push(letterObj);
  }
  return histogramArray;
}

function buildHistogram(array) {
  let histogram = {};
  array.forEach(letter => {
    histogram[letter] = histogram[letter] ? histogram[letter] += 1 : 1;
  });
  return histogram
}
