import java.util.Scanner;
import java.util.Stack;

public class StackDemo {
    public static void main(String[] args) {
        Stack<Object> stack = new Stack<>();
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    sc.nextLine();
                    String element = sc.nextLine();
                    try {
                        stack.push(Integer.parseInt(element));
                    } catch (NumberFormatException e) {
                        stack.push(element);
                    }
                    System.out.println("Element " + element + " pushed onto the stack.");
                    break;
                case 2:
                    if (!stack.isEmpty()) {
                        System.out.println("Element " + stack.pop() + " popped from the stack.");
                    } else {
                        System.out.println("Stack is empty. Nothing to pop.");
                    }
                    break;
                case 3:
                    if (!stack.isEmpty()) {
                        System.out.println("Top element of the stack is " + stack.peek());
                    } else {
                        System.out.println("Stack is empty. Nothing to peek.");
                    }
                    break;
                case 4:
                    if (stack.isEmpty()) {
                        System.out.println("The stack is empty.");
                    } else {
                        System.out.println("The stack is not empty.");
                    }
                    break;
                case 5:
                    if (!stack.isEmpty()) {
                        System.out.println("Elements in the stack: " + "\n" + stack);
                    } else {
                        System.out.println("Stack is empty. No elements to display.");
                    }
                    break;
                case 6:
                    System.out.println("Exiting program.");
                    break;
                default:
                    System.out.println("Invalid choice. Please select again.");
            }
        } while (choice != 6);

        sc.close();
    }
}
