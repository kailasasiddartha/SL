import java.util.Scanner;

public class uncheckedException {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            int size = scanner.nextInt();
            
            int[] arr = new int[size];

            for (int i = 0; i < size; i++) {
                arr[i] = scanner.nextInt();
            }

            int index = scanner.nextInt();

            System.out.println("Element at index " + index + ": " + arr[index]);

        } catch (NegativeArraySizeException e) {
            System.out.println("Array size cannot be negative.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("The specified index does not exist");
        } finally {
            scanner.close();
        }
    }
}
