const handleImg = (id) => {
  if(id < 10) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
  }
  if(id >= 10 && id <= 99) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
  }
  if(id >= 100) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  }
}

export default handleImg;
