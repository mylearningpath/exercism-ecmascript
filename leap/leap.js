class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return this.year % 4 === 0;
  }
}

export default Year;
