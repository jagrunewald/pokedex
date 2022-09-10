const getPokemon = async (name) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const requestJson = await request.json();
  // const pokemons = requestJson.sprites.front_default;
  return requestJson;
};

export default getPokemon;
