
function binaryMatch(magazine) {
  let result = []
  array = magazine.sort();
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        // only add to result array once
        }
      }
    }
  }
}

function getFrequency(array) {
  var frequency = {};
  for (let i = 0; i < array.length; i++) {
    var character = array.charAt(i);
    if (frequency[character]) {
      frequency[character]++;
    } else {
      frequency[character] = 1;
    }
  }
  return frequency
}
