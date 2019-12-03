import { Point, Line } from "./line";

const testLineToRight = new Line(new Point(0, 0), 'R30');
const testLineToLeft = new Line(new Point(400, 3), 'L455');
const testLineUp = new Line(new Point(33, 1), 'U65');
const testLineDown = new Line(new Point(5, 5), 'D6');

test('Point can check if it belongs to line', () => {
  expect(new Point(14, 0).belongsTo(testLineToRight)).toBeTruthy();
  expect(new Point(12, 4).belongsTo(testLineToRight)).toBeFalsy();
  expect(new Point(0, 3).belongsTo(testLineToLeft)).toBeTruthy();
  expect(new Point(12, 4).belongsTo(testLineToLeft)).toBeFalsy();
  expect(new Point(33, 45).belongsTo(testLineUp)).toBeTruthy();
  expect(new Point(12, 4).belongsTo(testLineUp)).toBeFalsy();
  expect(new Point(5, 1).belongsTo(testLineDown)).toBeTruthy();
  expect(new Point(12, 4).belongsTo(testLineDown)).toBeFalsy();
});

test('Line can check if another line is intersecting with it', () => {
  expect(testLineUp.isIntersecting(testLineToLeft)).toBeTruthy();
  expect(testLineToRight.isIntersecting(testLineDown)).toBeTruthy();
  expect(testLineToRight.isIntersecting(testLineToLeft)).toBeFalsy();
  expect(testLineDown.isIntersecting(testLineUp)).toBeFalsy();
  expect(testLineUp.isIntersecting(testLineToRight)).toBeFalsy();
});
