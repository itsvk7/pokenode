import { select } from "#prompts";

export async function chooseAction() {
  const action = await select({
    message: "Escolha uma ação",
    options: [
      { value: "attack", label: "[ 1 ] Atacar" },
      { value: "defend", label: "[ 2 ] Defender" },
    ],
  });

  return action;
}
