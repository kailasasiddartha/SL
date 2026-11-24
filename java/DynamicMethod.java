import java.util.Scanner;

class A {
    int x;

    A(int x) {
        this.x = x;
    }

    void callme() {
        System.out.println("Number in A: " + x);
    }
}

class B extends A {
    B(int x) {
        super(x + 100);
    }

    @Override
    void callme() {
        System.out.println("Number in B: " + x);
    }
}

class C extends A {
    C(int x) {
        super(x + 200);
    }

    @Override
    void callme() {
        System.out.println("Number in C: " + x);
    }
}

public class DynamicMethod {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int valA = scanner.nextInt();
        int valB = scanner.nextInt();
        int valC = scanner.nextInt();

        A objA = new A(valA);
        B objB = new B(valB);
        C objC = new C(valC);

        A ref;

        ref = objA;
        ref.callme();

        ref = objB;
        ref.callme();

        ref = objC;
        ref.callme();

        scanner.close();
    }
}
