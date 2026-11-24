import java.util.Scanner;

interface Exam {
    void percent_cal();
}


class Student {
    String name;
    int rollno;
    int marks1;
    int marks2;

    Student(String name, int rollno, int marks1, int marks2) {
        this.name = name;
        this.rollno = rollno;
        this.marks1 = marks1;
        this.marks2 = marks2;
    }
}

class Result extends Student implements Exam {
    double percentage;

    Result(String name, int rollno, int marks1, int marks2) {
        super(name, rollno, marks1, marks2);
    }

    @Override
    public void percent_cal() {
        percentage = (marks1 + marks2) / 2.0;
    }

    void display() {
        System.out.println("Name of Student: " + name);
        System.out.println("Roll No. of Student: " + rollno);
        System.out.println("Marks of Subject 1: " + marks1);
        System.out.println("Marks of Subject 2: " + marks2);
        System.out.println("Percentage: " + percentage + "%");
    }
}

public class MultipleInheritance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int rollno = scanner.nextInt();
        int marks1 = scanner.nextInt();
        int marks2 = scanner.nextInt();

        Result studentResult = new Result(name, rollno, marks1, marks2);
        studentResult.percent_cal();
        studentResult.display();

        scanner.close();
    }
}
