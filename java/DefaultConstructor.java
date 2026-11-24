public class DefaultConstructor {
    int college_id;
    String college_name;
    String city;

    DefaultConstructor() {
        college_id = 846;
        college_name = "GRIET";
        city = "Hyderabad";
    }

    void showDetails() {
        System.out.println("College ID:" + college_id);
        System.out.println("College Name:" + college_name);
        System.out.println("City:" + city);
    }

    public static void main(String[] args) {
        DefaultConstructor obj = new DefaultConstructor();
        obj.showDetails();
    }
}
