import java.util.Scanner;

class Demo {
    void display(char c) {
        System.out.println("Value of character = " + c);
    }
    
    void display(char c, int num) {
        System.out.println("Value of character = " + c);
        System.out.println("Value of Integer number = " + num);
    }
    void display(int num, double d) {
        System.out.println("Value of Integer number = " + num);
        System.out.println("Value of Floating Number = " + d);
    }
}

public class MethodOverloading {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        char c = sc.next().charAt(0);
        int num = sc.nextInt();
        double d = sc.nextDouble();
        
        Demo demo = new Demo();
        
        demo.display(c);
        demo.display(c, num);
        demo.display(num, d);
        
        sc.close();
    }
}
