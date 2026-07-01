let animales = ["Perro", "Gato", "Caballo", "Conejo", "León"];

// Agregar al inicio
animales.unshift("Elefante");

// Agregar al final
animales.push("Tigre");

// Eliminar el tercer elemento
animales.splice(2, 1);

console.log(animales);

alert("La cantidad total de animales es: " + animales.length);