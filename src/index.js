export default function personHealth(obj) {
  let state = '';
  if (obj.health >= 51) {
    state = 'healthy';
  }
  if (obj.health <= 50 && obj.health >= 15) {
    state = 'wounded';
  }
  if (obj.health < 15) {
    state = 'critical';
  }
  return state;
}

export const heros = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

heros.sort((a, b) => (a.health > b.health ? -1 : 1));
