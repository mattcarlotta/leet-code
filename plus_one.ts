const cases = {
    c1: [1, 2, 3],
    c2: [4, 3, 2, 1],
    c3: [9]
}


function plusOne(digits: number[]): number[] {
    let num = BigInt(digits.join(""));
    num++;

    return num.toString().split('').map(Number);
};

for (const [key, value] of Object.entries(cases)) {
    const res = plusOne(value);
    console.log(`${key}: ${value}, res: ${res}`);
}


