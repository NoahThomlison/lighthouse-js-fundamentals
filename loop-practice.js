const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('while')
let whileIndex = 0;
while (whileIndex < ingredients.length){
  console.log(ingredients[whileIndex]);
  whileIndex = whileIndex + 1;
}

// Write a for loop that prints out the contents of ingredients:
console.log('\nfor')
for (let forIndex = 0; forIndex < ingredients.length; forIndex++){
  console.log(ingredients[forIndex]);
}

// Write a for of loop that prints out the contents of ingredients:
console.log('\nfor let i of')
for (let i of ingredients){
  console.log(i);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\nfor backwards')
for (let forIndexRev = ingredients.length-1; forIndexRev >= 0; forIndexRev--){
  console.log(ingredients[forIndexRev]);
}

console.log('\nforEach')
ingredients.forEach(function(ingredients){
  console.log(ingredients);
})
