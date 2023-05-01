function sum(arr: number[]): number {
    if (!arr.length) return 0

    const s = arr.shift() as number;

    return s + sum(arr);
}

const res = sum([2, 4, 6]);
console.log({ res });

function maxNumberInList(arr: number[]): number {
    if (!arr.length) return 0
    const firstNum = arr.shift() as number;

    if (arr.length === 2) return firstNum > arr[1] ? firstNum : arr[1];

    const maxNumber = maxNumberInList(arr);

    return firstNum > maxNumber ? firstNum : maxNumber;
}

const result = maxNumberInList([2, 8, 10, 11, 26]);
console.log({ result });
