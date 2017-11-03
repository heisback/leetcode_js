/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<2)
        return s;
    let ret = '';
    let pstr = '';
    for(let i=0;i<s.length;i++){
        if(ret.length>=s.length-i)
            break;
        pstr = findLongestPalindrome(s,i);
        console.log('pstr:',pstr);
        //console.log('pstr.length:',pstr.length);
        if(pstr.length>ret.length)
            ret = pstr;
    }
    return ret;
};
var findLongestPalindrome = function (s,ss) {
    for(let e=s.length-1;e>=ss;e--){
      if(isPalindrome(s,ss,e))
          return [s.substring(ss,e+1),e];
    }
    return ['',0];
};
var isPalindrome = function (s,ss,se) {
    while (ss<=se){
        if(s.charAt(ss++)!==s.charAt(se--))
            return false
    }
    return true;
};
let max = '';
var longestPalindrome1 = function (s) {
    for(let i=0;i<s.length;i++){
        let substr = findPalindrome1(s,i)
        if(substr.length>max.length)
            max = substr;
    }
    return max;
}
var findPalindrome1 = function (s,ss) {
    let  substr1 = '';
    if(ss*2+1>max.length)
      substr1 = findOddPalindrome(s,ss);
    let substr2 = '';
    if(ss*2+2>max.length)
        substr2 = findEvenPalindrome(s,ss);
    let substr3 = findSamePalindrome(s,ss);
    //console.log('i:',ss,'1:',substr1,'2:',substr2,'3:',substr3);
    return substr1.length>substr2.length?(substr1>substr3?substr1:substr3):(substr2>substr3?substr2:substr3);
}
var findOddPalindrome = function (s,ss) {
    let l = ss,h=ss;
    while (l-1>=0 && h+1<=s.length-1 && s.charAt(l-1)===s.charAt(h+1)){
        --l;
        ++h;
    }
    return s.substring(l,h+1);
};
var findEvenPalindrome = function (s,ss) {
    if(s.charAt(ss)!=s.charAt(ss+1) || ss==s.length-1)
        return '';
    let l = ss,h=ss+1;
    while (l-1>=0 && h+1<=s.length-1 && s.charAt(l-1)===s.charAt(h+1)){
        --l;
        ++h;
    }
    return s.substring(l,h+1);
};
var findSamePalindrome = function (s,ss) {
    if(ss===s.length-1)
        return '';
   let e = ss+1;
   while (e<s.length && s.charAt(ss)===s.charAt(e)){
       //console.log('ss,e:',ss,e);
       e++;
   }
   return s.substring(ss,e);
}
console.log(longestPalindrome1('12342324'));
console.log(longestPalindrome1('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));