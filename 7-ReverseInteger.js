/**
 * Given a 32-bit signed integer, reverse digits of an integer.

 Example 1:

 Input: 123
 Output:  321
 Example 2:

 Input: -123
 Output: -321
 Example 3:

 Input: 120
 Output: 21
 Note:
 Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x>-10 & x<10 )
        return x;
    let max = Math.pow(2,31);
    //console.log(max);
    let ax = Math.abs(x);
    let flag = x/ax;
    let ret = 0 ;
    while(ax>0){
        ret= ret*10+ax%10;
        ax=Math.floor(ax/10);
    }
    ret *= flag;
    if(ret>=max || ret<= -max)
        ret = 0;
    return ret;
};
console.log(reverse(1534236469))
console.log(reverse(153423))