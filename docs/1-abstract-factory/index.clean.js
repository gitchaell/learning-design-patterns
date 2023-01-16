"use strict";
class Rick {
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
class Morty {
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
class CloneFactory {
    cloneRick() {
        throw new Error('This method must be implemented');
    }
    cloneMorty() {
        throw new Error('This method must be implemented');
    }
}
class HumanCloneFactory extends CloneFactory {
    cloneRick() {
        return new HumanRick();
    }
    cloneMorty() {
        return new HumanMorty();
    }
}
class ShrimpCloneFactory extends CloneFactory {
    cloneRick() {
        return new ShrimpRick();
    }
    cloneMorty() {
        return new ShrimpMorty();
    }
}
class TeddyCloneFactory extends CloneFactory {
    cloneRick() {
        return new TeddyRick();
    }
    cloneMorty() {
        return new TeddyMorty();
    }
}
class WaspCloneFactory extends CloneFactory {
    cloneRick() {
        return new WaspRick();
    }
    cloneMorty() {
        return new WaspMorty();
    }
}
var Universe;
(function (Universe) {
    Universe["Human"] = "human";
    Universe["Shrimp"] = "shrimp";
    Universe["Teddy"] = "teddy";
    Universe["Wasp"] = "wasp";
})(Universe || (Universe = {}));
class PhoenixOperation {
    cloners = {
        [Universe.Human]: new HumanCloneFactory(),
        [Universe.Shrimp]: new ShrimpCloneFactory(),
        [Universe.Teddy]: new TeddyCloneFactory(),
        [Universe.Wasp]: new WaspCloneFactory(),
    };
    execute() {
        const universe = this.randomUniverse();
        return [
            this.cloners[universe].cloneRick(),
            this.cloners[universe].cloneMorty(),
        ];
    }
    randomUniverse() {
        const universes = Object.values(Universe);
        const index = Math.floor(Math.random() * universes.length);
        return universes[index];
    }
}
const phoenixOperation = new PhoenixOperation();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2xlYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvMS1hYnN0cmFjdC1mYWN0b3J5L2luZGV4LmNsZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFlLElBQUk7SUFDakIsZ0JBQWdCLENBQUM7Q0FDbEI7QUFFRCxNQUFNLFNBQVUsU0FBUSxJQUFJO0lBQzFCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFVBQVcsU0FBUSxJQUFJO0lBQzNCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFNBQVUsU0FBUSxJQUFJO0lBQzFCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFFBQVMsU0FBUSxJQUFJO0lBQ3pCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFlLEtBQUs7SUFDbEIsZ0JBQWdCLENBQUM7Q0FDbEI7QUFFRCxNQUFNLFVBQVcsU0FBUSxLQUFLO0lBQzVCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFdBQVksU0FBUSxLQUFLO0lBQzdCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFVBQVcsU0FBUSxLQUFLO0lBQzVCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFNBQVUsU0FBUSxLQUFLO0lBQzNCO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0NBQ0Y7QUFFRCxNQUFlLFlBQVk7SUFDekIsU0FBUztRQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsVUFBVTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLGlCQUFrQixTQUFRLFlBQVk7SUFDMUMsU0FBUztRQUNQLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLGtCQUFtQixTQUFRLFlBQVk7SUFDM0MsU0FBUztRQUNQLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLGlCQUFrQixTQUFRLFlBQVk7SUFDMUMsU0FBUztRQUNQLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLGdCQUFpQixTQUFRLFlBQVk7SUFDekMsU0FBUztRQUNQLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFFRCxJQUFLLFFBS0o7QUFMRCxXQUFLLFFBQVE7SUFDWCwyQkFBZSxDQUFBO0lBQ2YsNkJBQWlCLENBQUE7SUFDakIsMkJBQWUsQ0FBQTtJQUNmLHlCQUFhLENBQUE7QUFDZixDQUFDLEVBTEksUUFBUSxLQUFSLFFBQVEsUUFLWjtBQUVELE1BQU0sZ0JBQWdCO0lBQ1osT0FBTyxHQUFpQztRQUM5QyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGlCQUFpQixFQUFFO1FBQ3pDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksa0JBQWtCLEVBQUU7UUFDM0MsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxpQkFBaUIsRUFBRTtRQUN6QyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLGdCQUFnQixFQUFFO0tBQ3hDLENBQUM7SUFFRixPQUFPO1FBQ0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZDLE9BQU87WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRTtTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVPLGNBQWM7UUFDcEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQU1GO0FBR0QsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUMifQ==