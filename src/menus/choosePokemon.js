import { setTimeout as sleep } from "node:timers/promises";
import { Pokemon } from "../structures/Pokemon.js";
import { intro, outro, select } from "#prompts";
import color from "strcolorize";

export async function choosePokemon(pokemons) {
  await sleep(300);

  intro(color("#bgGreen bold white[🐲 Pokémon]"));

  await sleep(300);

  const pokemonOptions = pokemons.map((pokemon, i) => ({
    value: pokemon,
    label: `[ ${i + 1} ] ${pokemon.name}`,
  }));
  const chosenPokemon = await select({
    message: "Escolha um pokémon",
    options: pokemonOptions,
  });

  await sleep(300);

  outro(`Pokémon escolhido: ${chosenPokemon.name}`);

  return new Pokemon(chosenPokemon);
}
