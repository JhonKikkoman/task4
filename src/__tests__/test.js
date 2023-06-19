import basicFunc, { heros } from '../index';

// test('health-indicator', () => {
//   const result = 'healthy';
//   expect(result).toBe(basicFunc({ name: 'Маг', health: 90 }));
// });
test.each([
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 40 }, 'wounded'],
  ['critical', { name: 'Маг', health: 10 }, 'critical'],
])('.add(%i, %i)', (a, b, expected) => {
  const result = basicFunc(b);
  expect(result).toBe(expected);
});

test('heros sorted-health', () => {
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(heros);
});
