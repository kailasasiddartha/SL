import java.util.Scanner;

public class FinalKeyword {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            final int x = sc.nextInt();
            System.out.println(x);
        }
        sc.close();
    }
}
