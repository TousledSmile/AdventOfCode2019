import { getComputedSequence, getNounAndVerbForOutput } from ".";
import { input } from "./input";

test('should compute sequence from input', () => {
    console.log(`Day 2 Part 1: ${getComputedSequence(input)}`);
});

test('should get noun and verb for input and output', () => {
    expect(getNounAndVerbForOutput(input, 7210630)).toEqual(1202);
});

test('should get noun and verb for input and output', () => {
    console.log(`Day 2 Part 2: ${getNounAndVerbForOutput(input, 19690720)}`);
});
