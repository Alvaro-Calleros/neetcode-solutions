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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let N = 0;
        let cur = head;
        while (cur) {
            N++;
            cur = cur.next;
        }

        const removeIndex = N - n;
        if (removeIndex === 0) {
            return head.next;
        }
        
        let curr = head;
        for (let i = 0; i<n; i++)
        {
            
            if (i + 1 === removeIndex)
            {
                curr.next = curr.next.next;
                break;
            }
            curr = curr.next;
        }
        return head;
    }
}
