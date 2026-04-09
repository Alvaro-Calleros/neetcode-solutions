class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let res = new Array(n).fill(1);

        // 1 [1, 2, 3, 4, 5] 1 -> nums

        // 24 [1, 1, 2, 6, 24] -> prefix

        // 120 [120, 60, 20, 5, 1] -> postfix

        //   [1, 1, 1, 1, 1] -> res

        for(let i = 1; i<n; i++) // prefix
        {
            res[i] = res[i-1] * nums[i-1];
        }

        let postfix = 1;

        for(let i = n-1; i>=0; i--) // postfix
        {
            res[i] *= postfix;
            postfix *= nums[i];
        }

        return res;
    }
}
