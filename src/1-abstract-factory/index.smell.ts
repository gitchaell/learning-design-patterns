// enum Specie {
//   Human = 'Human',
//   Shrimp = 'Shrimp',
//   Pickle = 'Pickle',
// }

// class Rick {
//   name: string;
//   specie: Specie;

//   constructor(specie: Specie) {
//     this.name = 'Rick Sanchez';
//     this.specie = specie;
//   }

//   getAspect() {
//     if (this.specie === Specie.Human) return { head: {}, body: {}, }
//     if (this.specie === Specie.Shrimp) return { head: {}, body: {}, }
//     if (this.specie === Specie.Pickle) return { head: {}, body: {}, }
//   }
// }

// class Morty {
//   name: string;
//   specie: Specie;

//   constructor(specie: Specie) {
//     this.name = 'Morty Smith';
//     this.specie = specie;
//   }
// }

// class Jerry {
//   name: string;
//   specie: Specie;

//   constructor(specie: Specie) {
//     this.name = 'Jerry Smith';
//     this.specie = specie;
//   }
// }

// class Cloner {

//   execute(): [Rick, Morty, Jerry] {
//     const specie = this.getSpecie();
//     return [
//       new Rick(specie),
//       new Morty(specie),
//       new Jerry(specie),
//     ];
//   }

//   private getSpecie(): Specie {
//     const species = Object.values(Specie);
//     const index = Math.floor(Math.random() * species.length);
//     return species[index];
//   }
// }


// const cloner = new Cloner();