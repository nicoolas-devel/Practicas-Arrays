let idioma = prompt("Ingrese un idioma");

switch (idioma.toLowerCase()) {

    case "español":
        alert("¡Hola!");
        break;

    case "ingles":
        alert("Hello!");
        break;

    case "frances":
        alert("Bonjour!");
        break;

    case "italiano":
        alert("Ciao!");
        break;

    case "aleman":
        alert("Hallo!");
        break;

    case "portugues":
        alert("Olá!");
        break;

    case "japones":
        alert("こんにちは");
        break;

    default:
        alert("Idioma no disponible");
}