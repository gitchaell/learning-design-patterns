// abstract class Rick {
//   constructor() { }
// }

// class HumanRick extends Rick {
//   constructor() {
//     super();
//   }
// }

// class ShrimpRick extends Rick {
//   constructor() {
//     super();
//   }
// }

// class TeddyRick extends Rick {
//   constructor() {
//     super();
//   }
// }

// class WaspRick extends Rick {
//   constructor() {
//     super();
//   }
// }

// abstract class Morty {
//   constructor() { }
// }

// class HumanMorty extends Morty {
//   constructor() {
//     super();
//   }
// }

// class ShrimpMorty extends Morty {
//   constructor() {
//     super();
//   }
// }

// class TeddyMorty extends Morty {
//   constructor() {
//     super();
//   }
// }

// class WaspMorty extends Morty {
//   constructor() {
//     super();
//   }
// }

// enum Universe {
//   Human = 'human',
//   Shrimp = 'shrimp',
//   Teddy = 'teddy',
//   Wasp = 'wasp',
// }

// class PhoenixOperation {

//   execute(): Rick {
//     const universe = this.randomUniverse();

//     if (universe === Universe.Human) return [new HumanRick(), new HumanMorty()];
//     if (universe === Universe.Shrimp) return [new ShrimpRick(), new ShrimpMorty()];
//     if (universe === Universe.Teddy) return [new TeddyRick(), new TeddyMorty()];
//     if (universe === Universe.Wasp) return [new WaspRick(), new WaspMorty()];

//     throw new Error();
//   }

//   randomUniverse(): string {
//     const universes = Object.values(Universe);
//     const index = Math.floor(Math.random() * universes.length);
//     return universes[index];
//   }
// }


// const phoenixOperation = new PhoenixOperation();