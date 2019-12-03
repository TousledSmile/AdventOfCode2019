import { Point, Line } from "./line";

export class Wire {
  lines: Line[];

  constructor(path: string) {
    const pathVectors = path.split(',');
    let firstPoint = new Point(0, 0);

    this.lines = pathVectors.map((vector: string) => {
      const line = new Line(firstPoint, vector);
      firstPoint = line.secondEnd;

      return line;
    });
  }

  getNearestIntersectionManhatanDistance = (wire: Wire, center = new Point(0, 0)) => {
    let wireIntersectionDistance = 9999999999999999999;

    wire.lines.forEach((line1) => {
      this.lines.forEach((line2) => {
        const linesIntersectionPoint = line1.getIntersection(line2);

        if (!!linesIntersectionPoint) {
          const distance = center.calculateManhatanDistance(linesIntersectionPoint);
          if (distance !== 0 && distance < wireIntersectionDistance) {
            wireIntersectionDistance = distance;
          }
        }
      })
    });

    return wireIntersectionDistance;
  }
}
