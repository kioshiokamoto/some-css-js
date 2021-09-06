// -------------------------

// var number = 10;

// const display = () => {
//     console.log(number);
//     var number = 20;
//     //Debido a que var se encuentra en el scope retornara undefined
// };

// display();

// -------------------------

// function display() {
//     //Javascript asigna de derecha a izq
//     var a = b = 10;
// }

// display();

// console.log("b", typeof b === "undefined");
// console.log("a", typeof a === "undefined");

// -------------------------

//Contador de nombres
// const nombres = [
//     'Jose','Kioshi','Maria','Shizuka',
//     'Jose','Kioshi','Maria','Shizuka',
//     'Yuriko','Kioshi','Harumi','Harumi'
// ]

// const cantidadNombres = nombres.reduce((contador,nombre)=>{
//     contador[nombre] = (contador[nombre] || 0) +1
//     return contador
// },{})
// console.log(cantidadNombres)

// -------------------------
// Ejecutar multiples funciones con reduce

// const sumar = (num) => num + 1;
// const duplicar = (num) => num * 2;
// const triplicar = (num) => num * 3;

// const _pipe =
//     (f, g) =>
//     (...props) =>
//         g(f(...props));

// // const prueba = _pipe(sumar,duplicar);

// const pipe = (...functions) => functions.reduce(_pipe);

// const mixtas = pipe(sumar,duplicar,triplicar)

// console.log(mixtas(2))

// -------------------------

// console.log([] + []);
// console.log([] + {}); //Object
// console.log({} + []); // Object
// console.log({} + {}); // Object Object
// console.log(Array.from(Array(10).keys()));

// -------------------------

// let arreglo =Array.from(Array(10).keys());
// console.log(arreglo[arreglo.length-1])

// -------------------------
// function busquedaBinaria(arr, busqueda) {
//     const puntoMedio = Math.floor(arr.length / 2);

//     if (arr[puntoMedio] === busqueda) {
//         return arr[puntoMedio];
//     }

//     if (arr[puntoMedio] < busqueda && arr.length > 1) {
//         return busquedaBinaria(arr.slice(puntoMedio), busqueda);
//     }

//     if (arr[puntoMedio] > busqueda && arr.length > 1) {
//         return busquedaBinaria(arr.slice(0, puntoMedio), busqueda);
//     }

//     return "no encontrado :(";
// }

let arr = [1,2,4,6,7,8,9,10]
console.log(arr.slice(3))
console.log(arr.slice(3,5))
