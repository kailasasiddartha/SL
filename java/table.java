import java.io.*;
import java.awt.*;
import javax.swing.*;
import java.util.*;

class table extends JFrame {
    static int r = 0, i = 0, j = 0, c = 0;
    static Object d[][];
    static Object h[];

    table() {
        setVisible(true);
        setSize(500, 500);
        Label l = new Label("Gokaraju Rangaraju Institute of Engineering and Technology");
        setTitle("TABLE DEMO");
        setLayout(new FlowLayout(FlowLayout.CENTER));
        JTable jt = new JTable(d, h);
        JScrollPane jsp = new JScrollPane(jt);
        add(l);
        add(jsp);
    }

    public static void main(String[] args) throws IOException {
        FileReader f = new FileReader("Table.txt");
        BufferedReader b = new BufferedReader(f);
        String s = b.readLine();
        StringTokenizer g = new StringTokenizer(s, ",");
        c = g.countTokens();
        h = new Object[c];
        while (g.hasMoreTokens()) {
            h[i] = g.nextToken();
            i++;
        }
        while ((s = b.readLine()) != null) {
            r++;
        }
        d = new Object[r][c];
        BufferedReader br = new BufferedReader(new FileReader("Table.txt"));
        String e = br.readLine();
        for (i = 0; i < r; i++) {
            e = br.readLine();
            StringTokenizer st = new StringTokenizer(e, ",");
            while (st.hasMoreTokens()) {
                d[i][j] = st.nextToken();
                j++;
            }
            j = 0;
        }
        new table();
    }
}
