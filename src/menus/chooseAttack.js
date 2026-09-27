import { select } from "#prompts";

export async function chooseAttack(pokemon) {
  const attacks = pokemon.attacks.map((attack, i) => ({
    value: attack.name.toLowerCase(),
    label: `[ ${i + 1} ] ${attack.name} ( ${attack.damage} dmg )`,
  }));
  const options = await select({
    message: "Escolha um ataque",
    options: attacks,
  });

  return options;
}
