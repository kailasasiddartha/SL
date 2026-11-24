import java.io.File;
import java.util.Scanner;

public class FileInformation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fileName = scanner.nextLine().trim();

        File file = new File(fileName);

        if (file.exists()) {
            System.out.println("File exists");

            if (file.canRead()) {
                System.out.println("File is readable");
            }

            if (file.canWrite()) {
                System.out.println("File is writable");
            }

            if (file.isFile()) {
                System.out.println("It is a file");
            } else if (file.isDirectory()) {
                System.out.println("It is a directory");
            }

            System.out.println("The length of the file is " + file.length() + " bytes");
        } else {
            System.out.println("File does not exist");
        }

        scanner.close();
    }
}
