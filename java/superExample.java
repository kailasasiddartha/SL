import java.util.Scanner;

class Parent {
    int num;
}

public class superExample extends Parent {
    int num;

    superExample() {
        Scanner sc = new Scanner(System.in);
        super.num = sc.nextInt();
        this.num = sc.nextInt();
    }

    void display() {
        System.out.println("Accessing Parentclass variable using super keyword: " + super.num);
        System.out.println("Accessing subclass variable: " + this.num);
    }

    public static void main(String[] args) {
        superExample obj = new superExample();
        obj.display();
    }
}
