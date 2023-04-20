const cases = {
    c1: 5,
    c2: 2,
    c3: 7
}

const nums = [1, 3, 5, 6];

/*

    Binary search...

    function searchInsert(nums: number[], target: number): number {
        let left = 0
        let right = nums.length

        while (left <= right) {

            const mid = Math.floor((left + right) / 2)

            if (target === nums[mid]) return mid

            if (target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }   
        }

        return left
    };
 */


function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        // if the index equals the target
        if (nums[i] === target) {
            return i;
            // if the target greater than the current index & less than next num
        } else if (nums[i] > target && target < nums[i + 1] || nums[i] > target && !nums[i + 1]) {
            return i;
            // if the target greater than the available indexes
        } else if (i === nums.length - 1) {
            return i + 1;
        }

    }
    return 0;

};

for (const [key, value] of Object.entries(cases)) {
    const res = searchInsert(nums, value);
    console.log(`${key}: ${value}, res: ${res}`);
}

