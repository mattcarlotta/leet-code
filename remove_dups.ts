const cases = {
    c1: [1, 1, 2],
    c2: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    c3: [1, 1],
}

function removeDuplicates(nums: number[]): number {
    const stack: number[] = nums
    for (let i = 0; i < stack.length - 1; i++) {
        const currentNum = stack[i];
        const nextNum = stack[i + 1];
        if (currentNum === nextNum) {
            nums.splice(i, 1);
            i--;
        }
    }

    return stack.length;
};


for (const [key, value] of Object.entries(cases)) {
    const res = removeDuplicates(value);
    console.log(`${key}: ${value}, res: ${res}`);
}
