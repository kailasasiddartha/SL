import java.util.Scanner;

public class ParamConstructor {
    int sid;
    String sname;

    ParamConstructor() {
        sid = 125;
        sname = "Sindhu";
    }

    ParamConstructor(int id, String name) {
        sid = id;
        sname = name;
    }

    void showDetails1() {
        System.out.println("The Default value of the student is:");
        System.out.println("Sid: " + sid);
        System.out.println("Sname: " + sname);
    }

    void showDetails2() {
        System.out.println("Sid: " + sid);
        System.out.println("Name of the Student is:");
        
        String[] parts = sname.trim().split("\\s+");
        if (parts.length == 1) {
            System.out.println("firstname: " + parts[0]);
        } else if (parts.length == 2) {
            System.out.println("firstname: " + parts[0]);
            System.out.println("lastname: " + parts[1]);
        } else if (parts.length >= 3) {
            System.out.println("firstname: " + parts[0]);
            System.out.println("middlename: " + parts[1]);
            System.out.println("lastname: " + parts[2]);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int id = sc.nextInt();
        sc.nextLine();
        String name = sc.nextLine();

        ParamConstructor defaultObj = new ParamConstructor();
        defaultObj.showDetails1();
        ParamConstructor paramObj = new ParamConstructor(id, name);
        paramObj.showDetails2();

        sc.close();
    }
}
