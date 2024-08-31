import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../Character';

describe('Character class', () => {
  test('should create a Bowman character', () => {
    expect(() => new Bowman('Robin')).not.toThrow(); 
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Bowman('R')).toThrow('Invalid name');
    expect(() => new Bowman('AveryLongName')).toThrow('Invalid name');
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Bowman('Robin', 'InvalidType')).toThrow('Invalid type');
  });

  test('should level up character correctly', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(50); // Reduce health before leveling up
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30); // 25 * 1.2 = 30
    expect(bowman.defence).toBe(30); // 25 * 1.2 = 30
    expect(bowman.health).toBe(100);
  });

  test('should throw an error if leveling up a dead character', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(150); // This should set health to 0
    expect(() => bowman.levelUp()).toThrow('Cannot level up a dead character');
  });

  test('should calculate damage correctly', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(10);
    expect(bowman.health).toBeCloseTo(100 - 10 * (1 - 25 / 100)); // 100 - 7.5 = 92.5
  });

  test('should not have negative health', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(150); // This should set health to 0
    expect(bowman.health).toBe(0);
  });
});
