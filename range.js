function range(start, end, step){
  let rangeArray = [start];
  let errorArray = [];
  let newValue = 0;
  let i = 0;
  let count = (end - start) / step;

  if (start > end){
    return(errorArray);
  }
  else if ((start === undefined) || (end === undefined) || (step === undefined)){
    return(errorArray);
  }

  else if ((step === 0) || (step < 0)){
    return(errorArray);
  }

  else
    for (i = 0; i < count; i++){
      newValue = step + rangeArray[i];
      rangeArray.push(newValue);
    } 
  return(rangeArray);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));