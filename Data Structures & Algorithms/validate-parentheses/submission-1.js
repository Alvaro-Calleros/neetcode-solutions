class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {


        const stack = [];

        const closed2Open = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        };

        for (let char of s)
        {
            if(closed2Open[char])
            {
                if (stack.length > 0 && stack[stack.length - 1] == closed2Open[char])
                {
                    stack.pop();

                } else
                {
                    return false;
                }
            } else
            {
                stack.push(char);
            }

            
        }
        return stack.length === 0;
    }
}
