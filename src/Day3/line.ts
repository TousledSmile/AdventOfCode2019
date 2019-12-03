import { Wire } from "./wire";


export enum Trend { VERTICAL, HORISONTAL };

export class Point {
  x: number;
  y: number;
  
  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  calculateManhattanDistance = (point: Point) => {
    return Math.abs(point.x - this.x) + Math.abs(point.y - this.y);
  }
  
  belongsTo = (line: Line) => {
    switch(line.direction) {
      case 'U':
          return line.end.y > this.y && this.y > line.start.y && line.start.x === this.x;
      case 'D':
          return line.start.y > this.y && this.y > line.end.y && line.start.x === this.x;
      case 'R':
          return line.end.x > this.x && this.x > line.start.x && line.start.y === this.y;
      case 'L':
          return line.start.x > this.x && this.x > line.end.x && line.start.y === this.y;
    }
  }
}

export class Line {
  start: Point;
  end: Point;
  direction: string;
  orientation: Trend;
  length: number;
  
  constructor (firstEnd: Point, vector: string) {
    this.start = firstEnd;
    this.direction = vector.charAt(0);
    this.length = parseInt(vector.substr(1));
    this.orientation = this.direction === 'U' || this.direction === 'D' ? Trend.VERTICAL : Trend.HORISONTAL;

    this.end = this.getEnd();
  }

  isIntersecting = (line: Line) => {
    if(line.orientation === this.orientation) return false;

    const intersectionPoint = this.getPotentialIntersectionPoint(line);

    return intersectionPoint.belongsTo(line)
      && intersectionPoint.belongsTo(this);
  }

  getIntersection = (line: Line) => {
    if(line.orientation === this.orientation) return;

    const intersectionPoint = this.getPotentialIntersectionPoint(line);

    if(intersectionPoint.belongsTo(line) && intersectionPoint.belongsTo(this)) {
        return intersectionPoint;
    };
  }

  private getPotentialIntersectionPoint = (line: Line) => {
    if(this.orientation === Trend.VERTICAL) {
      return new Point(this.start.x, line.start.y);
    }

    return new Point(line.end.x, this.end.y);
  }

  private getEnd = () => {
    switch(this.direction) {
      case 'U':
          return new Point(this.start.x, this.start.y + this.length);
      case 'D':
          return new Point(this.start.x, this.start.y - this.length);
      case 'R':
          return new Point(this.start.x + this.length, this.start.y);
      case 'L':
          return new Point(this.start.x - this.length, this.start.y);
    }
  }
}
