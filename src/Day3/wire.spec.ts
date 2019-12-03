import { Wire } from "./wire";
import { inputWire1, inputWire2 } from "./input";

test('Wire should get intersection distance with another wire', () => {
  const wire1 = new Wire("R75,D30,R83,U83,L12,D49,R71,U7,L72");
  const wire2 = new Wire("U62,R66,U55,R34,D71,R55,D58,R83");

  const wire3 = new Wire("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51");
  const wire4 = new Wire("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7");

  expect(wire1.getNearestIntersectionManhatanDistance(wire2)).toEqual(159);
  expect(wire3.getNearestIntersectionManhatanDistance(wire4)).toEqual(135);
});

test('Get intersection distance of input wires', () => {
  const wire1 = new Wire(inputWire1);
  const wire2 = new Wire(inputWire2);

  console.log(`Day 3 Part 1: ${wire1.getNearestIntersectionManhatanDistance(wire2)}`);
});