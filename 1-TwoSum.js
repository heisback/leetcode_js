/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ret = [];
    let map = new Map();
    for (let i=0;i<nums.length;i++){
        map.set(nums[i],i);
    }
    for(let i=0;i<nums.length;i++){
        let left = target - nums[i];
        let aimIndex = map.get(left);
        if(aimIndex!=undefined && aimIndex!=i){
            ret=[i,map.get(left)];
            return ret;
        }
    }
    return ret;
};


console.log(twoSum([3,2,4],6))