class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
// const list1 = new ListNode(2, null);
// const list2 = new ListNode(1, null);

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const acc: number[] = [];
    while (list1 || list2) {
        const value1 = list1?.val;
        const value2 = list2?.val;

        if (typeof value1 === "number") acc.unshift(value1);
        if (typeof value2 === "number") acc.unshift(value2);

        list1 = list1?.next || null;
        list2 = list2?.next || null;
    }

    if (!acc.length) return null;

    const sorted_acc = acc.sort((a, b) => a > b ? -1 : 0);

    let list: ListNode | null = null;
    for (let i = 0; i <= sorted_acc.length - 1; i++) {
        list = new ListNode(acc[i], list);
    }

    return list;
};

const result = mergeTwoLists(list1, list2);
console.log(JSON.stringify(result, null, 2));

