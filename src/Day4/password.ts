export class Password {
  passwordString: string;
  passwordNumber: number;

  constructor(password: number) {
    this.passwordString = password.toString();
    this.passwordNumber = password;
  }

  machCriteria = () => {
    return this.machDigitsNumberCriteria(6)
      && this.machSameAdjacentDigitsCriteria()
      && this.machNonDecrisingDigitsCriteria();
  }

  machForgottenCriteria = () => {
    return this.machDigitsNumberCriteria(6)
      && this.mach2SameAdjacentDigitsCriteria()
      && this.machNonDecrisingDigitsCriteria();
  }

  machDigitsNumberCriteria = (digitsNumber: number) => {
    return this.passwordString
      .split('').length === digitsNumber;
  }

  machSameAdjacentDigitsCriteria = () => {
    return this.passwordString
      .split('')
      .some((digit, index, digits) => digit === digits[index + 1]);
  }

  mach2SameAdjacentDigitsCriteria = () => {

    return this.passwordString
      .split('')
      .some((digit, index, digits) => digit === digits[index + 1]
        && (digits[index + 2] === undefined || digit !== digits[index + 2])
        && (digits[index - 1] === undefined || digit !== digits[index - 1]));
  }

  machNonDecrisingDigitsCriteria = () => {
    return !this.passwordString
      .split('')
      .some((digit, index, digits) => digit > digits[index + 1]);
  }
}

export const createPasswordsFromRange = (start: number, end: number) =>
  [...Array(end - start + 1)
    ].map((_value, index: number) => new Password(index + start));


export const countMachingPasswords = (start: number, end: number) =>
  [...Array(end - start + 1)]
    .map((_value, index: number) => new Password(index + start))
    .filter(password => password.machCriteria())
    .length;


export const countForgottenCriteriaMachingPasswords = (start: number, end: number) =>
  [...Array(end - start + 1)]
    .map((_value, index: number) => new Password(index + start))
    .filter(password => password.machForgottenCriteria())
    .length;

