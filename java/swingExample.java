import javax.swing.*;
import java.awt.event.*;

public class swingExample implements ActionListener {
    JFrame f;
    JTextField tf;
    JButton b;

    swingExample() {
        f = new JFrame("Button Example");
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setSize(300, 150);
        f.setLayout(null);

        tf = new JTextField();
        tf.setBounds(50, 30, 200, 30);

        b = new JButton("Click Here");
        b.setBounds(100, 70, 150, 30);
        b.addActionListener(this);

        f.add(tf);
        f.add(b);
        f.setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        tf.setText("Welcome to griet.");
    }

    public static void main(String[] args) {
        new swingExample();
    }
}
