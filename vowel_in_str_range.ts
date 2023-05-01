const cases = {
    c1: { words: ["are", "amy", "u"], left: 0, right: 2 },
    c2: { words: ["hey", "aeo", "mu", "ooo", "artro"], left: 1, right: 4 },
    // c2: { nums: [5, 7, 7, 8, 8, 10], target: 6 },
    // c3: { nums: [], target: 0 },
    // c4: { nums: [1], target: 1 },
    // c5: { nums: [2, 2], target: 2 },
}

function vowelStrings(words: string[], left: number, right: number): number {
    const s = new Set(['a', 'e', 'i', 'o', 'u']);
    let ans = 0;
    while (left <= right) {
        if (s.has(words[left][0]) && s.has(words[left][words[left].length - 1])) {
            ans++;
        }
        left++;
    }
    return ans;
};

for (const [key, value] of Object.entries(cases)) {
    const res = vowelStrings(value.words, value.left, value.right);
    console.log(`${key}: ${JSON.stringify(res, null, 2)}`);
}

