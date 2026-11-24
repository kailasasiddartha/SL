import java.util.LinkedList;
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
