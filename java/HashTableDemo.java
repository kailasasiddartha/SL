import java.util.Hashtable;
import java.util.Scanner;

public class HashTableDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Hashtable<String, String> hashtable = new Hashtable<>();

        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            String key = sc.nextLine();
            String value = sc.nextLine();
            hashtable.put(key, value);
        }

        System.out.println("Hashtable contents:");
        for (String key : hashtable.keySet()) {
            System.out.println("Key: " + key + " Value: " + hashtable.get(key));
        }
    }
}
