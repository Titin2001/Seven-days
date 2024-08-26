const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAdivinacion = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
let adivinado = false;

rl.question("Dime el número que quieres que adivine: ", function(a) {
    a = parseInt(a);

    for (let i = 0; i < 3; i++) {
        if (a === numeroAdivinacion) {
            console.log("¡Felicidades, has adivinado el número!");
            adivinado = true;
            break;
        } else {
            if (i < 2) { // Si no es el último intento
                rl.question("No es el número correcto. Intenta de nuevo: ", function(a) {
                    a = parseInt(a);
                    if (a === numeroAdivinacion) {
                        console.log("¡Felicidades, has adivinado el número!");
                        adivinado = true;
                        rl.close();
                    }
                });
            } else {
                console.log("Lo siento, no has adivinado el número.");
            }
        }
    }

    if (!adivinado) {
        console.log("El número a adivinar era: " + numeroAdivinacion);
    }
    rl.close();
});

