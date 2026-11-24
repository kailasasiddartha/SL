import java.util.*;

class VectorDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();
        Vector<String> v = new Vector<String>(n);
        for (int i = 0; i < n; i++) {
            v.add(sc.nextLine());
        }
        System.out.println("Elements are:");
        for (int i = 0; i < v.size() - 1; i++)
            System.out.print(v.get(i) + " ");
        System.out.print(v.get(v.size() - 1));
    }
}
