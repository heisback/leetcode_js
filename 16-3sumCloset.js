/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if( nums.length < 3 || target === undefined)
        return ;
    nums.sort((a,b)=>{
        return a-b;
    })
    let closest = nums[0] + nums[1] + nums[2];
    let minDiff = Math.abs(closest - target);
    for(var i = 0; i < nums.length-2; i++){
        let l = i+1;
        let m = nums.length - 1;
        while (l < m){
            let sum = nums[i] + nums[l] + nums[m];
            let diff = Math.abs(sum - target);
            if(diff < minDiff){
                minDiff = diff;
                closest = sum;
            }
            if(sum>target){
                m--;
            }else{
                l++;
            }
        }
    }
    return closest;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));