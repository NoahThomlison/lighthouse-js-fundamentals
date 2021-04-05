const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

let judgeVegetable = function(vegetables, metric){
  let j = 0;
  let initalValue = vegetables[0][metric];
    for (let i = 0; i < vegetables.length; i++){
      if (initalValue < vegetables[i][metric]){
        initalValue = vegetables[i][metric];
        j = j + 1;
      }
    }
    return(vegetables[j].submitter);
  };

let metric = 'redness'
console.log(judgeVegetable(vegetables, metric))
metric = 'plumpness'
console.log(judgeVegetable(vegetables, metric))