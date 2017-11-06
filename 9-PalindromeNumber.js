/**
 * Determine whether an integer is a palindrome. Do this without extra space.

 click to show spoilers.

 Some hints:
 Could negative integers be palindromes? (ie, -1)

 If you are thinking of converting the integer to string, note the restriction of using extra space.

 You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

 There is a more generic way of solving this problem.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)
        return false;
    else if(x<10)
        return true;
    else{
        let div = 10;
        while(x/div>10){
            div*=10;
        }
        while (x>10 && x%10 == Math.floor(x/div)){
            x=x%div;
            div=div/100;
            x=Math.floor(x/10);
        }
        return x<10 && div==1 || x==0;
    }

};
//console.log(-11%10)
console.log(isPalindrome(1458558541))