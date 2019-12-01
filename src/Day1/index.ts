import { Module } from "./module";

export const calculateFuelNeeded = (moduleMasses: number[]) => {
    return moduleMasses
        .map(mass => new Module(mass))
        .reduce((acc: number, module: Module) => acc + module.calculateFuelNeeded(), 0);
};

export const calculateFuelNeededFromInput = (input: string) => {
    const moduleMasses = input
        .split('\n')
        .map(input => parseFloat(input));

    return calculateFuelNeeded(moduleMasses);
};

export const calculateAllFuelNeeded = (moduleMasses: number[]) => {
    return moduleMasses
        .map(mass => new Module(mass))
        .reduce((acc: number, module: Module) => acc + module.calculateAllFuelNeeded(), 0);
};

export const calculateAllFuelNeededFromInput = (input: string) => {
    const moduleMasses = input
        .split('\n')
        .map(input => parseFloat(input));

    return calculateAllFuelNeeded(moduleMasses);
};
