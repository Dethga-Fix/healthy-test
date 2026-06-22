import healthStatus from '../../health';

test('health > 50 should return healthy', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health = 50 should return wounded', () => {
  expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('health between 15 and 50 should return wounded', () => {
  expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('health = 15 should return wounded', () => {
  expect(healthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('health < 15 should return critical', () => {
  expect(healthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});