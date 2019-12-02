import { Computer } from "./computer";

export const getComputedSequence = (input: string) => {
    const sequence = input
        .split(',')
        .map(sequenceNumber => parseInt(sequenceNumber));

    const computer = new Computer();
    const sequenceWithRestoredGravity = computer.restoreGravity(sequence);
    const computedSequence = computer.computeProgram(sequenceWithRestoredGravity);

    return computedSequence[0];
}