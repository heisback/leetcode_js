/**
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 Note: You may not slant the container and n is at least 2.
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ret = 0;
    let l = 0,h = height.length-1;
    while (l<h){
        let distance = h-l;
        let water = height[l]>height[h] ? height[h--]*distance : height[l++] * distance;
        ret = Math.max(ret,water);
    }
    return ret;
};
console.log(maxArea([1,5,3,3,5]))