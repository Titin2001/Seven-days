import java.util.Random;
import java.util.Scanner;

public class adivinar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int numeroAdivinacion = random.nextInt(11); // Número aleatorio entre 0 y 10
        boolean adivinado = false;

        System.out.println("Dime el número que quieres que adivine: ");
        int a = scanner.nextInt();

        for (int i = 0; i < 3; i++) {
            if (a == numeroAdivinacion) {
                System.out.println("¡Felicidades, has adivinado el número!");
                adivinado = true;
                break;
            } else {
                if (i < 2) { // Si no es el último intento
                    System.out.println("No es el número correcto. Intenta de nuevo: ");
                    a = scanner.nextInt(); // Permite al usuario intentar de nuevo
                } else {
                    System.out.println("Lo siento, no has adivinado el número.");
                }
            }
        }
        
        if (!adivinado) {
            System.out.println("El número a adivinar era: " + numeroAdivinacion);
        }

        scanner.close();
    }
}
