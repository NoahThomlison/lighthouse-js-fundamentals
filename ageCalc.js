const ageCalculator = function (name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  let stringAnswer = (name + ' is ' + age + ' years old.');
  return (stringAnswer);
}
