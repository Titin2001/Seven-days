let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

let agregarMas = "sí";

while (agregarMas !== "no") {
    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");

    if (agregarMas === "sí") {
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");

        if (categoria === "frutas") {
            frutas.push(comida);
        } else if (categoria === "lacteos") {
            lacteos.push(comida);
        } else if (categoria === "dulces") {
            dulces.push(comida);
        } else if (categoria === "congelados") {
            congelados.push(comida);
        } else {
            alert("Esa categoría no está predefinida.");
        }
    } else if (agregarMas !== "no") {
        alert("¡Operación no reconocida! Responde 'sí' o 'no'.");
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);
