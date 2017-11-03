/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

 P   A   H   N
 A P L S I I G
 Y   I   R
 And then read line by line: "PAHNAPLSIIGYIR"
 Write the code that will take a string and make this conversion given a number of rows:

 string convert(string text, int nRows);
 convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 题目的意思是把字符串上下上下走之字形状,然后按行输出,比如包含数字0~22的字符串, 给定行数为5,走之字形如下:
 0              8               16
 1          7   9           15  17
 2      6       10      14      18      22
 3  5           11  13          19  21
 4              12              20
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(!s || s.length<=2 || numRows<=1)
        return s;
    let arr = [];
    for(let i=0;i<numRows;i++)
        arr[i] = [];
    let sublen = numRows*2-2;
    let count = Math.ceil(s.length/sublen);
    let sum = 0 ;
    for(let i=0;i<count;i++){
        for(let j=0;j<numRows && sum<s.length;j++){
            arr[j].push(s.charAt(sum++))
        }
        for(let j=numRows-2;j>0 && sum<s.length;j--){
            arr[j].push(s.charAt(sum++))
        }
    }
    let ret = [];
    for(let i=0;i<arr.length;i++){
        let subarr = arr[i];
        for(let j=0;j<subarr.length;j++){
            ret.push(subarr[j])
        }
    }
    return ret.join('');
};
console.log(convert('A',1))