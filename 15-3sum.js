/**
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 A solution set is:
 [
     [-1, 0, 1],
     [-1, -1, 2]
 ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b)=>{ //sort()函数默认字典序排序，比如[-4,-2,2,1].sort() = [-2,-4,1,2]
        return a-b;
    });
    for(let i = 0 ;i < nums.length ; i++){
        if(nums[i]>0)
            break;
        if(i > 0 && nums[i] == nums[i-1])
            continue;
        let aim = 0 - nums[i];
        let j = i+1;
        let k = nums.length - 1;
        while (j < k) {
            let sum  = nums[j] + nums[k];
            if( sum === aim){
                while(nums[j+1] === nums[j] && nums[k] === nums[k-1] && j<k){
                    j++;
                    k--;
                }
                res.push([nums[i],nums[j++],nums[k--]]);
            }else if(sum < aim){
                j++;
            }else {
                k--;
            }
        }
    }
    return res;
};
console.log(threeSum([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0]));