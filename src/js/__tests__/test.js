import playerHealth from '../app';

test.each([
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Мечник', health: 16 }, 'wounded'],
  [{ name: 'Лучник', health: 1 }, 'critical'],
])('return string', (obj, expected) => {
  const result = playerHealth(obj);
  expect(result).toBe(expected);
});
