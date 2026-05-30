/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];

        function organizerDFS(root, level){
            if (!root) return;

            if (res.length === level)
            {
                res.push([]);
            }

            res[level].push(root.val);
            organizerDFS(root.left, level +1);
            organizerDFS(root.right, level +1);
        }
    
        organizerDFS(root, 0);
        return res;
    }
}
