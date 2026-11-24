import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class integerDivision extends JFrame implements ActionListener {
    private JTextField numeratorField;
    private JTextField denominatorField;
    private JTextArea resultArea;
    private JButton divideButton;

    public integerDivision() {
        setTitle("Integer Division Calculator");
        setSize(350, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(4, 2));

        numeratorField = new JTextField();
        denominatorField = new JTextField();
        divideButton = new JButton("Divide");
        resultArea = new JTextArea();
        resultArea.setEditable(false);

        add(new JLabel("Numerator:"));
        add(numeratorField);
        add(new JLabel("Denominator:"));
        add(denominatorField);
        add(divideButton);
        add(new JLabel("Result:"));
        add(new JScrollPane(resultArea));

        divideButton.addActionListener(this);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent event) {
        try {
            int numerator = Integer.parseInt(numeratorField.getText());
            int denominator = Integer.parseInt(denominatorField.getText());

            if (denominator == 0) {
                resultArea.setText("Error: Cannot divide by zero.");
            } else {
                resultArea.setText("Result: " + (numerator / denominator));
            }
        } catch (NumberFormatException e) {
            resultArea.setText("Error: Please enter valid integers.");
        }
    }

    public static void main(String[] args) {
        new integerDivision();
    }
}
