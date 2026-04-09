class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const close2Open = {
            ')' : '(',
            ']' : '[',
            '}' : '{',
        };
        

        for (let c of s)
        {
            if (close2Open[c])
            {
                if (stack.length > 0 && stack[stack.length-1] == close2Open[c])
                {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
