import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Mouse_Event extends JFrame implements MouseListener, MouseMotionListener {
    JTextArea textArea;

    public Mouse_Event() {
        setTitle("Mouse Event Example");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        textArea = new JTextArea();
        textArea.setEditable(false);
        textArea.setFont(new Font("Arial", Font.PLAIN, 16));
        textArea.addMouseListener(this);
        textArea.addMouseMotionListener(this);
        add(new JScrollPane(textArea), BorderLayout.CENTER);
    }

    public void mouseClicked(MouseEvent e) {
        textArea.setText("Mouse Clicked at (" + e.getX() + ", " + e.getY() + ")\n");
    }

    public void mousePressed(MouseEvent e) {
        textArea.setText("Mouse Pressed at (" + e.getX() + ", " + e.getY() + ")\n");
    }

    public void mouseReleased(MouseEvent e) {
        textArea.setText("Mouse Released at (" + e.getX() + ", " + e.getY() + ")\n");
    }

    public void mouseEntered(MouseEvent e) {
        textArea.setText("Mouse Entered the component\n");
    }

    public void mouseExited(MouseEvent e) {
        textArea.setText("Mouse Exited the component\n");
    }

    public void mouseDragged(MouseEvent e) {
        textArea.setText("Mouse Dragged at (" + e.getX() + ", " + e.getY() + ")\n");
    }

    public void mouseMoved(MouseEvent e) {
        textArea.setText("Mouse Moved at (" + e.getX() + ", " + e.getY() + ")\n");
    }

    public static void main(String[] args) {
        new Mouse_Event().setVisible(true);
    }
}
