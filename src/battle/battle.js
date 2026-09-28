import { setTimeout as sleep } from "node:timers/promises";
import { intro, outro, spinner } from "#prompts";
import { chooseAction, chooseAttack } from "#menus";
import color from "strcolorize";

export async function battle(player, enemy) {
  await sleep(500);

  intro(color(`#bgMagenta bold white[${player.name} ⚔️ ${enemy.name}]`));

  await sleep(300);

  while (player.hp > 0 && enemy.hp > 0) {
    const action = await chooseAction();

    await sleep(500);

    if (action === "attack") {
      const attack = await chooseAttack(player);

      player.attack(enemy, attack);

      const s = spinner();
      s.start(`Atacando ${enemy.name}`);

      await sleep(3000);

      s.stop();

      if (enemy.hp <= 0) break;
    }

    if (action === "defend") {
      player.defend();
    }

    const actions = ["attack", "defend"];
    const enemyAction = actions[Math.floor(Math.random() * actions.length)];

    if (enemyAction === "attack") {
      const attack =
        enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)];

      enemy.attack(player, attack);

      const s = spinner();
      s.start(`Atacando ${player.name}`);

      await sleep(3000);

      s.stop();

      if (player.hp <= 0) break;
    }

    if (enemyAction === "defend") {
      enemy.defend();
    }
  }

  if (enemy.hp <= 0) {
    outro("Você venceu!");
  } else {
    outro("💀 Você perdeu!");
  }
}
