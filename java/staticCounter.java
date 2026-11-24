import java.util.Scanner;

class A {
    static int count;

    A() {
        count++;
    }
}

public class staticCounter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            A.count = sc.nextInt();

            A c1 = new A();
            System.out.println("c1 count=" + A.count);

            A c2 = new A();
            System.out.println("c2 count=" + A.count);

            A c3 = new A();
            System.out.println("c3 count=" + A.count);

            A c4 = new A();
            System.out.println("c4 count=" + A.count);
        }
        sc.close();
    }
}
