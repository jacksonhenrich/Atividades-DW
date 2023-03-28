function triangle_checker(a, b, c) {
    if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
      return 'escaleno'
    }
    else if ((a === b) && (a === c)) {
      return 'equilatero'
    }
    else if (a === b) {
      return 'isosceles'
    }
    else if (a === c) {
      return 'isosceles'
    }
    else if (b === c) {
      return 'isosceles'
    }
  }
  console.log(triangle_checker(4, 4, 3))