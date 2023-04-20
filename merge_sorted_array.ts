
const cases = {
    c1: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
    c2: { nums1: [1], m: 1, nums2: [], n: 0 },
    c3: { nums1: [0], m: 0, nums2: [1], n: 1 },
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < nums1.length; i++) {
        if (!nums1[i]) {
            nums1.pop();
            i--;
        }
    }
    nums2.forEach(n => {
        if (n) nums1.push(n);
    })

    nums1.sort((a, b) => a - b);
};

for (const [key, value] of Object.entries(cases)) {
    merge(value.nums1, value.m, value.nums2, value.n);
}

