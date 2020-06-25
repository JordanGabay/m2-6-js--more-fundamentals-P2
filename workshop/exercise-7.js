// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function
function createRecommendations(pairings) {
  const allKeys = Object.keys(pairings);
  const newArr = allKeys.map(function (key) {
    return `With ${key} it is best to have ${pairings[key]}.`;
  });
  return newArr;
}

// printRecommendations function
function printRecommendations(arr) {
  arr.forEach(function (string) {
    console.log(string);
  });
}

// function call (done)
printRecommendations(createRecommendations(foodPairings));
