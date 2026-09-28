import { Pokemon } from "../structures/Pokemon.js";
import { select } from "#prompts";

export async function choosePokemon(pokemons) {
  const pokemonOptions = pokemons.map((pokemon, i) => ({
    value: pokemon,
    label: `[ ${i + 1} ] ${pokemon.name}`,
  }));
  const chosenPokemon = await select({
    message: "Escolha um pokémon",
    options: pokemonOptions,
  });

  return new Pokemon(chosenPokemon);
}
