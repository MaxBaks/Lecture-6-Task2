import GetSpecialAttacks from '../js/app';
import Character from '../js/domain';

test('special attacks should be written correctly', () => {
  const char = new Character('Лучник', 'Bowman', 50, 3, 40, 10);
  char.special = [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    { id: 9, name: 'Огненный выстрел', icon: 'http://...' },
  ];

  const expected = [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Огненный выстрел', icon: 'http://...', description: 'Описание недоступно',
    },
  ];

  const result = GetSpecialAttacks(char);

  expect(result).toEqual(expected);
});
