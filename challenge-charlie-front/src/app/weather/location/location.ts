export class Location {

  constructor(
    public city?: string,
    public region?: string
  ) { }

  toString() {
    return `${this.city}, ${this.region}`;
  }

}