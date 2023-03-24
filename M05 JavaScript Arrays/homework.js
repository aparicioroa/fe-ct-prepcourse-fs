/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  var PrimerElemento = array[0];
  return PrimerElemento;
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  var UltimoElemento = array[array.length - 1];
  return UltimoElemento;
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  var ArregloIngrementado = array.map((array) => {
    return array + 1;
  });
  return ArregloIngrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  var Frase = palabras.join(" ");
  return Frase;
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:

  return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  let SumaArray = 0;
  arrayOfNums.forEach((element) => {
    SumaArray += element;
  });
  return SumaArray;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  let SumaResultados = 0;
  let CantNotas = resultadosTest.length;
  resultadosTest.forEach((element) => {
    SumaResultados += element;
  });
  let PromNotas = SumaResultados / CantNotas;
  return PromNotas;
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  let Mayor = 0;
  arrayOfNums.forEach((element) => {
    if (element > Mayor) {
      Mayor = element;
    }
  });
  return Mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  var i = 0;
  var Multiplicacion = 1;
  var CatnArray = arguments.length;
  if (CatnArray > 0 && CatnArray > 1) {
    for (let j = 0; j < CatnArray; j++) {
      Multiplicacion = Multiplicacion * arguments[j];
    }
    return Multiplicacion;
  } else if (CatnArray === 1) {
    return arguments[0];
  } else {
    return 0;
  }
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  let cont = 0;
  array.forEach((element) => {
    if (element > 18) {
      cont++;
    }
  });
  return cont;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia >= 1 && numeroDeDia <= 7) {
    if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
    } else return "Es dia laboral";
  }
}

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  if (Number.isInteger(num)) {
    if (num.toString().charAt(0) == 9) return true;
    else return false;
  } else return false;
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  var igual;
  var i = 0;
  var retorno = false;
  array.forEach((element) => {
    if (i === 0) igual = element;
    else if (i > 0) {
      if (element === igual) {
        retorno = true;
        igual = element;
      } else retorno = false;
    }
    i++;
  });
  return retorno;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var meses = [];
  array.forEach((element) => {
    if (element === "Enero" || element === "Noviembre" || element === "Marzo") {
      meses.push(element);
    }
  });
  if (meses.length === 3) {
    return meses;
  } else if (meses.length < 3) {
    return "No se encontraron los meses pedidos";
  }
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  let multip = 0;
  var tabsix = [];
  do {
    var result = 6 * multip;
    tabsix.push(result);
    multip++;
  } while (multip <= 10);
  return tabsix;
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  var resp = [];
  array.forEach((element) => {
    if (Number.isInteger(element) && element >= 0 && element <= 200) {
      if (element > 100) {
        resp.push(element);
      }
    }
  });
  return resp;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  var AumentEnDos = [];
  var i;
  for (i = 0; i < 10; i++) {
    num = num + 2;
    if (num === i) break;
    else AumentEnDos.push(num);
  }

  if (i < 10) {
    return "Se interrumpió la ejecución";
  } else return AumentEnDos;
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
  var AumentEnDos = [];
  var i;
  for (i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    num = num + 2;
    AumentEnDos.push(num);
  }
  return AumentEnDos;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
