import playerHealth from '../app';

test.each([
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Боец', health: 16 }, 'wounded'],
  [{ name: 'Черт', health: 1 }, 'critical'],
])('return string', (obj, expected) => {
  const result = playerHealth(obj);
  expect(result).toBe(expected);
});