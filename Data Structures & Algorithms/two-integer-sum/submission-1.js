class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // mapa 

        // ciclo sobre el arreglo
            // sacamos numActual
            // sacamos target - numActual, para buscar su complemento
            // buscamos complemento en el mapa
                // si esta en el mapa. return complemento, i

        const map = new Map;

        for (let i = 0; i<nums.length; i++)
        {
            const num = nums[i];
            const compliment = target - num;

            if(map.hasOwnProperty(compliment))
            {
                return [map[compliment], i];
            }

            map[num]=i;
        }
        return [];
    }
    
}
