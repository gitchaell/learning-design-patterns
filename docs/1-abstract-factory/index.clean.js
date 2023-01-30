"use strict";
var Specie;
(function (Specie) {
    Specie["Human"] = "human";
    Specie["Shrimp"] = "shrimp";
    Specie["Pickle"] = "pickle";
})(Specie || (Specie = {}));
class Rick {
    name;
    specie;
    constructor(specie) {
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
        return { head: {}, body: {}, };
    }
}
class ShrimpRick extends Rick {
    constructor() {
        super(Specie.Shrimp);
    }
    getAspect() {
        return { head: {}, body: {}, };
    }
}
class PickleRick extends Rick {
    constructor() {
        super(Specie.Pickle);
    }
    getAspect() {
        return { head: {}, body: {}, };
    }
}
class Morty {
    name;
    specie;
    constructor(specie) {
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
class Jerry {
    name;
    specie;
    constructor(specie) {
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
class CloneFactory {
    createRick() {
        throw new Error('This method must be implemented');
    }
    createMorty() {
        throw new Error('This method must be implemented');
    }
    createJerry() {
        throw new Error('This method must be implemented');
    }
}
class HumanCloneFactory extends CloneFactory {
    createRick() {
        return new HumanRick();
    }
    createMorty() {
        return new HumanMorty();
    }
    createJerry() {
        return new HumanJerry();
    }
}
class ShrimpCloneFactory extends CloneFactory {
    createRick() {
        return new ShrimpRick();
    }
    createMorty() {
        return new ShrimpMorty();
    }
    createJerry() {
        return new ShrimpJerry();
    }
}
class PickleCloneFactory extends CloneFactory {
    createRick() {
        return new PickleRick();
    }
    createMorty() {
        return new PickleMorty();
    }
    createJerry() {
        return new PickleJerry();
    }
}
class Cloner {
    factories = {
        [Specie.Human]: new HumanCloneFactory(),
        [Specie.Shrimp]: new ShrimpCloneFactory(),
        [Specie.Pickle]: new PickleCloneFactory(),
    };
    execute() {
        const specie = this.getSpecie();
        return [
            this.factories[specie].createRick(),
            this.factories[specie].createMorty(),
            this.factories[specie].createJerry(),
        ];
    }
    getSpecie() {
        const species = Object.values(Specie);
        const index = Math.floor(Math.random() * species.length);
        return species[index];
    }
}
const cloner = new Cloner();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvMS1hYnN0cmFjdC1mYWN0b3J5L2luZGV4LmNsZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCx5QkFBZSxDQUFBO0lBQ2YsMkJBQWlCLENBQUE7SUFDakIsMkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpJLE1BQU0sS0FBTixNQUFNLFFBSVY7QUFFRCxNQUFlLElBQUk7SUFDakIsSUFBSSxDQUFTO0lBQ2IsTUFBTSxDQUFTO0lBRWYsWUFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQUVELE1BQU0sU0FBVSxTQUFRLElBQUk7SUFDMUI7UUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFBO0lBQ2hDLENBQUM7Q0FDRjtBQUVELE1BQU0sVUFBVyxTQUFRLElBQUk7SUFDM0I7UUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFBO0lBQ2hDLENBQUM7Q0FDRjtBQUVELE1BQU0sVUFBVyxTQUFRLElBQUk7SUFDM0I7UUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FB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