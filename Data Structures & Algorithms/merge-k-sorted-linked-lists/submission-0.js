/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;

        while (lists.length > 1)
        {
            const mergedLists = [];

            for(let i = 0; i < lists.length; i+=2)
            {
                const l1 = lists[i];
                
                const l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
                
                mergedLists.push(this.mergeTwoLists(l1, l2));
            }
            lists = mergedLists;
        }
        return lists[0];
    }
     /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0);
        let node = dummy;

        while (list1 && list2)
        {
            if (list1.val < list2.val)
            {
                node.next = list1;
                list1 = list1.next;

            } else
            {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next;
        }

        if (list1)
        {
            node.next = list1;
            
        } else if (list2)
        {
            node.next = list2;
        }

        return dummy.next;
    }
}