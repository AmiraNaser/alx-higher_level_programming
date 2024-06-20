#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && typeof w === 'number' && h > 0 && typeof h === 'number') {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row = row + 'X';
      }
      console.log(row);
    }
  }
}
module.exports = Rectangle;
