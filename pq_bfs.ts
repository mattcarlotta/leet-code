interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}

class Queue<T> implements IQueue<T> {
    private storage: T[] = [];
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    enqueue(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }

    size(): number {
        return this.storage.length;
    }
}

function findSeller(query: string) {
    const pq = new Queue<string>(5);
    const graph = new Map<string, string[]>();
    graph.set("you", ["alice", "bob", "claire"]);
    graph.set("bob", ["anuj", "peggy"]);
    graph.set("alice", ["peggy"]);
    graph.set("claire", ["thom", "jonny"]);
    graph.set("anuj", []);
    graph.set("peggy", []);
    graph.set("thom", []);
    graph.set("jonny", []);

    const searched = new Set();
    const iter = graph.values();
    let result = iter.next();
    while (!result.done) {
        const values = result.value;
        for (let i = 0; i < values.length; ++i) {
            pq.enqueue(values[i]);
        }

        while (pq.size()) {
            const person = pq.dequeue();
            if (person && !searched.has(person)) {
                searched.add(person);

                if (person[person.length - 1] === query) {
                    return person;
                }
            }
        }

        result = iter.next()
    }

    return `Unable to locate a seller using query: '${query}'`;

}

const result = findSeller("m");
console.log({ result });

