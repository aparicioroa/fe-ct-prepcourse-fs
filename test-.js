function filtrar(funcion) {
  Array.prototype.filtrar = function (cb) {
    const newArr = [];
    // this será el array que voy a evaluar
    this.forEach((element) => {
      cb(element) ? newArr.push(element) : false;
    });
    return newArr;
  };
}

filtrar();

var productos = [
  {
    price: 100,
    name: "tv",
  },
  {
    price: 50,
    name: "phone",
  },
  {
    price: 30,
    name: "lamp",
  },
];
let test = productos.filtrar(function (productos) {
  return productos.name.length > 2;
});
var object= test;
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.table(element)
        
    }
}
