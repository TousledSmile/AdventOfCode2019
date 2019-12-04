import { Password, createPasswordsFromRange, countMachingPasswords, countForgottenCriteriaMachingPasswords } from "./password";

test('Create passwords from range', () => {
  expect(createPasswordsFromRange(1, 20).length).toEqual(20);
  expect(createPasswordsFromRange(1, 5)[3].passwordNumber).toEqual(4);
  expect(createPasswordsFromRange(1, 5)[6]).toBeUndefined();
  expect(createPasswordsFromRange(1, 5).length).toEqual(5);
  expect(createPasswordsFromRange(5, 6)[0].passwordNumber).toEqual(5);
  expect(createPasswordsFromRange(88, 94)[6].passwordNumber).toEqual(94);
});

test('Password can check if it\'s maching digits number criteria', () => {
  expect(new Password(78).machDigitsNumberCriteria(6)).toBeFalsy();
  expect(new Password(56774).machDigitsNumberCriteria(6)).toBeFalsy();
  expect(new Password(785433).machDigitsNumberCriteria(6)).toBeTruthy();
  expect(new Password(4738112914).machDigitsNumberCriteria(6)).toBeFalsy();
});

test('Password can check if it\'s maching same adjacent digits criteria', () => {
  expect(new Password(78).machSameAdjacentDigitsCriteria()).toBeFalsy();
  expect(new Password(56474).machSameAdjacentDigitsCriteria()).toBeFalsy();
  expect(new Password(785433).machSameAdjacentDigitsCriteria()).toBeTruthy();
  expect(new Password(4738112914).machSameAdjacentDigitsCriteria()).toBeTruthy();
  expect(new Password(11).machSameAdjacentDigitsCriteria()).toBeTruthy();
  expect(new Password(2828282828282828).machSameAdjacentDigitsCriteria()).toBeFalsy();
});

test('Password can check if it\'s maching 2 same adjacent digits criteria', () => {
  expect(new Password(78).mach2SameAdjacentDigitsCriteria()).toBeFalsy();
  expect(new Password(56474).mach2SameAdjacentDigitsCriteria()).toBeFalsy();
  expect(new Password(785433).mach2SameAdjacentDigitsCriteria()).toBeTruthy();
  expect(new Password(4738112914).mach2SameAdjacentDigitsCriteria()).toBeTruthy();
  expect(new Password(11111111111).mach2SameAdjacentDigitsCriteria()).toBeFalsy();
  expect(new Password(11111111122).mach2SameAdjacentDigitsCriteria()).toBeTruthy();
  expect(new Password(11).mach2SameAdjacentDigitsCriteria()).toBeTruthy();
  expect(new Password(2828282828282828).mach2SameAdjacentDigitsCriteria()).toBeFalsy();
});

test('Password can check if it\'s digits aren\'t decresing', () => {
  expect(new Password(78).machNonDecrisingDigitsCriteria()).toBeTruthy();
  expect(new Password(11111111111).machNonDecrisingDigitsCriteria()).toBeTruthy();
  expect(new Password(22).machNonDecrisingDigitsCriteria()).toBeTruthy();
  expect(new Password(1346789).machNonDecrisingDigitsCriteria()).toBeTruthy();
  expect(new Password(56474).machNonDecrisingDigitsCriteria()).toBeFalsy();
  expect(new Password(785433).machNonDecrisingDigitsCriteria()).toBeFalsy();
  expect(new Password(4738112914).machNonDecrisingDigitsCriteria()).toBeFalsy();
  expect(new Password(2828282828282828).machNonDecrisingDigitsCriteria()).toBeFalsy();
});

test('Password can check if it\'s maching all criteria', () => {
  expect(new Password(78).machCriteria()).toBeFalsy();
  expect(new Password(111111).machCriteria()).toBeTruthy();
  expect(new Password(223450).machCriteria()).toBeFalsy();
  expect(new Password(123789).machCriteria()).toBeFalsy();
});

test('Password can check if it\'s maching all criteria with forgotten one', () => {
  expect(new Password(78).machForgottenCriteria()).toBeFalsy();
  expect(new Password(112233).machForgottenCriteria()).toBeTruthy();
  expect(new Password(123444).machForgottenCriteria()).toBeFalsy();
  expect(new Password(111122).machForgottenCriteria()).toBeTruthy();
});

test('count number Of Maching Passwords In Range', () => {
  expect(countMachingPasswords(1, 20)).toEqual(0);
  expect(countMachingPasswords(1, 5)).toEqual(0);
  expect(countMachingPasswords(888888, 888889)).toEqual(2);
  expect(countMachingPasswords(99999, 100000)).toEqual(0);

  console.log(`Day 4 Part 1: ${countMachingPasswords(265275, 781584)}`);
});

test('count number Of Maching Passwords In Range with forgotten criteria', () => {
  expect(countForgottenCriteriaMachingPasswords(1, 5)).toEqual(0);
  expect(countForgottenCriteriaMachingPasswords(888888, 888889)).toEqual(0);
  expect(countForgottenCriteriaMachingPasswords(99999, 100000)).toEqual(0);

  console.log(`Day 4 Part 2: ${countForgottenCriteriaMachingPasswords(265275, 781584)}`);
});
