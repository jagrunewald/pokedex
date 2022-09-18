const handleBackgroundColor = (type) => {
  if(type === 'grass') {
    return '#4d984f';
  }
  if(type === 'fire') {
    return '#f69e29';
  }
  if(type === 'water') {
    return '#7edcfa';
  }
  if(type === 'fairy') {
    return '#ed57a6';
  }
  if(type === 'bug') {
    return '#adf544';
  }
  if(type === 'electric') {
    return '#f4df20';
  }
  if(type === 'poison') {
    return '#792de3';
  }
  if(type === 'ground') {
    return '#c49862';
  }
  if(type === 'psychic') {
    return '#fef282';
  }
  if(type === 'rock') {
    return '#5c5a5a';
  }
  if(type === 'ground') {
    return '#c49862';
  }
  if(type === 'ghost') {
    return '#c788eb';
  }
  if(type === 'fighting') {
    return '#4772f0';
  }
  if(type === 'ice') {
    return '#dfd9d8';
  }
  if(type === 'dragon') {
    return '#f53506';
  }
  if(type === 'dark') {
    return '#1c1d1d';
  }
  else {
    return '#f5f4e8';
  }
}

export default handleBackgroundColor;
