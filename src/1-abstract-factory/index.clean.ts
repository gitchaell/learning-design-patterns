enum Specie {
  Human = 'human',
  Shrimp = 'shrimp',
  Pickle = 'pickle',
}

abstract class Rick {
  name: string;
  specie: Specie;

  constructor(specie: Specie) {
    this.name = 'Rick Sanchez';
    this.specie = specie;
  }

  getAspect() {
    throw new Error('This method must be implemented');
  }
}

class HumanRick extends Rick {
  constructor() {
    super(Specie.Human);
  }

  getAspect() {
    return { head: {}, body: {}, }
  }
}

class ShrimpRick extends Rick {
  constructor() {
    super(Specie.Shrimp);
  }

  getAspect() {
    return { head: {}, body: {}, }
  }
}

class PickleRick extends Rick {
  constructor() {
    super(Specie.Pickle);
  }

  getAspect() {
    return { head: {}, body: {}, }
  }
}

abstract class Morty {
  name: string;
  specie: Specie;

  constructor(specie: Specie) {
    this.name = 'Morty Smith';
    this.specie = specie;
  }

  getAspect() {
    throw new Error('This method must be implemented');
  }
}

class HumanMorty extends Morty {
  constructor() {
    super(Specie.Human);
  }
}

class ShrimpMorty extends Morty {
  constructor() {
    super(Specie.Shrimp);
  }
}

class PickleMorty extends Morty {
  constructor() {
    super(Specie.Pickle);
  }
}

abstract class Jerry {
  name: string;
  specie: Specie;

  constructor(specie: Specie) {
    this.name = 'Jerry Smith';
    this.specie = specie;
  }

  getAspect() {
    throw new Error('This method must be implemented');
  }
}

class HumanJerry extends Jerry {
  constructor() {
    super(Specie.Human);
  }
}

class ShrimpJerry extends Jerry {
  constructor() {
    super(Specie.Shrimp);
  }
}

class PickleJerry extends Jerry {
  constructor() {
    super(Specie.Pickle);
  }
}

abstract class CloneFactory {
  createRick(): Rick {
    throw new Error('This method must be implemented');
  }
  createMorty(): Morty {
    throw new Error('This method must be implemented');
  }
  createJerry(): Jerry {
    throw new Error('This method must be implemented');
  }
}

class HumanCloneFactory extends CloneFactory {
  createRick(): HumanRick {
    return new HumanRick();
  }
  createMorty(): HumanMorty {
    return new HumanMorty();
  }
  createJerry(): HumanJerry {
    return new HumanJerry();
  }
}

class ShrimpCloneFactory extends CloneFactory {
  createRick(): ShrimpRick {
    return new ShrimpRick();
  }
  createMorty(): ShrimpMorty {
    return new ShrimpMorty();
  }
  createJerry(): ShrimpJerry {
    return new ShrimpJerry();
  }
}

class PickleCloneFactory extends CloneFactory {
  createRick(): PickleRick {
    return new PickleRick();
  }
  createMorty(): PickleMorty {
    return new PickleMorty();
  }
  createJerry(): PickleJerry {
    return new PickleJerry();
  }
}

class Cloner {
  private factories: Record<Specie, CloneFactory> = {
    [Specie.Human]: new HumanCloneFactory(),
    [Specie.Shrimp]: new ShrimpCloneFactory(),
    [Specie.Pickle]: new PickleCloneFactory(),
  };

  execute(): [Rick, Morty, Jerry] {
    const specie = this.getSpecie();
    return [
      this.factories[specie].createRick(),
      this.factories[specie].createMorty(),
      this.factories[specie].createJerry(),
    ];
  }

  private getSpecie(): Specie {
    const species = Object.values(Specie);
    const index = Math.floor(Math.random() * species.length);
    return species[index];
  }
}


const cloner = new Cloner();