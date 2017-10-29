/**
 * Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */
var lengthOfLongestSubstring = function(s) {
    if(!s)
        return 0 ;
    if( s.length==1)
        return 1;
    let map = new Map();
    map.set(s.charAt(0),1)
    let si = 0 ;
    let e = 1 ;
    let max = 1;
    for(let e=1;e<s.length;e++){
        if(map.get(s.charAt(e))==1){
            while(s.charAt(si)!=s.charAt(e) && si<e){
                map.set(s.charAt(si),0)
                si++;
            }
            si++;
        }else{
            map.set(s.charAt(e),1)
            max = Math.max(max,e-si+1)
        }
    }
    return max;

};
console.log(lengthOfLongestSubstring('c'));