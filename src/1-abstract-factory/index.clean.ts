abstract class Rick {
  constructor() { }
}

class HumanRick extends Rick {
  constructor() {
    super();
  }
}

class ShrimpRick extends Rick {
  constructor() {
    super();
  }
}

class TeddyRick extends Rick {
  constructor() {
    super();
  }
}

class WaspRick extends Rick {
  constructor() {
    super();
  }
}

abstract class Morty {
  constructor() { }
}

class HumanMorty extends Morty {
  constructor() {
    super();
  }
}

class ShrimpMorty extends Morty {
  constructor() {
    super();
  }
}

class TeddyMorty extends Morty {
  constructor() {
    super();
  }
}

class WaspMorty extends Morty {
  constructor() {
    super();
  }
}

abstract class CloneFactory {
  cloneRick(): Rick {
    throw new Error('This method must be implemented');
  }
  cloneMorty(): Morty {
    throw new Error('This method must be implemented');
  }
}

class HumanCloneFactory extends CloneFactory {
  cloneRick(): HumanRick {
    return new HumanRick();
  }
  cloneMorty(): HumanMorty {
    return new HumanMorty();
  }
}

class ShrimpCloneFactory extends CloneFactory {
  cloneRick(): ShrimpRick {
    return new ShrimpRick();
  }
  cloneMorty(): ShrimpMorty {
    return new ShrimpMorty();
  }
}

class TeddyCloneFactory extends CloneFactory {
  cloneRick(): TeddyRick {
    return new TeddyRick();
  }
  cloneMorty(): TeddyMorty {
    return new TeddyMorty();
  }
}

class WaspCloneFactory extends CloneFactory {
  cloneRick(): WaspRick {
    return new WaspRick();
  }
  cloneMorty(): WaspMorty {
    return new WaspMorty();
  }
}

enum Universe {
  Human = 'human',
  Shrimp = 'shrimp',
  Teddy = 'teddy',
  Wasp = 'wasp',
}

class PhoenixOperation {
  private cloners: Record<string, CloneFactory> = {
    [Universe.Human]: new HumanCloneFactory(),
    [Universe.Shrimp]: new ShrimpCloneFactory(),
    [Universe.Teddy]: new TeddyCloneFactory(),
    [Universe.Wasp]: new WaspCloneFactory(),
  };

  execute(): [Rick, Morty] {
    const universe = this.randomUniverse();
    return [
      this.cloners[universe].cloneRick(),
      this.cloners[universe].cloneMorty(),
    ];
  }

  private randomUniverse(): string {
    const universes = Object.values(Universe);
    const index = Math.floor(Math.random() * universes.length);
    return universes[index];
  }

  // randomDimension(): string {
  //   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  //   return `${letters[Math.floor(Math.random() * letters.length)]}-${Math.round(Math.random() * 999)}`;
  // }
}


const phoenixOperation = new PhoenixOperation();