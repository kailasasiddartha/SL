import java.util.Scanner;

class Bank {
    int getROI() {
        return 0;
    }
}

// Child class 1
class SBI extends Bank {
    @Override
    int getROI() {
        return 8;
    }
}

// Child class 2
class ICICI extends Bank {
    @Override
    int getROI() {
        return 7;
    }
}

// Child class 3
class Axis extends Bank {
    @Override
    int getROI() {
        return 9;
    }
}

public class MethodOverriding {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice = scanner.nextInt();

        Bank bank = null;

        switch (choice) {
            case 1:
                bank = new SBI();
                System.out.println("SBI rate of interest=" + bank.getROI() + "%");
                break;
            case 2:
                bank = new ICICI();
                System.out.println("ICICI rate of interest=" + bank.getROI() + "%");
                break;
            case 3:
                bank = new Axis();
                System.out.println("Axis rate of interest=" + bank.getROI() + "%");
                break;
            default:
                System.out.println("Invalid Input");
                break;
        }

        scanner.close();
    }
}
