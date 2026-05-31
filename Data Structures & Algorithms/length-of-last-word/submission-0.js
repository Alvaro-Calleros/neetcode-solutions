class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let count = 0;
        for(let i = s.length -1; i>=0; i--)
        {
            if(s[i] != " ")
            {
                let j = i;
                while (s[j] != " ")
                {
                    count ++;
                    j--;
                }
                return count;
            }
        }
    }
}
