const cases = {
    c1: { nums: [5, 7, 7, 8, 8, 10], target: 8 },
    // c2: { nums: [5, 7, 7, 8, 8, 10], target: 6 },
    // c3: { nums: [], target: 0 },
    // c4: { nums: [1], target: 1 },
    // c5: { nums: [2, 2], target: 2 },
}

function findHigh(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = nums[mid];

        if (guess === target && nums[mid + 1] !== target) {
            return mid;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

function findLow(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = nums[mid];

        if (guess === target && nums[mid - 1] !== target) {
            return mid;
        } else if (guess >= target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

function searchRange(nums: number[], target: number): number[] {
    return [findLow(nums, target), findHigh(nums, target)];
}

for (const [key, value] of Object.entries(cases)) {
    const res = searchRange(value.nums, value.target);
    console.log(`${key}: ${JSON.stringify(res, null, 2)}`);
}

