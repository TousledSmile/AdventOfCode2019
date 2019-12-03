

export enum Trend { VERTICAL, HORISONTAL };

export class Point {
  x: number;
  y: number;
  
  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  belongsTo = (line: Line) => {
    switch(line.direction) {
      case 'U':
          return line.secondEnd.y > this.y && this.y > line.firstEnd.y && line.firstEnd.x === this.x;
      case 'D':
          return line.firstEnd.y > this.y && this.y > line.secondEnd.y && line.firstEnd.x === this.x;
      case 'R':
          return line.secondEnd.x > this.x && this.x > line.firstEnd.x && line.firstEnd.y === this.y;
      case 'L':
          return line.firstEnd.x > this.x && this.x > line.secondEnd.x && line.firstEnd.y === this.y;
    }
  }
}

export class Line {
  firstEnd: Point;
  secondEnd: Point;
  direction: string;
  trend: Trend;
  length: number;
  
  constructor (firstEnd: Point, vector: string) {
    this.firstEnd = firstEnd;
    this.direction = vector.charAt(0);
    this.length = parseInt(vector.substr(1));
    this.trend = this.direction === 'U' || this.direction === 'D' ? Trend.VERTICAL : Trend.HORISONTAL;

    this.secondEnd = this.getSecondEnd();
  }

  isIntersecting = (line: Line) => {
    if(line.trend === this.trend) return false;

    const intersectionPoint = this.getIntersectionPoint(line);

    return intersectionPoint.belongsTo(line)
      && intersectionPoint.belongsTo(this);
  }

  getIntersectionPoint = (line: Line) => {
    if(this.trend === Trend.VERTICAL) {
      return new Point(this.firstEnd.x, line.firstEnd.y);
    }

    return new Point(line.secondEnd.x, this.secondEnd.y);
  }

  private getSecondEnd = () => {
    switch(this.direction) {
      case 'U':
          return new Point(this.firstEnd.x, this.firstEnd.y + this.length);
      case 'D':
          return new Point(this.firstEnd.x, this.firstEnd.y - this.length);
      case 'R':
          return new Point(this.firstEnd.x + this.length, this.firstEnd.y);
      case 'L':
          return new Point(this.firstEnd.x - this.length, this.firstEnd.y);
    }
  }
}
