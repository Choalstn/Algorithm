function solution(n, arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let convertArr1 = arr1[i].toString(2).padStart(n, 0);
    let convertArr2 = arr2[i].toString(2).padStart(n, 0);

    convertArr1 = convertArr1.replaceAll('1', '#');
    convertArr1 = convertArr1.replaceAll('0', ' ');

    convertArr2 = convertArr2.replaceAll('1', '#');
    convertArr2 = convertArr2.replaceAll('0', ' ');

    for (let j = 0; j < n; j++) {
      if (convertArr1[j] !== '#' && convertArr2[j] === '#') {
        convertArr1 =
          convertArr1.substr(0, j) + '#' + convertArr1.substr(j + 1);
      }
    }

    result.push(convertArr1);
  }

  return result;
}