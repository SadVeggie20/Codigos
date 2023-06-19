function determinarTipoTriangulo(a, b, c) {
    if (a === b && b === c) {
      return "Equilátero";
    } else if (a === b || b === c || a === c) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

  const lado1 = 2;
  const lado2 = 3;
  const lado3 = 4;
  const tipoTriangulo = determinarTipoTriangulo(lado1, lado2, lado3);
  
  console.log("El triángulo es:", tipoTriangulo);