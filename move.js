const finalPosition = function(instruction){
  
  let X = 0;
  let Y = 0;

  for (let i = 0; i <= instruction.length; i++){
    if (instruction[i] === 'north'){
      Y = Y + 1;
      ///console.log(instructionNum);
    }
    if (instruction[i] === 'south'){
      Y = Y - 1;
      ///console.log(instructionNum);
    }
    if (instruction[i] === 'east'){
      X = X + 1;
      ///console.log(instructionNum);
    }
    if (instruction[i] === 'west'){
      X = X - 1;
      ///console.log(instructionNum);
    }
  }
  endPoint = [X, Y]
  return(endPoint)
}

let endPoint = [0,0];
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
finalPosition(moves);
console.log(endPoint);
