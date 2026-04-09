/**
 * // Definition for a Node.
 * class Node {
 * constructor(val = 0, neighbors = []) {
 * this.val = val;
 * this.neighbors = neighbors;
 * }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        
        const old2New = new Map();

        if (!node) return null;

        const dfs = (curr) => { 
            
            if (old2New.has(curr)) {
                return old2New.get(curr);
            }

            let copy = new Node(curr.val);
            
            old2New.set(curr, copy);

            for (const neighbor of curr.neighbors) {

                copy.neighbors.push(dfs(neighbor));
            }
            
            return copy;
        }
        
        return dfs(node);
    }
}