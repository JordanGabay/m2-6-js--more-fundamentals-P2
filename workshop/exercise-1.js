// Exercise 1
// ----------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

const fixList = (arr, first, last) => {
  const completeList = [...arr];

  completeList.unshift(first);
  completeList.pop();
  completeList.push(last);
  return arr;
};

const printList = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    console.log(`${x + 1}. ${arr[x]}`);
  }
};

printList(
  fixList(mostPopularFood, 'bean burritos', 'buffalo-flavored cauliflower')
);