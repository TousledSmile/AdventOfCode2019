import { Point, Line } from "./line";

export class Wire {
  lines: Line[];

  constructor(path: string) {
    const pathVectors = path.split(',');
    let start = new Point(0, 0);

    this.lines = pathVectors.map((vector: string) => {
      const line = new Line(start, vector);
      start = line.end;

      return line;
    });
  }

  getNearestIntersectionManhatanDistance = (wire: Wire, center = new Point(0, 0)) => {
    let wireIntersectionDistance = 9999999999999999999;

    wire.lines.forEach((line1) => {
      this.lines.forEach((line2) => {
        const intersection = line1.getIntersection(line2);

        if (!!intersection) {
          const distance = center.calculateManhatanDistance(intersection);

          if (distance !== 0 && distance < wireIntersectionDistance) {
            wireIntersectionDistance = distance;
          }
        }
      })
    });

    return wireIntersectionDistance;
  }

  getNearestIntersectionStepDistance = (wire: Wire) => {
    let wireIntersectionDistance = 9999999999999999999;
    let walkedStepsOnWire1 = 0;
    let walkedStepsOnWire2 = 0;

    wire.lines.forEach((line1) => {
      this.lines.forEach((line2) => {
        const intersection = line1.getIntersection(line2);

        if (!!intersection) {
          const stepsOnWire1 = walkedStepsOnWire1 + line1.start.calculateManhatanDistance(intersection);
          const stepsOnWire2 = walkedStepsOnWire2 + line2.start.calculateManhatanDistance(intersection);
          const distance = stepsOnWire1 + stepsOnWire2;

          if (distance !== 0 && distance < wireIntersectionDistance) {
            wireIntersectionDistance = distance;
          }
        }

        walkedStepsOnWire2 += line2.length;
      });

      walkedStepsOnWire1 += line1.length;
      walkedStepsOnWire2 = 0;
    });

    return wireIntersectionDistance;
  }
}
