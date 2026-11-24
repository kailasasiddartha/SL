import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class factorialSwing extends JFrame implements ActionListener {
    JTextField i;
    JTextField o;
    JButton cb;

    public factorialSwing() {
        setTitle("Factorial Calculator");
        setSize(300, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        i = new JTextField(10);
        add(new JLabel("Enter an integer:"));
        add(i);

        cb = new JButton("Compute");
        cb.addActionListener(this);
        add(cb);

        o = new JTextField(10);
        o.setEditable(false);
        add(new JLabel("Factorial value:"));
        add(o);
    }

    public void actionPerformed(ActionEvent e) {
        try {
            int number = Integer.parseInt(i.getText());
            if (number < 0) {
                o.setText("Invalid input");
                return;
            }
            long result = 1;
            for (int k = 1; k <= number; k++) {
                result *= k;
            }
            o.setText(Long.toString(result));
        } catch (NumberFormatException ex) {
            o.setText("Invalid input");
        }
    }

    public static void main(String[] args) {
        new factorialSwing().setVisible(true);
    }
}
