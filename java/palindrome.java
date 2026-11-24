import java.util.Scanner;

public class palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        if (sc.hasNextLine()) {
            String str = sc.nextLine();
            String reversed = new StringBuilder(str).reverse().toString();
            
            if (str.equals(reversed)) {
                System.out.println("string " + str + " is palindrome");
            } else {
                System.out.println("string " + str + " is not palindrome");
            }
        }
        
        sc.close();
    }
}
