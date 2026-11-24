import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class trafficLight extends JFrame implements ItemListener {
    JRadioButton redButton, yellowButton, greenButton;
    ButtonGroup buttonGroup;

    public trafficLight() {
        setTitle("Traffic Light");
        setSize(200, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        redButton = new JRadioButton("Red", false);
        yellowButton = new JRadioButton("Yellow", false);
        greenButton = new JRadioButton("Green", false);

        buttonGroup = new ButtonGroup();
        buttonGroup.add(redButton);
        buttonGroup.add(yellowButton);
        buttonGroup.add(greenButton);

        add(redButton);
        add(yellowButton);
        add(greenButton);

        redButton.addItemListener(this);
        yellowButton.addItemListener(this);
        greenButton.addItemListener(this);
    }

    public void itemStateChanged(ItemEvent e) {
        repaint();
    }

    public void paint(Graphics g) {
        super.paint(g);
        g.fillRect(50, 60, 80, 180);
        g.fillRect(80, 240, 20, 130);

        if (redButton.isSelected()) {
            g.setColor(Color.red);
            g.fillOval(75, 80, 35, 35);
        } else if (yellowButton.isSelected()) {
            g.setColor(Color.yellow);
            g.fillOval(75, 130, 35, 35);
        } else if (greenButton.isSelected()) {
            g.setColor(Color.green);
            g.fillOval(75, 180, 35, 35);
        }
    }

    public static void main(String[] args) {
        new trafficLight().setVisible(true);
    }
}
