import javax.swing.*;
import java.awt.*;

public class shape extends JPanel {
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawLine(40, 40, 180, 180);
        g.drawRect(80, 240, 20, 130);
        g.drawOval(75, 130, 35, 35);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Draw Applet Using Swing");
        shape s = new shape();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(200, 300);
        frame.add(s);
        frame.setVisible(true);
    }
}
