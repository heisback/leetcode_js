/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let v = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let rv = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let ret = [];
    for(let i = 0 ;i<v.length;i++){
        while(num>=v[i]){
            num -=v[i];
            ret.push(rv[i]);
        }
    }
    return ret.join('');
};