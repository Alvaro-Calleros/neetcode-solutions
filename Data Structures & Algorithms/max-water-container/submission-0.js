class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let max = 0, left = 0, right = heights.length - 1; // we use 2 pointers to find the maximum area

    while (left < right) { // we iterate until the left pointer is less than the right pointer
        const area = Math.min(heights[left], heights[right]) * (right - left);
        if (area > max) max = area; // each time we find a larger area, we update max
        if (heights[left] < heights[right]) left++;
        else right--;
    }
    return max; //after looping through all possible areas, we return the maximum found
    }
}
