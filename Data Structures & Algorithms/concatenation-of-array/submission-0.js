class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        let n = nums.length;
        let res = new Array(n*2);

        for(let i = 0; i<n; i++)
        {
            res[i] = nums[i];
        }

        for(let i = n; i<n*2; i++)
        {
            res[i] = nums[i-n];
        }
        return res;
    }
}
