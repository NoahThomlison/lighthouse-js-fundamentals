const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let whileIndex = 0;
while (whileIndex < ingredients.length){
  console.log(ingredients[whileIndex]);
  whileIndex = whileIndex + 1;
}

// Write a for loop that prints out the contents of ingredients:
for (let forIndex = 0; forIndex < ingredients.length; forIndex++){
  console.log(ingredients[forIndex]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let forIndexRev = ingredients.length-1; forIndexRev >= 0; forIndexRev--){
  console.log(ingredients[forIndexRev]);
}