console.log('Hola Mundo!');
import Auto from "./Auto.js";
// Datos del Auto: (marca, modelo, color, kilometraje)
let auto1 = new Auto("Ford", 2000, "rojo", 100);
let auto2 = new Auto("Nissan", 2019, "azul");
let auto3 = new Auto("Range Rover", 2018);

console.log(`Color ${auto1.color}`);//Lectura
console.log(`Color ${auto2.color}`);//Lectura
auto1.color = "Amarillo";//Escritura
auto3.color = "Negro";//Escritura

auto1.mostrarEstado();
auto2.mostrarEstado();
auto3.mostrarEstado();

auto1.encender();
auto1.avanzar(50, 2);
auto1.apagar();
auto1.avanzar(20, 1);