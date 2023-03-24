/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arraypadre = [];
  var arrayhijo = [];
  var i = 0;
  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      const element = objeto[key];
      arrayhijo[i] = [key, element];
      arraypadre.push(arrayhijo[i]);
      i++;
    }
  }
  return arraypadre;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const arregloOrdena = string.split("");
  arregloOrdena.sort();
  var ObjResp = {};

  const cadenaOrdenada = arregloOrdena.join("");
  for (let i = 0; i < cadenaOrdenada.length; i++) {
    var expreg = new RegExp(cadenaOrdenada[i], "gi");

    ObjResp[cadenaOrdenada[i]] = cadenaOrdenada.match(expreg).length;
  }
  return ObjResp;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var mayus = "";
  var minus = "";
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (string[i] === string[i].toUpperCase()) {
      mayus += string[i];
    } else {
      minus += string[i];
    }
  }
  return mayus + minus;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var arrayFrase = frase.split(" ");
  var arrayFraseInver = [];
  var fraseInverR = "";
  arrayFrase.forEach((element) => {
    var fraseInver = "";
    for (let i = element.length - 1; i >= 0; i--) {
      fraseInver += element[i];
    }
    arrayFraseInver.push(fraseInver);
  });
  fraseInverR = arrayFraseInver.join(" ");
  return fraseInverR;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  };
  if (numero.toString() == numero.toString().reverse()) {
    return "Es capicua";
  } else return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  return string.replace(/[a-c]/gi,'');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort((a, b) => {
   if (a.length == b.length) {
     return 0;
   }
   if (a.length < b.length) {
     return -1;
   }
   return 1;
 });
 return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
var newArray = [];
  for (let i = 0; i < array1.length; i++) {
   const element1 = array1[i];
   for (let j = 0; j < array2.length; j++) {
      const element2 = array2[j];
      if(array1[i] == array2[j])
      {
         newArray.push(array1[i]);
      }
     }
   
  }
  return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
