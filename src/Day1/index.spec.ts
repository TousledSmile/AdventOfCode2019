import { calculateFuelNeededFromInput, calculateFuelNeeded, calculateAllFuelNeededFromInput } from ".";
import { inputString } from "./input";

test('calculate fuel needed', () => {
    expect(calculateFuelNeeded([12])).toBe(2);
    expect(calculateFuelNeeded([12, 14, 1969])).toBe(658);
});

test('calculate fuel needed for input module masses', () => {
    console.log(`Day 1 Part 1: ${calculateFuelNeededFromInput(inputString)}`);
});

test('calculate fuel needed for input module masses', () => {
    console.log(`Day 1 Part 2: ${calculateAllFuelNeededFromInput(inputString)}`);
});
