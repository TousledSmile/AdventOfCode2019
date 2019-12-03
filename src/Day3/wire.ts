import { Point, Line } from "./line";

export class Wire {
  lines: Line[];

  constructor(path: string[]) {
    let firstPoint = new Point(0, 0);

    this.lines = path.map((vector: string) => {
      const line = new Line(firstPoint, vector);
      firstPoint = line.secondEnd;

      return line;
    });
  }

  isIntersecting = (wire: Wire) => {
    // TODO
  }
}
