enum Specie {
  Human = 'Human',
  Shrimp = 'Shrimp',
  Teddy = 'Teddy',
  Wasp = 'Wasp',
}

class Rick {
  dna?: string;
  name: string;
  specie: Specie;

  constructor(specie: Specie) {
    this.name = 'Morty Smith';
    this.specie = specie;

    if (specie === Specie.Human) this.dna = 'R-TGAGC[4]-K';
    if (specie === Specie.Shrimp) this.dna = 'R-AGTGG[10]-K';
    if (specie === Specie.Teddy) this.dna = 'R-GACTG[4]-K';
    if (specie === Specie.Wasp) this.dna = 'R-AGCTG[6]-K';
  }
}

class Morty {
  dna?: string;
  name: string;
  specie: Specie;

  constructor(specie: Specie) {
    this.name = 'Morty Smith';
    this.specie = specie;

    if (specie === Specie.Human) this.dna = 'M-GACTA[4]-Y';
    if (specie === Specie.Shrimp) this.dna = 'M-TGAGA[10]-Y';
    if (specie === Specie.Teddy) this.dna = 'M-AGTGG[4]-Y';
    if (specie === Specie.Wasp) this.dna = 'M-GCTAG[6]-Y';
  }
}

class PhoenixOperation {

  execute(): [Rick, Morty] {
    const specie = this.randomSpecie();
    return [new Rick(specie), new Morty(specie)];
  }

  randomSpecie(): Specie {
    const species = Object.values(Specie);
    const index = Math.floor(Math.random() * species.length);
    return species[index];
  }
}


const phoenixOperation = new PhoenixOperation();