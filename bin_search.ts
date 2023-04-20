function binarySearch(list: number[], item: number): number {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.trunc((low + high) / 2);
        const guess = list[mid];

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

const list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const index = binarySearch(list, parseInt(process.argv[2] || '-1', 10));

console.log({ index });
