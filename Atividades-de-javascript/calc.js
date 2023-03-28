function calc(a, b, operador) {
    if (operador === '+') {
      return a + b
    }
    else if (operador === '-') {
      return a - b
    }
    else if (operador === '*') {
      return a * b
    }
    else if (operador === '/') {
      return a / b
    }
    else {
      return 'Operação inválida'
    }
  }
  console.log(calc(2,1,'+'))