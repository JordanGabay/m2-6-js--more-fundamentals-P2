// Exercise 4
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

const converter = (anObj) => {
  return [Object.keys(anObj), Object.values(anObj)];
  // do something
};

console.log(converter(foodPairings));
