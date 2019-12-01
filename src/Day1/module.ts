export class Module {
    mass: number;

    constructor(mass: number) {
        this.mass = mass;
    }

    calculateFuelNeeded = () => calculateFuelNeededForMass(this.mass);

    calculateAllFuelNeeded = () => {
        const fuelNeededForModule = this.calculateFuelNeeded();

        return fuelNeededForModule + this.calculateFuelNeededForFuel(fuelNeededForModule)
    };

    calculateFuelNeededForFuel = (fuel: number) => {
        const fuelNeededForFuel = calculateFuelNeededForMass(fuel);

        if(fuelNeededForFuel > 0) {
            return fuelNeededForFuel + this.calculateFuelNeededForFuel(fuelNeededForFuel);
        }

        return 0;
    };
}

const calculateFuelNeededForMass = (mass:number) => Math.floor(mass / 3) - 2;
