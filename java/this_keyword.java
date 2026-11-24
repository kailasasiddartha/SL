import java.util.Scanner;

public class this_keyword {
    int x; 
    void method1(int localVar) {
        this.x = 100;
        localVar = 90;
        System.out.println("Value of Instance variable  :" + this.x);
        System.out.println("Value of Local variable  :" + localVar);
    }


    void method2() {
        int z = 40;
        System.out.println("Value of Instance variable :" + this.x);
        System.out.println("Value of Local variable z:" + z);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int localVal = sc.nextInt();
        this_keyword obj = new this_keyword();
        obj.x = sc.nextInt();

        System.out.println("Value of Instance variable in main  :" + obj.x);
        System.out.println("Value of Local variable in main  :" + localVal);

        obj.method1(localVal);
        obj.method2();

        sc.close();
    }
}
