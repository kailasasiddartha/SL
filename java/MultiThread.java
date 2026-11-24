class Morning implements Runnable {
    public void run() {
        try {
            for (int i = 0; i < 5; i++) {
                System.out.println("Good Morning");
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
        }
    }
}

class Hello implements Runnable {
    public void run() {
        try {
            for (int i = 0; i < 5; i++) {
                System.out.println("Hello");
                Thread.sleep(2000);
            }
        } catch (InterruptedException e) {
        }
    }
}

class Welcome implements Runnable {
    public void run() {
        try {
            for (int i = 0; i < 5; i++) {
                System.out.println("Welcome");
                Thread.sleep(3000);
            }
        } catch (InterruptedException e) {
        }
    }
}

public class MultiThread {
    public static void main(String[] args) {
        new Thread(new Morning()).start();
        new Thread(new Hello()).start();
        new Thread(new Welcome()).start();
    }
}
