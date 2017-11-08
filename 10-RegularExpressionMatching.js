/**
 * mplement regular expression matching with support for '.' and '*'.

 '.' Matches any single character.
 '*' Matches zero or more of the preceding element.

 The matching should cover the entire input string (not partial).

 The function prototype should be:
 bool isMatch(const char *s, const char *p)

 Some examples:
 isMatch("aa","a") → false
 isMatch("aa","aa") → true
 isMatch("aaa","aa") → false
 isMatch("aa", "a*") → true
 isMatch("aa", ".*") → true
 isMatch("ab", ".*") → true
 isMatch("aab", "c*a*b") → true

 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let mem = [];
var isMatch = function(s, p) {
    for(let i=0;i<=s.length;i++){
        mem[i] = [];
        for(let j=0;j <=p.length;j++){
            mem[i][j] = false ;
        }
    }
    //console.log(mem);
    //console.log(mem[1][2])
    return dp(0,0,s,p);
};
var dp = function (i, j, s, p) {
    if(i>s.length){
        return false;
    }
    //console.log(mem[i][j])
    if(mem[i][j])
        return true;
    let ans = false;
    if(j===p.length){
         ans = i===s.length;
    }else{
        let first_match = (i<s.length && s.charAt(i) === p.charAt(j) || p.charAt(j) === '.')
        if( j+1<p.length && p.charAt(j+1)=='*'){
            ans = first_match && dp(i+1,j,s,p) || dp(i,j+2,s,p);
        }else{
            ans = first_match && dp(i+1,j+1,s,p);
        }
    }
    return mem[i][j] = ans;
}
console.log(isMatch('abc','a.sdfsdf*c'))