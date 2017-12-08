/**
 * Given a digit string, return all possible letter combinations that the number could represent.

 A mapping of digit to letters (just like on the telephone buttons) is given below.



 Input:Digit string "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
let numsArray = [
    [' '],
    [''],
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z'],
];
var letterCombinations = function(digits) {
    if(!digits)
        return [];
    let ret = generateCombinations(digits);
    return ret;
};
var generateCombinations = function(digits) {
    let ret  =  [];
    if(digits.length==1){
        return numsArray[parseInt(digits)]
    }else {
        let c = digits.charAt(0);
        let carray = numsArray[parseInt(c)];
        let subres = generateCombinations(digits.slice(1));
        for(var i=0;i<carray.length;i++){
            for(var j=0;j<subres.length;j++){
                ret.push(carray[i]+subres[j]);
            }
        }
    }
    return ret;
}
console.log(letterCombinations('123456'));