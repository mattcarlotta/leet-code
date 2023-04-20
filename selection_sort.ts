function findSmallest(arr: number[]): number {
    let smallest = arr[0]
    let i = 0;

    for (const index in arr) {
        if (arr[index] < smallest) {
            smallest = arr[i];
            i = +index
        }
    }

    return i;
}

function selectionSort(list: number[]): number[] {
    const acc: number[] = [];

    while (list.length > 0) {
        const smallestIndex = findSmallest(list);
        acc.push(list.splice(smallestIndex, 1)[0]);
    }

    return acc;
}

const unsortedArr = [5, 3, 6, 2, 10, 1, 8, 8, 4, 0];
const result = selectionSort(unsortedArr);

console.log({ result });
