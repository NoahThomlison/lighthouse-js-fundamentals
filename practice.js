const chooseStations = function (stationCheck) {
  let goodStations = [];
  let count = 0;
  for (let i = 0; i < stationCheck.length ; i++){
    if ((stationCheck[i][1] >= 20) && (stationCheck[i][2] == ('school') || stationCheck[i][2] == ('community centre'))){
      goodStations[count] = stationCheck[i][0];
      count = count + 1;
    }
  }
  return (goodStations);
};

const stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
]

console.log(chooseStations(stations));
