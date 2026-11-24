import java.util.Scanner;

public class ConstructorOverloading {
    int i;
    int j;

    ConstructorOverloading() {
        i = 100;
        j = 200;
        System.out.println("Inside default constructor");
        System.out.println("Value of i: " + i + " and j: " + j);
    }

    ConstructorOverloading(int p) {
        System.out.println("Inside single parameter constructor with int value = " + p);
    }

    ConstructorOverloading(String s) {
        System.out.println("Inside single parameter constructor with String object");
        System.out.println("String Value = " + s);
    }

    ConstructorOverloading(int p, double k) {
        System.out.println("Inside double parameter constructor value of p = " + p + " and k = " + k);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int intVal = sc.nextInt();
        sc.nextLine();
        String strVal = sc.nextLine();
        double doubleVal = sc.nextDouble();

        new ConstructorOverloading();
        new ConstructorOverloading(intVal);
        new ConstructorOverloading(strVal);
        new ConstructorOverloading(intVal, doubleVal);

        sc.close();
    }
}
