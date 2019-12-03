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

test('Point can calculate distance between it and another point', () => {
  expect(new Point(0, 0).calculateManhatanDistance(new Point(3, 3))).toEqual(6);
  expect(new Point(0, 0).calculateManhatanDistance(new Point(-3, -3))).toEqual(6);
  expect(new Point(54, 3).calculateManhatanDistance(new Point(50, 0))).toEqual(7);
  expect(new Point(100, 300).calculateManhatanDistance(new Point(150, 150))).toEqual(200);
});

test('Line can check if another line is intersecting with it', () => {
  expect(testLineUp.isIntersecting(testLineToLeft)).toBeTruthy();
  expect(testLineToRight.isIntersecting(testLineDown)).toBeTruthy();
  expect(testLineToRight.isIntersecting(testLineToLeft)).toBeFalsy();
  expect(testLineDown.isIntersecting(testLineUp)).toBeFalsy();
  expect(testLineUp.isIntersecting(testLineToRight)).toBeFalsy();
});

test('Line can check get intersection with another line', () => {
  expect(testLineUp.getIntersection(testLineToLeft).x).toEqual(33);
  expect(testLineUp.getIntersection(testLineToLeft).y).toEqual(3);

  expect(testLineToRight.getIntersection(testLineDown).x).toEqual(5);
  expect(testLineToRight.getIntersection(testLineDown).y).toEqual(0);

  expect(testLineToRight.getIntersection(testLineToLeft)).toBeUndefined();
  expect(testLineDown.getIntersection(testLineUp)).toBeUndefined();
  expect(testLineUp.getIntersection(testLineToRight)).toBeUndefined();
});
