// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 || fighter2.health > 0) {
    if (fighter1.name === firstAttacker) {
      fighter2.health -= fighter1.damagePerAttack;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
    }
    if (fighter1.health <= 0) return fighter2.name;
    if (fighter2.health <= 0) return fighter1.name;
    firstAttacker =
      fighter1.name === firstAttacker ? fighter2.name : fighter1.name;
  }
}
