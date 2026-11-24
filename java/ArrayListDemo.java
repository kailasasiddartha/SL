import java.util.*;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<Integer>();
        Scanner sc = new Scanner(System.in);

        while (true) {
            int ch = sc.nextInt();
            switch (ch) {
                case 1:
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        al.add(sc.nextInt());
                    }
                    break;

                case 2:
                    if (al.isEmpty()) {
                        System.out.println("The list is empty. Please add elements first.");
                        break;
                    }
                    int ele = sc.nextInt();
                    int index = sc.nextInt();
                    if (index >= 0 && index < al.size())
                        al.set(index, ele);
                    else
                        System.out.println("please enter valid index");
                    break;

                case 3:
                    if (al.isEmpty()) {
                        System.out.println("The list is empty. Please add elements first.");
                        break;
                    }
                    int index1 = sc.nextInt();
                    if (index1 >= 0 && index1 < al.size()) {
                        al.remove(index1);
                        System.out.println("Element removed.");
                    } else
                        System.out.println("please enter valid index");
                    break;

                case 4:
                    if (al.isEmpty()) {
                        System.out.println("The list is empty. Please add elements first.");
                    } else {
                        System.out.println("Current ArrayList: " + al);
                    }
                    break;

                case 5:
                    System.out.println("Exiting...");
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice");
                    break;
            }
        }
    }
}
