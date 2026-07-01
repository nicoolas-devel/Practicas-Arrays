let peso = Number(prompt("Ingrese su peso en kg"));

let altura = Number(prompt("Ingrese su altura en metros"));

let imc = peso / (altura ** 2);

if (imc < 18.5) {

    alert("Su IMC es " + imc.toFixed(2) + "\nCategoría: Peso bajo");

} else if (imc < 25) {

    alert("Su IMC es " + imc.toFixed(2) + "\nCategoría: Peso normal");

} else {

    alert("Su IMC es " + imc.toFixed(2) + "\nCategoría: Sobrepeso");

}