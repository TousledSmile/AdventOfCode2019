import { Computer } from "./computer";

test('compute program sequence', () => {
    const computer = new Computer();

    expect(computer.computeProgram([1,0,0,0,99])).toEqual([2,0,0,0,99]);
    expect(computer.computeProgram([2,3,0,3,99])).toEqual([2,3,0,6,99]);
    expect(computer.computeProgram([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
    expect(computer.computeProgram([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
});

test('restore gravity in program sequence', () => {
    const computer = new Computer();

    expect(computer.restoreNounAndVerb([1,0,0,0,99], 12, 2)).toEqual([1,12,2,0,99]);
    expect(computer.restoreNounAndVerb([2,3,0,3,99], 12, 2)).toEqual([2,12,2,3,99]);
    expect(computer.restoreNounAndVerb([2,4,4,5,99,0], 12, 2)).toEqual([2,12,2,5,99,0]);
    expect(computer.restoreNounAndVerb([1,1,1,4,99,5,6,0,99], 12, 2)).toEqual([1,12,2,4,99,5,6,0,99]);
});
