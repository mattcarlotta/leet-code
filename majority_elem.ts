const cases = {
    c1: [3, 3, 4],
    c2: [3, 2, 3]
}

function majorityElement(nums: number[]): number {
    const record: Record<string, number> = {};
    for (const n of nums) {
        if (!record[n]) {
            record[n] = 1;
        } else {
            record[n] += 1;
        }
    }

    let result = [0, 0];
    for (const [key, value] of Object.entries(record)) {
        if (value > result[1]) result = [+key, value];
    }

    return result[0]
};

for (const [key, value] of Object.entries(cases)) {
    const res = majorityElement(value);
    console.log(`${key}: ${value}, res: ${res}`);
}


