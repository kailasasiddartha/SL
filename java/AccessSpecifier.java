import java.util.Scanner;

class A {
    private int a;
    public int b;
    protected int c;
    int d;

    public void setA(int a) {
        this.a = a;
    }

    public void print() {
        System.out.println(a + " " + b + " " + c + " " + d);
    }
}

class B {
    A objA = new A();

    public void setAndDisplay(int a, int b, int c, int d) {
        objA.setA(a);
        
        objA.b = b;
        objA.c = c;
        objA.d = d;

        objA.print();
    }
}

public class AccessSpecifier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();
        int d = scanner.nextInt();

        B objB = new B();
        objB.setAndDisplay(a, b, c, d);

        scanner.close();
    }
}
