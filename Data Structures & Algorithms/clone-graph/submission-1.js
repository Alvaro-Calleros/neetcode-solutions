class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        
        if (!node) return null;

        const old2New = new Map();
        
        const dfs = (curr) => {

            if (old2New.has(curr)) return old2New.get(curr);

            let copy = new Node(curr.val);
            old2New.set(curr, copy);

            for(const neighbor of curr.neighbors)
            {
                copy.neighbors.push(dfs(neighbor));
            }
            return copy;

        }
        // 4. Start the process
        return dfs(node);
    }
}