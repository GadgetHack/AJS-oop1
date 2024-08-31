
class Character {
  constructor(name, type) {
    this.validateName(name);
    this.validateType(type);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    const typeAttributes = {
      Bowman: { attack: 25, defence: 25 },
      Swordsman: { attack: 40, defence: 10 },
      Magician: { attack: 10, defence: 40 },
      Daemon: { attack: 10, defence: 40 },
      Undead: { attack: 25, defence: 25 },
      Zombie: { attack: 40, defence: 10 },
    };

    if (!typeAttributes[type]) {
      throw new Error('Invalid type');
    }


    this.attack = typeAttributes[type].attack;
    this.defence = typeAttributes[type].defence;
  }

  validateName(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Invalid name');
    }
  }

  validateType(type) {
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Invalid type');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Cannot level up a dead character');
    }

    this.level += 1;
    this.attack = Math.floor(this.attack * 1.2);
    this.defence = Math.floor(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (points < 0) {
      throw new Error('Damage points cannot be negative');
    }
    const damage = points * (1 - this.defence / 100);
    this.health = Math.max(this.health - damage, 0);
  }
}

class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
  }
}

export { Character, Bowman };
