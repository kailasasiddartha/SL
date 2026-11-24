import java.util.Arrays;
import java.util.Scanner;

public class sort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] names = new String[n];
            
            for (int i = 0; i < n; i++) {
                names[i] = sc.next();
            }
            
            Arrays.sort(names);
            
            System.out.println("Names in Sorted Order:" + String.join(",", names));
        }
        
        sc.close();
    }
}
