export class Computer {
    computeProgram = (sequence: number[]) => {
        const computedSequence = [...sequence];

        let index = 0;
        let shouldHalt = false;

        while (!shouldHalt) {
            const opcode = computedSequence[index];
            const firstInputParam = computedSequence[index + 1];
            const secondInputParam = computedSequence[index + 2];
            const outputParam = computedSequence[index + 3];
            
            switch(opcode){
                case 1:
                    computedSequence[outputParam] = computedSequence[firstInputParam] + computedSequence[secondInputParam];
                    break;
                case 2:
                    computedSequence[outputParam] = computedSequence[firstInputParam] * computedSequence[secondInputParam];
                    break;
                case 99:
                    shouldHalt = true;
                    break;
            }

            index += 4;
        }

        return computedSequence;
    }

    restoreNounAndVerb = (sequence: number[], noun: number, verb: number) => {
        const sequenceWithRestoredGravity = [...sequence];
    
        sequenceWithRestoredGravity[1] = noun;
        sequenceWithRestoredGravity[2] = verb;

        return sequenceWithRestoredGravity;
    }
}