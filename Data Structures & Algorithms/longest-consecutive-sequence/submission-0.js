class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let curr = 0;
        nums.sort;
        for (let i = 1; i < nums.length; i++)
        {
            if (curr >= longest) longest = curr;
            if (nums[i] !== nums[i-1]+1)
            {
                curr = 0;
            } else
            {
                curr++;
            }
        }
        return longest;
    }
}
