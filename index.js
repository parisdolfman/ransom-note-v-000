function binaryMatch(magazine) {
  let histogramArray = [];
  const histogram = buildHistogram(magazine);

  for (x in histogram) {
    letterObj = {};
    letterObj[x] = histogram[x];
    histogramArray.push(letterObj);
  }
  return histogramArray;
}

function buildHistogram(array) {
  let histogram = {};
  array.map(y => (
    histogram[y] = histogram[y] ? histogram[y] += 1 : 1
  ));
  return histogram
}
