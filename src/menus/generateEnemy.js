import { Pokemon } from "../structures/Pokemon.js";

export async function generateEnemy(pokemons) {
  const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

  return new Pokemon(randomPokemon);
}
