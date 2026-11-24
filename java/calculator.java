import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class calculator extends JFrame implements ActionListener {
    JTextField display;
    double firstNumber;
    String operation;

    public calculator() {
        setTitle("Simple Calculator");
        setSize(300, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        display = new JTextField();
        display.setEditable(false);
        display.setFont(new Font("Arial", Font.PLAIN, 24));
        add(display, BorderLayout.NORTH);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 4));

        String[] labels = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", "C", "=", "+"
        };

        for (String label : labels) {
            JButton button = new JButton(label);
            button.addActionListener(this);
            panel.add(button);
        }
        add(panel, BorderLayout.CENTER);
    }

    public void actionPerformed(ActionEvent e) {
        String command = e.getActionCommand();

        if (command.matches("\\d")) {
            display.setText(display.getText() + command);
        } else if (command.equals("C")) {
            display.setText("");
            firstNumber = 0;
            operation = null;
        } else if (command.equals("=")) {
            if (operation != null && !display.getText().isEmpty()) {
                double second = Double.parseDouble(display.getText());
                display.setText(String.valueOf(calculate(firstNumber, second, operation)));
                operation = null;
            }
        } else {
            if (!display.getText().isEmpty()) {
                firstNumber = Double.parseDouble(display.getText());
                operation = command;
                display.setText("");
            }
        }
    }

    double calculate(double a, double b, String op) {
        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default: return 0;
        }
    }

    public static void main(String[] args) {
        new calculator().setVisible(true);
    }
}
