import { Computer } from "./computer";

export const getComputedSequence = (input: string, noun: number = 12, verb: number = 2) => {
    const sequence = input
        .split(',')
        .map(sequenceNumber => parseInt(sequenceNumber));

    const computer = new Computer();
    const sequenceWithRestoredGravity = computer.restoreNounAndVerb(sequence, noun, verb);
    const computedSequence = computer.computeProgram(sequenceWithRestoredGravity);

    return computedSequence[0];
}

export const getNounAndVerbForOutput = (input: string, output: number) => {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            if(getComputedSequence(input, noun, verb) === output) {
                return 100 * noun + verb;
            }
        }
    }
}
