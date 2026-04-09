class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for (let s of strs) // O(m*n*logn) = timeC; O(n*m) space
        {
            const sortedS = s.split('').sort().join('');

            if (!res[sortedS])
            {
                res[sortedS] = [];
            }

            res[sortedS].push(s);
        }
        return Object.values(res);
    }
}
