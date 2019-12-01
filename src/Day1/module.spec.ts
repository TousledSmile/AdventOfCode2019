import { Module } from './module';

test('count fuel needed for module', () => {
    expect(new Module(12).calculateFuelNeeded()).toBe(2);
    expect(new Module(14).calculateFuelNeeded()).toBe(2);
    expect(new Module(1969).calculateFuelNeeded()).toBe(654);
    expect(new Module(100756).calculateFuelNeeded()).toBe(33583);
});

test('count fuel needed for module and fuel', () => {
    expect(new Module(14).calculateAllFuelNeeded()).toBe(2);
    expect(new Module(1969).calculateAllFuelNeeded()).toBe(966);
    expect(new Module(100756).calculateAllFuelNeeded()).toBe(50346);
});
