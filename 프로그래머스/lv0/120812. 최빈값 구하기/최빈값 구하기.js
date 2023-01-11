function solution(array) {
  const collection = array.reduce((allElements, element)=>{
    element in allElements
      ? allElements[element]++
      : (allElements[element] = 1);

    return allElements;
  }, {});

  const collection_array = [];
    
  for (let number in collection) {
    collection_array.push({
      number,
      count: collection[number],
    });
  }

  const new_array = collection_array.sort((a, b) => b.count - a.count);

  if (new_array.length === 1) {
    return Number(new_array[0].number);
  }

  return new_array[0].count === new_array[1].count ? -1 : Number(new_array[0].number);
}