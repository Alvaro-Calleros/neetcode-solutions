class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) 
    {
        const set = new Set();
        
        // [1, 2, 3, 4]
        for(let num of nums)
        {
            if(set.has(num))
            {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}
