let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

let agregarMas = "sí";

while (agregarMas !== "no") {
    agregarMas = prompt("¿Deseas añadir o eliminar un alimento de la lista de compras? Responde 'añadir', 'eliminar', o 'no' para salir.");

    if (agregarMas === "añadir") {
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
    } else if (agregarMas === "eliminar") {
        if (frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0) {
            alert("No hay elementos en la lista para eliminar.");
        } else {
            let listaCompleta = `Frutas: ${frutas}\nLácteos: ${lacteos}\nDulces: ${dulces}\nCongelados: ${congelados}`;
            alert(`Lista de compras actual:\n${listaCompleta}`);
            let eliminarComida = prompt("Escribe el nombre del alimento que deseas eliminar:");

            const eliminarElemento = (array, item) => {
                const index = array.indexOf(item);
                if (index > -1) {
                    array.splice(index, 1);
                    return true;
                }
                return false;
            };

            let eliminado = eliminarElemento(frutas, eliminarComida) || 
                            eliminarElemento(lacteos, eliminarComida) || 
                            eliminarElemento(dulces, eliminarComida) || 
                            eliminarElemento(congelados, eliminarComida);

            if (eliminado) {
                alert(`El elemento '${eliminarComida}' ha sido eliminado.`);
            } else {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        }
    } else if (agregarMas !== "no") {
        alert("¡Operación no reconocida! Responde 'añadir', 'eliminar', o 'no' para salir.");
    }
}

alert(`Lista de compras final:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);
