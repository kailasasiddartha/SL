const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('=== Building Java Lab Portal and Populating java Folder ===');

const rootDir = path.resolve(__dirname, '..');
const javaDir = path.join(rootDir, 'java');

if (!fs.existsSync(javaDir)) {
    fs.mkdirSync(javaDir, { recursive: true });
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const javaSolutions = [
  {
    taskNumber: "1A",
    taskGroup: "Task 1",
    groupTitle: "Constructors and overloading",
    id: "task-1a",
    folder: "task1a",
    groupFolder: "task1",
    title: "Class, Object and Default Constructor",
    filename: "DefaultConstructor.java",
    question: "Experiment 1(a): Create a class, create its object, and demonstrate the use of a default constructor to initialize college details (ID, name, city) and print them.",
    aim: "To demonstrate class definition, object instantiation, and default constructor initialization in Java.",
    tags: ["Java", "OOP", "Classes & Objects", "Default Constructor"],
    code: `public class DefaultConstructor {
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
`
  },
  {
    taskNumber: "1B",
    taskGroup: "Task 1",
    groupTitle: "Constructors and overloading",
    id: "task-1b",
    folder: "task1b",
    groupFolder: "task1",
    title: "Parametrized Constructor",
    filename: "ParamConstructor.java",
    question: "Experiment 1(b): Demonstrate the use of parametrized constructor alongside a default constructor to initialize student attributes and parse name components into first, middle, and last names.",
    aim: "To implement parameterized constructors and string splitting in object-oriented Java programming.",
    tags: ["Java", "OOP", "Parametrized Constructor", "Scanner", "Strings"],
    code: `import java.util.Scanner;

public class ParamConstructor {
    int sid;
    String sname;

    ParamConstructor() {
        sid = 125;
        sname = "Sindhu";
    }

    ParamConstructor(int id, String name) {
        sid = id;
        sname = name;
    }

    void showDetails1() {
        System.out.println("The Default value of the student is:");
        System.out.println("Sid: " + sid);
        System.out.println("Sname: " + sname);
    }

    void showDetails2() {
        System.out.println("Sid: " + sid);
        System.out.println("Name of the Student is:");
        
        String[] parts = sname.trim().split("\\\\s+");
        if (parts.length == 1) {
            System.out.println("firstname: " + parts[0]);
        } else if (parts.length == 2) {
            System.out.println("firstname: " + parts[0]);
            System.out.println("lastname: " + parts[1]);
        } else if (parts.length >= 3) {
            System.out.println("firstname: " + parts[0]);
            System.out.println("middlename: " + parts[1]);
            System.out.println("lastname: " + parts[2]);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int id = sc.nextInt();
        sc.nextLine();
        String name = sc.nextLine();

        ParamConstructor defaultObj = new ParamConstructor();
        defaultObj.showDetails1();
        ParamConstructor paramObj = new ParamConstructor(id, name);
        paramObj.showDetails2();

        sc.close();
    }
}
`
  },
  {
    taskNumber: "1C",
    taskGroup: "Task 1",
    groupTitle: "Constructors and overloading",
    id: "task-1c",
    folder: "task1c",
    groupFolder: "task1",
    title: "Method Overloading",
    filename: "MethodOverloading.java",
    question: "Experiment 1(c): Implement method overloading by defining multiple display() methods accepting different argument types (char, char + int, int + double).",
    aim: "To understand compile-time polymorphism through method overloading in Java.",
    tags: ["Java", "OOP", "Method Overloading", "Polymorphism"],
    code: `import java.util.Scanner;

class Demo {
    void display(char c) {
        System.out.println("Value of character = " + c);
    }
    
    void display(char c, int num) {
        System.out.println("Value of character = " + c);
        System.out.println("Value of Integer number = " + num);
    }
    void display(int num, double d) {
        System.out.println("Value of Integer number = " + num);
        System.out.println("Value of Floating Number = " + d);
    }
}

public class MethodOverloading {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        char c = sc.next().charAt(0);
        int num = sc.nextInt();
        double d = sc.nextDouble();
        
        Demo demo = new Demo();
        
        demo.display(c);
        demo.display(c, num);
        demo.display(num, d);
        
        sc.close();
    }
}
`
  },
  {
    taskNumber: "1D",
    taskGroup: "Task 1",
    groupTitle: "Constructors and overloading",
    id: "task-1d",
    folder: "task1d",
    groupFolder: "task1",
    title: "Constructor Overloading",
    filename: "ConstructorOverloading.java",
    question: "Experiment 1(d): Demonstrate constructor overloading with default, single integer, single String, and double parameter (int, double) constructors.",
    aim: "To implement multiple constructor definitions with varying parameters in a single class.",
    tags: ["Java", "OOP", "Constructor Overloading", "Constructors"],
    code: `import java.util.Scanner;

public class ConstructorOverloading {
    int i;
    int j;

    ConstructorOverloading() {
        i = 100;
        j = 200;
        System.out.println("Inside default constructor");
        System.out.println("Value of i: " + i + " and j: " + j);
    }

    ConstructorOverloading(int p) {
        System.out.println("Inside single parameter constructor with int value = " + p);
    }

    ConstructorOverloading(String s) {
        System.out.println("Inside single parameter constructor with String object");
        System.out.println("String Value = " + s);
    }

    ConstructorOverloading(int p, double k) {
        System.out.println("Inside double parameter constructor value of p = " + p + " and k = " + k);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int intVal = sc.nextInt();
        sc.nextLine();
        String strVal = sc.nextLine();
        double doubleVal = sc.nextDouble();

        new ConstructorOverloading();
        new ConstructorOverloading(intVal);
        new ConstructorOverloading(strVal);
        new ConstructorOverloading(intVal, doubleVal);

        sc.close();
    }
}
`
  },
  {
    taskNumber: "2A",
    taskGroup: "Task 2",
    groupTitle: "Strings",
    id: "task-2a",
    folder: "task2a",
    groupFolder: "task2",
    title: "Universal Palindrome",
    filename: "palindrome.java",
    question: "Experiment 2(a): Check whether an input string is a palindrome using StringBuilder and the reverse() method.",
    aim: "To reverse strings and verify palindromic equivalence using Java String and StringBuilder APIs.",
    tags: ["Java", "Strings", "StringBuilder", "Palindrome"],
    code: `import java.util.Scanner;

public class palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        if (sc.hasNextLine()) {
            String str = sc.nextLine();
            String reversed = new StringBuilder(str).reverse().toString();
            
            if (str.equals(reversed)) {
                System.out.println("string " + str + " is palindrome");
            } else {
                System.out.println("string " + str + " is not palindrome");
            }
        }
        
        sc.close();
    }
}
`
  },
  {
    taskNumber: "2B",
    taskGroup: "Task 2",
    groupTitle: "Strings",
    id: "task-2b",
    folder: "task2b",
    groupFolder: "task2",
    title: "Names in Ascending Order",
    filename: "sort.java",
    question: "Experiment 2(b): Read an array of N names and sort them in ascending alphabetical order using Arrays.sort().",
    aim: "To sort string arrays in lexicographical order using Java standard utilities.",
    tags: ["Java", "Strings", "Arrays.sort", "Sorting", "Scanner"],
    code: `import java.util.Arrays;
import java.util.Scanner;

public class sort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] names = new String[n];
            
            for (int i = 0; i < n; i++) {
                names[i] = sc.next();
            }
            
            Arrays.sort(names);
            
            System.out.println("Names in Sorted Order:" + String.join(",", names));
        }
        
        sc.close();
    }
}
`
  },
  {
    taskNumber: "2C",
    taskGroup: "Task 2",
    groupTitle: "Strings",
    id: "task-2c",
    folder: "task2c",
    groupFolder: "task2",
    title: "String Tokenizer",
    filename: "token.java",
    question: "Experiment 2(c): Tokenize an input line of space-separated values, display total token count, compute the sum of integers, and terminate gracefully when a non-integer token is encountered.",
    aim: "To parse delimited string tokens and perform type conversion with exception handling.",
    tags: ["Java", "Strings", "StringTokenizer", "Parsing", "Exceptions"],
    code: `import java.util.Scanner;
import java.util.StringTokenizer;

public class token {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLine()) {
            sc.close();
            return;
        }

        String line = sc.nextLine();
        StringTokenizer st = new StringTokenizer(line);
        
        int totalTokens = st.countTokens();
        System.out.println("Total Number of tokens:" + totalTokens);

        int sum = 0;
        StringBuilder integersDisplay = new StringBuilder();

        while (st.hasMoreTokens()) {
            String token = st.nextToken();
            try {
                int value = Integer.parseInt(token);
                integersDisplay.append(value).append(" ");
                sum += value;
            } catch (NumberFormatException e) {
                if (integersDisplay.length() > 0) {
                    System.out.println(integersDisplay.toString());
                }
                System.out.println("non integer is encountered. terminated.");
                sc.close();
                return;
            }
        }

        if (integersDisplay.length() > 0) {
            System.out.println(integersDisplay.toString());
        }
        System.out.println("Sum of tokens :" + sum);

        sc.close();
    }
}
`
  },
  {
    taskNumber: "3A",
    taskGroup: "Task 3",
    groupTitle: "Java keywords",
    id: "task-3a",
    folder: "task3a",
    groupFolder: "task3",
    title: "This Keyword",
    filename: "this_keyword.java",
    question: "Experiment 3(a): Demonstrate the use of the 'this' keyword to access and assign instance variables while distinguishing them from local variables.",
    aim: "To understand the 'this' keyword reference for current instance field disambiguation.",
    tags: ["Java", "Keywords", "this keyword", "Instance Variables"],
    code: `import java.util.Scanner;

public class this_keyword {
    int x; 
    void method1(int localVar) {
        this.x = 100;
        localVar = 90;
        System.out.println("Value of Instance variable  :" + this.x);
        System.out.println("Value of Local variable  :" + localVar);
    }


    void method2() {
        int z = 40;
        System.out.println("Value of Instance variable :" + this.x);
        System.out.println("Value of Local variable z:" + z);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int localVal = sc.nextInt();
        this_keyword obj = new this_keyword();
        obj.x = sc.nextInt();

        System.out.println("Value of Instance variable in main  :" + obj.x);
        System.out.println("Value of Local variable in main  :" + localVal);

        obj.method1(localVal);
        obj.method2();

        sc.close();
    }
}
`
  },
  {
    taskNumber: "3B",
    taskGroup: "Task 3",
    groupTitle: "Java keywords",
    id: "task-3b",
    folder: "task3b",
    groupFolder: "task3",
    title: "Super Keyword",
    filename: "superExample.java",
    question: "Experiment 3(b): Demonstrate the 'super' keyword to access parent class member variables from within a derived subclass.",
    aim: "To utilize 'super' keyword to resolve superclass field references in inheritance.",
    tags: ["Java", "Keywords", "super keyword", "Inheritance"],
    code: `import java.util.Scanner;

class Parent {
    int num;
}

public class superExample extends Parent {
    int num;

    superExample() {
        Scanner sc = new Scanner(System.in);
        super.num = sc.nextInt();
        this.num = sc.nextInt();
    }

    void display() {
        System.out.println("Accessing Parentclass variable using super keyword: " + super.num);
        System.out.println("Accessing subclass variable: " + this.num);
    }

    public static void main(String[] args) {
        superExample obj = new superExample();
        obj.display();
    }
}
`
  },
  {
    taskNumber: "3C",
    taskGroup: "Task 3",
    groupTitle: "Java keywords",
    id: "task-3c",
    folder: "task3c",
    groupFolder: "task3",
    title: "Static Counter",
    filename: "staticCounter.java",
    question: "Experiment 3(c): Demonstrate static variables by incrementing a shared static counter across multiple object instantiations.",
    aim: "To demonstrate static field memory allocation shared across all class instances.",
    tags: ["Java", "Keywords", "static", "Static Counter", "Memory"],
    code: `import java.util.Scanner;

class A {
    static int count;

    A() {
        count++;
    }
}

public class staticCounter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            A.count = sc.nextInt();

            A c1 = new A();
            System.out.println("c1 count=" + A.count);

            A c2 = new A();
            System.out.println("c2 count=" + A.count);

            A c3 = new A();
            System.out.println("c3 count=" + A.count);

            A c4 = new A();
            System.out.println("c4 count=" + A.count);
        }
        sc.close();
    }
}
`
  },
  {
    taskNumber: "3D",
    taskGroup: "Task 3",
    groupTitle: "Java keywords",
    id: "task-3d",
    folder: "task3d",
    groupFolder: "task3",
    title: "Final Keyword",
    filename: "FinalKeyword.java",
    question: "Experiment 3(d): Demonstrate the use of the 'final' keyword to declare immutable, constant variables in Java.",
    aim: "To enforce value immutability using the final modifier in Java.",
    tags: ["Java", "Keywords", "final", "Constants"],
    code: `import java.util.Scanner;

public class FinalKeyword {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            final int x = sc.nextInt();
            System.out.println(x);
        }
        sc.close();
    }
}
`
  },
  {
    taskNumber: "4A",
    taskGroup: "Task 4",
    groupTitle: "Inheritance and interfaces",
    id: "task-4a",
    folder: "task4a",
    groupFolder: "task4",
    title: "Method Overriding",
    filename: "MethodOverriding.java",
    question: "Experiment 4(a): Implement runtime polymorphism via method overriding in a Bank interest rate hierarchy (SBI, ICICI, Axis).",
    aim: "To demonstrate method overriding and dynamic method dispatch across bank classes.",
    tags: ["Java", "OOP", "Method Overriding", "Polymorphism", "Inheritance"],
    code: `import java.util.Scanner;

class Bank {
    int getROI() {
        return 0;
    }
}

// Child class 1
class SBI extends Bank {
    @Override
    int getROI() {
        return 8;
    }
}

// Child class 2
class ICICI extends Bank {
    @Override
    int getROI() {
        return 7;
    }
}

// Child class 3
class Axis extends Bank {
    @Override
    int getROI() {
        return 9;
    }
}

public class MethodOverriding {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice = scanner.nextInt();

        Bank bank = null;

        switch (choice) {
            case 1:
                bank = new SBI();
                System.out.println("SBI rate of interest=" + bank.getROI() + "%");
                break;
            case 2:
                bank = new ICICI();
                System.out.println("ICICI rate of interest=" + bank.getROI() + "%");
                break;
            case 3:
                bank = new Axis();
                System.out.println("Axis rate of interest=" + bank.getROI() + "%");
                break;
            default:
                System.out.println("Invalid Input");
                break;
        }

        scanner.close();
    }
}
`
  },
  {
    taskNumber: "4B",
    taskGroup: "Task 4",
    groupTitle: "Inheritance and interfaces",
    id: "task-4b",
    folder: "task4b",
    groupFolder: "task4",
    title: "Dynamic Method Dispatch",
    filename: "DynamicMethod.java",
    question: "Experiment 4(b): Demonstrate dynamic method dispatch (runtime polymorphism) using superclass reference variables executing overridden callme() methods.",
    aim: "To demonstrate polymorphic method resolution at runtime using base class reference variables.",
    tags: ["Java", "OOP", "Dynamic Dispatch", "Polymorphism", "Inheritance"],
    code: `import java.util.Scanner;

class A {
    int x;

    A(int x) {
        this.x = x;
    }

    void callme() {
        System.out.println("Number in A: " + x);
    }
}

class B extends A {
    B(int x) {
        super(x + 100);
    }

    @Override
    void callme() {
        System.out.println("Number in B: " + x);
    }
}

class C extends A {
    C(int x) {
        super(x + 200);
    }

    @Override
    void callme() {
        System.out.println("Number in C: " + x);
    }
}

public class DynamicMethod {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int valA = scanner.nextInt();
        int valB = scanner.nextInt();
        int valC = scanner.nextInt();

        A objA = new A(valA);
        B objB = new B(valB);
        C objC = new C(valC);

        A ref;

        ref = objA;
        ref.callme();

        ref = objB;
        ref.callme();

        ref = objC;
        ref.callme();

        scanner.close();
    }
}
`
  },
  {
    taskNumber: "4C",
    taskGroup: "Task 4",
    groupTitle: "Inheritance and interfaces",
    id: "task-4c",
    folder: "task4c",
    groupFolder: "task4",
    title: "Multiple Inheritance with Interface",
    filename: "MultipleInheritance.java",
    question: "Experiment 4(c): Implement multiple inheritance using an interface (Exam) combined with class inheritance (Student -> Result) to calculate percentage.",
    aim: "To achieve multiple inheritance using Java interfaces and class extension.",
    tags: ["Java", "OOP", "Interfaces", "Multiple Inheritance"],
    code: `import java.util.Scanner;

interface Exam {
    void percent_cal();
}


class Student {
    String name;
    int rollno;
    int marks1;
    int marks2;

    Student(String name, int rollno, int marks1, int marks2) {
        this.name = name;
        this.rollno = rollno;
        this.marks1 = marks1;
        this.marks2 = marks2;
    }
}

class Result extends Student implements Exam {
    double percentage;

    Result(String name, int rollno, int marks1, int marks2) {
        super(name, rollno, marks1, marks2);
    }

    @Override
    public void percent_cal() {
        percentage = (marks1 + marks2) / 2.0;
    }

    void display() {
        System.out.println("Name of Student: " + name);
        System.out.println("Roll No. of Student: " + rollno);
        System.out.println("Marks of Subject 1: " + marks1);
        System.out.println("Marks of Subject 2: " + marks2);
        System.out.println("Percentage: " + percentage + "%");
    }
}

public class MultipleInheritance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int rollno = scanner.nextInt();
        int marks1 = scanner.nextInt();
        int marks2 = scanner.nextInt();

        Result studentResult = new Result(name, rollno, marks1, marks2);
        studentResult.percent_cal();
        studentResult.display();

        scanner.close();
    }
}
`
  },
  {
    taskNumber: "4D",
    taskGroup: "Task 4",
    groupTitle: "Inheritance and interfaces",
    id: "task-4d",
    folder: "task4d",
    groupFolder: "task4",
    title: "Access Specifiers",
    filename: "AccessSpecifier.java",
    question: "Experiment 4(d): Demonstrate private, public, protected, and default access modifiers in Java classes and their visibility across classes.",
    aim: "To verify encapsulation boundaries and access privileges of class members.",
    tags: ["Java", "OOP", "Access Modifiers", "Encapsulation"],
    code: `import java.util.Scanner;

class A {
    private int a;
    public int b;
    protected int c;
    int d;

    public void setA(int a) {
        this.a = a;
    }

    public void print() {
        System.out.println(a + " " + b + " " + c + " " + d);
    }
}

class B {
    A objA = new A();

    public void setAndDisplay(int a, int b, int c, int d) {
        objA.setA(a);
        
        objA.b = b;
        objA.c = c;
        objA.d = d;

        objA.print();
    }
}

public class AccessSpecifier {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();
        int d = scanner.nextInt();

        B objB = new B();
        objB.setAndDisplay(a, b, c, d);

        scanner.close();
    }
}
`
  },
  {
    taskNumber: "5A",
    taskGroup: "Task 5",
    groupTitle: "Working with files",
    id: "task-5a",
    folder: "task5a",
    groupFolder: "task5",
    title: "File Information",
    filename: "FileInformation.java",
    question: "Experiment 5(a): Query file system metadata using java.io.File: test existence, read/write permissions, check if file or directory, and get file length in bytes.",
    aim: "To examine file attributes and permissions using the java.io.File class.",
    tags: ["Java", "File I/O", "File Metadata", "java.io.File"],
    code: `import java.io.File;
import java.util.Scanner;

public class FileInformation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fileName = scanner.nextLine().trim();

        File file = new File(fileName);

        if (file.exists()) {
            System.out.println("File exists");

            if (file.canRead()) {
                System.out.println("File is readable");
            }

            if (file.canWrite()) {
                System.out.println("File is writable");
            }

            if (file.isFile()) {
                System.out.println("It is a file");
            } else if (file.isDirectory()) {
                System.out.println("It is a directory");
            }

            System.out.println("The length of the file is " + file.length() + " bytes");
        } else {
            System.out.println("File does not exist");
        }

        scanner.close();
    }
}
`
  },
  {
    taskNumber: "5B",
    taskGroup: "Task 5",
    groupTitle: "Working with files",
    id: "task-5b",
    folder: "task5b",
    groupFolder: "task5",
    title: "Reading File with Line Numbers",
    filename: "FileReading.java",
    question: "Experiment 5(b): Read a text file line-by-line using BufferedReader and FileReader, outputting each line with its corresponding line number.",
    aim: "To perform buffered line-oriented file reading using java.io streams.",
    tags: ["Java", "File I/O", "BufferedReader", "FileReader"],
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class FileReading {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fileName = scanner.nextLine().trim();

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            int lineNumber = 1;

            while ((line = reader.readLine()) != null) {
                System.out.println(lineNumber + " " + line);
                lineNumber++;
            }
        } catch (IOException e) {
            System.out.println("Error reading fil: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}
`
  },
  {
    taskNumber: "5C",
    taskGroup: "Task 5",
    groupTitle: "Working with files",
    id: "task-5c",
    folder: "task5c",
    groupFolder: "task5",
    title: "Word, Character and Line Counter",
    filename: "WordCount.java",
    question: "Experiment 5(c): Count the total number of characters, words, and lines in a given text file using BufferedReader.",
    aim: "To calculate character, word, and line metrics from a file stream.",
    tags: ["Java", "File I/O", "Word Count", "BufferedReader"],
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class WordCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fileName = scanner.nextLine().trim();

        int charCount = -1;
        int wordCount = 0;
        int lineCount = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                lineCount++;

                charCount += line.length() + 1;

                String trimmed = line.trim();
                if (!trimmed.isEmpty()) {
                    String[] words = trimmed.split("\\\\s+");
                    wordCount += words.length;
                }
            }

            System.out.println("\\nThe number of characters is " + charCount);
            System.out.println("The number of words is " + wordCount);
            System.out.println("The number of lines is " + lineCount);

        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}
`
  },
  {
    taskNumber: "6A",
    taskGroup: "Task 6",
    groupTitle: "Exceptions",
    id: "task-6a",
    folder: "task6a",
    groupFolder: "task6",
    title: "Checked Exceptions",
    filename: "checkedException.java",
    question: "Experiment 6(a): Handle compile-time checked exceptions (IOException) using try-with-resources and catch blocks when reading files.",
    aim: "To demonstrate handling of checked exceptions mandated by the Java compiler.",
    tags: ["Java", "Exceptions", "Checked Exceptions", "IOException"],
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class checkedException {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fileName = scanner.nextLine();

        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file");
        } finally {
            scanner.close();
        }
    }
}
`
  },
  {
    taskNumber: "6B",
    taskGroup: "Task 6",
    groupTitle: "Exceptions",
    id: "task-6b",
    folder: "task6b",
    groupFolder: "task6",
    title: "Unchecked Exceptions",
    filename: "uncheckedException.java",
    question: "Experiment 6(b): Catch and handle runtime unchecked exceptions including NegativeArraySizeException and ArrayIndexOutOfBoundsException.",
    aim: "To manage runtime exceptions and prevent application crashes using multiple catch blocks.",
    tags: ["Java", "Exceptions", "Unchecked Exceptions", "ArrayIndexOutOfBoundsException"],
    code: `import java.util.Scanner;

public class uncheckedException {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            int size = scanner.nextInt();
            
            int[] arr = new int[size];

            for (int i = 0; i < size; i++) {
                arr[i] = scanner.nextInt();
            }

            int index = scanner.nextInt();

            System.out.println("Element at index " + index + ": " + arr[index]);

        } catch (NegativeArraySizeException e) {
            System.out.println("Array size cannot be negative.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("The specified index does not exist");
        } finally {
            scanner.close();
        }
    }
}
`
  },
  {
    taskNumber: "7A",
    taskGroup: "Task 7",
    groupTitle: "Threads",
    id: "task-7a",
    folder: "task7a",
    groupFolder: "task7",
    title: "Thread.sleep() & Concurrency",
    filename: "MultiThread.java",
    question: "Experiment 7(a): Create three concurrent threads printing 'Good Morning' (1s sleep), 'Hello' (2s sleep), and 'Welcome' (3s sleep) using Runnable.",
    aim: "To implement multithreaded concurrent execution using the Runnable interface and Thread.sleep().",
    tags: ["Java", "Multithreading", "Runnable", "Thread.sleep"],
    code: `class Morning implements Runnable {
    public void run() {
        try {
            for (int i = 0; i < 5; i++) {
                System.out.println("Good Morning");
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
        }
    }
}

class Hello implements Runnable {
    public void run() {
        try {
            for (int i = 0; i < 5; i++) {
                System.out.println("Hello");
                Thread.sleep(2000);
            }
        } catch (InterruptedException e) {
        }
    }
}

class Welcome implements Runnable {
    public void run() {
        try {
            for (int i = 0; i < 5; i++) {
                System.out.println("Welcome");
                Thread.sleep(3000);
            }
        } catch (InterruptedException e) {
        }
    }
}

public class MultiThread {
    public static void main(String[] args) {
        new Thread(new Morning()).start();
        new Thread(new Hello()).start();
        new Thread(new Welcome()).start();
    }
}
`
  },
  {
    taskNumber: "7B",
    taskGroup: "Task 7",
    groupTitle: "Threads",
    id: "task-7b",
    folder: "task7b",
    groupFolder: "task7",
    title: "Producer Consumer Problem",
    filename: "ProducerConsumer.java",
    question: "Experiment 7(b): Implement inter-thread communication and synchronization for the Producer-Consumer problem using wait(), notify(), and a bounded queue buffer.",
    aim: "To demonstrate inter-thread communication and mutual exclusion using Java synchronized methods.",
    tags: ["Java", "Multithreading", "Synchronization", "Producer-Consumer", "wait/notify"],
    code: `import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class Buffer {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int capacity;

    public Buffer(int capacity) {
        this.capacity = capacity;
    }

    public synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == capacity) {
            wait();
        }
        queue.add(item);
        System.out.println("Produced " + item);
        notify();
    }

    public synchronized void consume() throws InterruptedException {
        while (queue.isEmpty()) {
            wait();
        }
        int item = queue.poll();
        System.out.println("Consumed " + item);
        notify();
    }
}

class Producer implements Runnable {
    private final Buffer buffer;
    private final int maxItems;

    public Producer(Buffer buffer, int maxItems) {
        this.buffer = buffer;
        this.maxItems = maxItems;
    }

    @Override
    public void run() {
        try {
            for (int i = 0; i < maxItems; i++) {
                buffer.produce(i);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

class Consumer implements Runnable {
    private final Buffer buffer;
    private final int maxItems;

    public Consumer(Buffer buffer, int maxItems) {
        this.buffer = buffer;
        this.maxItems = maxItems;
    }

    @Override
    public void run() {
        try {
            for (int i = 0; i < maxItems; i++) {
                buffer.consume();
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

public class ProducerConsumer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        if (scanner.hasNextInt()) {
            int capacity = scanner.nextInt();
            Buffer buffer = new Buffer(capacity);
            int itemsToProcess = 7; 

            Thread producerThread = new Thread(new Producer(buffer, itemsToProcess));
            Thread consumerThread = new Thread(new Consumer(buffer, itemsToProcess));

            producerThread.start();
            consumerThread.start();
        }
        scanner.close();
    }
}
`
  },
  {
    taskNumber: "8A",
    taskGroup: "Task 8",
    groupTitle: "Collections",
    id: "task-8a",
    folder: "task8a",
    groupFolder: "task8",
    title: "ArrayList Operations",
    filename: "ArrayListDemo.java",
    question: "Experiment 8(a): Menu-driven program to perform dynamic array operations: append elements, update element at index, remove element at index, and display ArrayList.",
    aim: "To implement collection manipulation using java.util.ArrayList.",
    tags: ["Java", "Collections", "ArrayList", "List"],
    code: `import java.util.*;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<Integer>();
        Scanner sc = new Scanner(System.in);

        while (true) {
            int ch = sc.nextInt();
            switch (ch) {
                case 1:
                    int n = sc.nextInt();
                    for (int i = 0; i < n; i++) {
                        al.add(sc.nextInt());
                    }
                    break;

                case 2:
                    if (al.isEmpty()) {
                        System.out.println("The list is empty. Please add elements first.");
                        break;
                    }
                    int ele = sc.nextInt();
                    int index = sc.nextInt();
                    if (index >= 0 && index < al.size())
                        al.set(index, ele);
                    else
                        System.out.println("please enter valid index");
                    break;

                case 3:
                    if (al.isEmpty()) {
                        System.out.println("The list is empty. Please add elements first.");
                        break;
                    }
                    int index1 = sc.nextInt();
                    if (index1 >= 0 && index1 < al.size()) {
                        al.remove(index1);
                        System.out.println("Element removed.");
                    } else
                        System.out.println("please enter valid index");
                    break;

                case 4:
                    if (al.isEmpty()) {
                        System.out.println("The list is empty. Please add elements first.");
                    } else {
                        System.out.println("Current ArrayList: " + al);
                    }
                    break;

                case 5:
                    System.out.println("Exiting...");
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice");
                    break;
            }
        }
    }
}
`
  },
  {
    taskNumber: "8B",
    taskGroup: "Task 8",
    groupTitle: "Collections",
    id: "task-8b",
    folder: "task8b",
    groupFolder: "task8",
    title: "Vector Operations",
    filename: "VectorDemo.java",
    question: "Experiment 8(b): Create, populate, and traverse a synchronized Vector containing String elements using capacity and iteration.",
    aim: "To demonstrate synchronized dynamic collections using java.util.Vector.",
    tags: ["Java", "Collections", "Vector", "Dynamic Array"],
    code: `import java.util.*;

class VectorDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();
        Vector<String> v = new Vector<String>(n);
        for (int i = 0; i < n; i++) {
            v.add(sc.nextLine());
        }
        System.out.println("Elements are:");
        for (int i = 0; i < v.size() - 1; i++)
            System.out.print(v.get(i) + " ");
        System.out.print(v.get(v.size() - 1));
    }
}
`
  },
  {
    taskNumber: "8C",
    taskGroup: "Task 8",
    groupTitle: "Collections",
    id: "task-8c",
    folder: "task8c",
    groupFolder: "task8",
    title: "HashTable Key-Value Storage",
    filename: "HashTableDemo.java",
    question: "Experiment 8(c): Store key-value mappings in a synchronized java.util.Hashtable and iterate through its keySet to display contents.",
    aim: "To implement dictionary key-value storage using HashTable in Java Collections.",
    tags: ["Java", "Collections", "Hashtable", "Key-Value"],
    code: `import java.util.Hashtable;
import java.util.Scanner;

public class HashTableDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Hashtable<String, String> hashtable = new Hashtable<>();

        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            String key = sc.nextLine();
            String value = sc.nextLine();
            hashtable.put(key, value);
        }

        System.out.println("Hashtable contents:");
        for (String key : hashtable.keySet()) {
            System.out.println("Key: " + key + " Value: " + hashtable.get(key));
        }
    }
}
`
  },
  {
    taskNumber: "8D",
    taskGroup: "Task 8",
    groupTitle: "Collections",
    id: "task-8d",
    folder: "task8d",
    groupFolder: "task8",
    title: "Stack LIFO Operations",
    filename: "StackDemo.java",
    question: "Experiment 8(d): Menu-driven program to perform LIFO operations on java.util.Stack: push, pop, peek, check empty, and display stack elements.",
    aim: "To implement Last-In-First-Out data structure operations using Java Stack.",
    tags: ["Java", "Collections", "Stack", "LIFO", "Data Structures"],
    code: `import java.util.Scanner;
import java.util.Stack;

public class StackDemo {
    public static void main(String[] args) {
        Stack<Object> stack = new Stack<>();
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    sc.nextLine();
                    String element = sc.nextLine();
                    try {
                        stack.push(Integer.parseInt(element));
                    } catch (NumberFormatException e) {
                        stack.push(element);
                    }
                    System.out.println("Element " + element + " pushed onto the stack.");
                    break;
                case 2:
                    if (!stack.isEmpty()) {
                        System.out.println("Element " + stack.pop() + " popped from the stack.");
                    } else {
                        System.out.println("Stack is empty. Nothing to pop.");
                    }
                    break;
                case 3:
                    if (!stack.isEmpty()) {
                        System.out.println("Top element of the stack is " + stack.peek());
                    } else {
                        System.out.println("Stack is empty. Nothing to peek.");
                    }
                    break;
                case 4:
                    if (stack.isEmpty()) {
                        System.out.println("The stack is empty.");
                    } else {
                        System.out.println("The stack is not empty.");
                    }
                    break;
                case 5:
                    if (!stack.isEmpty()) {
                        System.out.println("Elements in the stack: " + "\\n" + stack);
                    } else {
                        System.out.println("Stack is empty. No elements to display.");
                    }
                    break;
                case 6:
                    System.out.println("Exiting program.");
                    break;
                default:
                    System.out.println("Invalid choice. Please select again.");
            }
        } while (choice != 6);

        sc.close();
    }
}
`
  },
  {
    taskNumber: "9A",
    taskGroup: "Task 9",
    groupTitle: "Swing applications",
    id: "task-9a",
    folder: "task9a",
    groupFolder: "task9",
    title: "Display Simple Message with Button",
    filename: "swingExample.java",
    question: "Experiment 9(a): Design a Java Swing GUI application with a JFrame, JTextField, and JButton that displays a greeting message upon button click.",
    aim: "To implement basic event-driven GUI forms using Swing components and ActionListener.",
    tags: ["Java", "Swing", "GUI", "JFrame", "JButton", "ActionListener"],
    code: `import javax.swing.*;
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
`
  },
  {
    taskNumber: "9B",
    taskGroup: "Task 9",
    groupTitle: "Swing applications",
    id: "task-9b",
    folder: "task9b",
    groupFolder: "task9",
    title: "Factorial GUI Calculator",
    filename: "factorialSwing.java",
    question: "Experiment 9(b): Design a Swing GUI application using FlowLayout with input field, compute button, and output field to calculate the factorial of a number.",
    aim: "To build interactive numerical calculator forms using Java Swing components and action listeners.",
    tags: ["Java", "Swing", "GUI", "Factorial", "Event Handling"],
    code: `import javax.swing.*;
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
`
  },
  {
    taskNumber: "9C",
    taskGroup: "Task 9",
    groupTitle: "Swing applications",
    id: "task-9c",
    folder: "task9c",
    groupFolder: "task9",
    title: "Simple GUI Calculator",
    filename: "calculator.java",
    question: "Experiment 9(c): Build a full 16-button arithmetic calculator GUI in Swing combining BorderLayout and GridLayout with real-time operations (+, -, *, /).",
    aim: "To implement desktop calculator software using multi-panel layout managers and arithmetic handlers.",
    tags: ["Java", "Swing", "GUI", "Calculator", "GridLayout", "BorderLayout"],
    code: `import javax.swing.*;
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

        if (command.matches("\\\\d")) {
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
`
  },
  {
    taskNumber: "10A",
    taskGroup: "Task 10",
    groupTitle: "Mouse and keyboard events",
    id: "task-10a",
    folder: "task10a",
    groupFolder: "task10",
    title: "Mouse Events Handling",
    filename: "Mouse_Event.java",
    question: "Experiment 10(a): Implement MouseListener and MouseMotionListener to capture and report mouse clicks, press, release, entered, exited, dragged, and moved events with coordinates.",
    aim: "To capture, process, and log low-level mouse pointer events and coordinates in Java Swing.",
    tags: ["Java", "Events", "MouseListener", "MouseMotionListener", "Swing"],
    code: `import javax.swing.*;
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
        textArea.setText("Mouse Clicked at (" + e.getX() + ", " + e.getY() + ")\\n");
    }

    public void mousePressed(MouseEvent e) {
        textArea.setText("Mouse Pressed at (" + e.getX() + ", " + e.getY() + ")\\n");
    }

    public void mouseReleased(MouseEvent e) {
        textArea.setText("Mouse Released at (" + e.getX() + ", " + e.getY() + ")\\n");
    }

    public void mouseEntered(MouseEvent e) {
        textArea.setText("Mouse Entered the component\\n");
    }

    public void mouseExited(MouseEvent e) {
        textArea.setText("Mouse Exited the component\\n");
    }

    public void mouseDragged(MouseEvent e) {
        textArea.setText("Mouse Dragged at (" + e.getX() + ", " + e.getY() + ")\\n");
    }

    public void mouseMoved(MouseEvent e) {
        textArea.setText("Mouse Moved at (" + e.getX() + ", " + e.getY() + ")\\n");
    }

    public static void main(String[] args) {
        new Mouse_Event().setVisible(true);
    }
}
`
  },
  {
    taskNumber: "10B",
    taskGroup: "Task 10",
    groupTitle: "Mouse and keyboard events",
    id: "task-10b",
    folder: "task10b",
    groupFolder: "task10",
    title: "Keyboard Events Handling",
    filename: "Keyboard_Event.java",
    question: "Experiment 10(b): Implement KeyListener to detect and display keyPressed, keyReleased, and keyTyped events with typed key characters.",
    aim: "To capture, process, and display keyboard input events in real time using Swing.",
    tags: ["Java", "Events", "KeyListener", "Keyboard Events", "Swing"],
    code: `import javax.swing.*;
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
`
  },
  {
    taskNumber: "11A",
    taskGroup: "Task 11",
    groupTitle: "GUI with Exception Handling",
    id: "task-11a",
    folder: "task11a",
    groupFolder: "task11",
    title: "Integer Division Calculator (GUI Exception Handling)",
    filename: "integerDivision.java",
    question: "Experiment 11(a): Develop a Java Swing GUI application with Numerator, Denominator input fields, a Divide button, and a Result field. Handle NumberFormatException for invalid inputs and display an error message when dividing by zero.",
    aim: "To implement error handling within an event-driven Swing GUI application for numerical division.",
    tags: ["Java", "Swing", "GUI", "Exception Handling", "GridLayout", "Division"],
    code: `import javax.swing.*;
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
`
  },
  {
    taskNumber: "12A",
    taskGroup: "Task 12",
    groupTitle: "Graphics and Advanced Swing",
    id: "task-12a",
    folder: "task12a",
    groupFolder: "task12",
    title: "Traffic Light Simulation",
    filename: "trafficLight.java",
    question: "Experiment 12(a): Simulate a traffic light using Swing components (JRadioButton, ButtonGroup) and custom Graphics painting (paint/repaint). Turning on one radio button illuminates the corresponding light (Red, Yellow, or Green).",
    aim: "To implement custom graphical drawing with radio button event listeners in Java Swing.",
    tags: ["Java", "Swing", "GUI", "Graphics", "JRadioButton", "Traffic Light"],
    code: `import javax.swing.*;
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
`
  },
  {
    taskNumber: "12B",
    taskGroup: "Task 12",
    groupTitle: "Graphics and Advanced Swing",
    id: "task-12b",
    folder: "task12b",
    groupFolder: "task12",
    title: "Lines, Rectangles and Ovals Drawing",
    filename: "shape.java",
    question: "Experiment 12(b): Develop a Java Swing application extending JPanel that overrides paintComponent() to draw lines, rectangles, and ovals.",
    aim: "To demonstrate 2D shape rendering using the Java AWT Graphics pipeline inside a Swing container.",
    tags: ["Java", "Swing", "Graphics", "JPanel", "2D Shapes", "paintComponent"],
    code: `import javax.swing.*;
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
`
  },
  {
    taskNumber: "12C",
    taskGroup: "Task 12",
    groupTitle: "Graphics and Advanced Swing",
    id: "task-12c",
    folder: "task12c",
    groupFolder: "task12",
    title: "Table Display with JTable Component",
    filename: "table.java",
    question: "Experiment 12(c): Display tabular student data read from a comma-separated file (Table.txt) dynamically populated into a JTable wrapped in JScrollPane.",
    aim: "To read delimited file records and populate a graphical JTable component in Java Swing.",
    tags: ["Java", "Swing", "JTable", "JScrollPane", "File I/O", "Table"],
    code: `import java.io.*;
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
`
  }
];

// Write Table.txt for Task 12c
const tableTxtContent = `NAME,NUMBER,MARKS,RESULT
NAVEEN,501,544,PASS
RAMESH,503,344,PASS
DURGA,521,344,PASS
ASHOK,532,344,PASS
MADHU,543,344,PASS
`;
fs.writeFileSync(path.join(javaDir, 'Table.txt'), tableTxtContent, 'utf8');

// 1. Write all .java files into java/
console.log(`--- Writing ${javaSolutions.length} Java files directly into java/ folder ---`);

javaSolutions.forEach(item => {
    // Write in root of java/
    const directPath = path.join(javaDir, item.filename);
    fs.writeFileSync(directPath, item.code, 'utf8');
    console.log(`Saved: ${item.filename} (Task ${item.taskNumber})`);
});

// 3. Construct Data structure for java-data.js and java-data.json
console.log('--- Building java-data.js and java-data.json (No Zips) ---');

const builtTasks = javaSolutions.map(item => {
    const directPath = path.join(javaDir, item.filename);
    const stats = fs.statSync(directPath);

    const files = [
        {
            name: item.filename,
            path: `java/${item.filename}`,
            size: formatBytes(stats.size),
            type: "java",
            extension: "java",
            content: item.code
        }
    ];

    if (item.id === 'task-12c') {
        const tableTxtPath = path.join(javaDir, 'Table.txt');
        const txtStats = fs.statSync(tableTxtPath);
        files.push({
            name: "Table.txt",
            path: "java/Table.txt",
            size: formatBytes(txtStats.size),
            type: "txt",
            extension: "txt",
            content: tableTxtContent
        });
    }

    return {
        taskNumber: item.taskNumber,
        taskGroup: item.taskGroup,
        groupTitle: item.groupTitle,
        id: item.id,
        title: item.title,
        question: item.question,
        aim: item.aim,
        tags: item.tags,
        folderPath: "java",
        filePath: `java/${item.filename}`,
        filesCount: files.length,
        files: files
    };
});

const javaLabData = {
    university: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
    department: "Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    courseCode: "GR20 / CSE",
    courseTitle: "Java Programming Laboratory",
    academicYear: "2025-2026",
    tasksCount: builtTasks.length,
    tasks: builtTasks
};

const jsonStr = JSON.stringify(javaLabData, null, 2);
fs.writeFileSync(path.join(rootDir, 'java-data.json'), jsonStr, 'utf8');
fs.writeFileSync(path.join(javaDir, 'data.json'), jsonStr, 'utf8');

const jsContent = `/**
 * Java Programming Laboratory Portal Data
 * GRIET University Coursework - 31 Saved Solutions across Tasks 1 to 10
 */
window.JAVA_LAB_DATA = ${jsonStr};
`;
fs.writeFileSync(path.join(rootDir, 'java-data.js'), jsContent, 'utf8');
fs.writeFileSync(path.join(javaDir, 'data.js'), jsContent, 'utf8');

console.log(`PASS: Generated java-data.js & java-data.json with ${builtTasks.length} tasks!`);
