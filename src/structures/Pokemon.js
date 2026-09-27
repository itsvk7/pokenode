class Pokemon {
  constructor({ name, hp, defense, attacks }) {
    this.name = name;
    this.hp = hp;
    this.defense = defense;
    this.attacks = attacks;
    this.isDefending = false;
  }

  attack(enemy, atk) {
    const defenseMultiplier = enemy.isDefending ? 2 : 1;
    const damage = Math.max(0, atk.damage - enemy * defenseMultiplier);

    enemy.hp = Math.max(0, enemy.hp - damage);
    enemy.isDefending = false;

    return damage;
  }

  defend() {
    this.isDefending = true;
  }
}
