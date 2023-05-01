function quicksort(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    const pivot = arr[0];
    const lessArr: number[] = [];
    const greaterArr: number[] = [];

    for (let i = 1; i < arr.length; i++) {
        const n = arr[i];
        if (n < pivot) {
            lessArr.push(n);
        } else {
            greaterArr.push(n);
        }
    }

    return quicksort(lessArr).concat(pivot).concat(quicksort(greaterArr));
}

const test = [93, 85, 5, 43, 238, 9, 0, 8, 2, 7];
const result = quicksort(test);
console.log({ result });
