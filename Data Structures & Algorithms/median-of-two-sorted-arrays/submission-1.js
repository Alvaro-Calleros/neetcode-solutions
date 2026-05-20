class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        function mergeSorted(nums1, nums2) {
            const merged = [];
            let i = 0, j = 0;

            while (i < nums1.length && j < nums2.length) {
                if (nums1[i] <= nums2[j]) {
                    merged.push(nums1[i++]);
                } else {
                    merged.push(nums2[j++]);
                }
            }

            while (i < nums1.length) merged.push(nums1[i++]);
            while (j < nums2.length) merged.push(nums2[j++]);

            return merged;
        }

        const merged = mergeSorted(nums1, nums2); 
        const totalLen = merged.length;
        
        if (totalLen % 2 === 0) {
            return (merged[totalLen / 2 - 1] + merged[totalLen / 2]) / 2.0;
        } else {
            return merged[Math.floor(totalLen / 2)];
        }
    }
}
