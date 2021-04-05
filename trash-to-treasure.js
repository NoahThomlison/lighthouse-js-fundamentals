let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};

let trash = '';

function smartGarbage(trash, bins){
  if (trash === 'waste'){
    bins.waste = bins.waste + 1;
    return(bins);
  }
  if (trash === 'recycling'){
    bins.recycling = bins.recycling + 1;
    return(bins);
  }
  if (trash === 'compost'){
    bins.compost = bins.compost + 1;
    return(bins);
  }
}

//console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));