import java.util.Scanner;
import java.util.StringTokenizer;

public class token {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLine()) {
            sc.close();
            return;
        }

        String line = sc.nextLine();
        StringTokenizer st = new StringTokenizer(line);
        
        int totalTokens = st.countTokens();
        System.out.println("Total Number of tokens:" + totalTokens);

        int sum = 0;
        StringBuilder integersDisplay = new StringBuilder();

        while (st.hasMoreTokens()) {
            String token = st.nextToken();
            try {
                int value = Integer.parseInt(token);
                integersDisplay.append(value).append(" ");
                sum += value;
            } catch (NumberFormatException e) {
                if (integersDisplay.length() > 0) {
                    System.out.println(integersDisplay.toString());
                }
                System.out.println("non integer is encountered. terminated.");
                sc.close();
                return;
            }
        }

        if (integersDisplay.length() > 0) {
            System.out.println(integersDisplay.toString());
        }
        System.out.println("Sum of tokens :" + sum);

        sc.close();
    }
}
