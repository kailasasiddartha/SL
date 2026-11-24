import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Keyboard_Event extends JFrame implements KeyListener {
    private JLabel label;

    public Keyboard_Event() {
        setTitle("Key Event Example");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        label = new JLabel("Press any key...", SwingConstants.CENTER);
        label.setFont(new Font("Arial", Font.PLAIN, 24));
        setLayout(new BorderLayout());
        add(label, BorderLayout.CENTER);

        addKeyListener(this);
    }

    public void keyPressed(KeyEvent e) {
        label.setText("Key Pressed: ");
    }

    public void keyReleased(KeyEvent e) {
        label.setText("Key Released: ");
    }

    public void keyTyped(KeyEvent e) {
        label.setText("Key Typed: " + e.getKeyChar());
    }

    public static void main(String[] args) {
        new Keyboard_Event().setVisible(true);
    }
}
