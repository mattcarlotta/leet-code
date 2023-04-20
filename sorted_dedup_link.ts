class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// const list1 = new ListNode(1, new ListNode(1, new ListNode(2, null)));
// [1,1,1,1,3,3]
const list1 = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(3, null))))));

function deleteDuplicates(list1: ListNode | null): ListNode | null {
    if (!list1) return null;

    const acc: number[] = []
    while (list1) {
        const value = list1?.val;

        if (!acc.includes(value)) {
            acc.unshift(value);
        }

        list1 = list1?.next || null;
    }

    let list: ListNode | null = null;
    acc.forEach(v => {
        list = new ListNode(v, list);
    })

    return list;
};

const result = deleteDuplicates(list1);
console.log(JSON.stringify(result, null, 2));


