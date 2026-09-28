import pokemon from "./data/pokemon.json" with { type: "json" };
import { choosePokemon, generateEnemy } from "./menus/index.js";
import { battle } from "./battle/battle.js";

const player = await choosePokemon(pokemon);
const enemy = await generateEnemy(pokemon);

await battle(player, enemy);
