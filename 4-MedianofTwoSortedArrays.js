/**
 There are two sorted arrays nums1 and nums2 of size m and n respectively.

 Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

 Example 1:
 nums1 = [1, 3]
 nums2 = [2]

 The median is 2.0
 Example 2:
 nums1 = [1, 2]
 nums2 = [3, 4]

 The median is (2 + 3)/2 = 2.5
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    let i=0,j=0;

    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            arr.push(nums1[i]);
            i++;
        }else{
            arr.push(nums2[j]);
            j++;
        }
    }
    while(i<nums1.length){
        arr.push(nums1[i++]);
    }
    while(j<nums2.length){
        arr.push(nums2[j++]);
    }
    //consolelog(arr);
    if(arr.length%2==1){
        return arr[Math.floor(arr.length/2)];
    }else{
        return (arr[arr.length/2]+arr[arr.length/2-1])/2;
    }
};
var findMedianSortedArrays1 = function(nums1, nums2) {
    let arr = [];
    let i=0,j=0;
    let l = nums1.length+nums2.length;
    let aiml = l%2==1?Math.ceil(l/2):l/2+1;
    //consolelog(aiml);
    while(i<nums1.length && j<nums2.length && i+j < aiml){
        if(nums1[i]<nums2[j]){
            arr.push(nums1[i]);
            i++;
        }else{
            arr.push(nums2[j]);
            j++;
        }
    }
    //consolelog(i,j);
    if(i+j <aiml){
        if(j==nums2.length){
            while (i<nums1.length && i+j<aiml){
                arr.push(nums1[i]);
                i++;
            }
        }else {
            while (j<nums2.length && i+j<aiml){
                arr.push(nums2[j]);
                j++;
            }
        }
    }
    //consolelog(i,j);
    //consolelog(arr);
    if(l%2==1){
        return arr[arr.length-1];
    }else {
        return (arr[arr.length-1]+arr[arr.length-2])/2;
    }
};
////consolelog([1,2,3].slice(-2,-1))
console.log(findMedianSortedArrays1([1,2],[3,4]));