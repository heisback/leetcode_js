/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(!str)
        return 0;
    str = str.replace(/^\s+/g,'')
    let ret = 0;
    let flag = 1;
    let start = false;
    for(let i=0;i<str.length;i++){
        let char = str.charAt(i);
        if(char!='+' && char!='-' && char<'0' || char>'9'){
            if(i==0)
                return 0;
            if(!start)
                continue;
            break;
        }else{
            if(char=='-'){
                if(start)
                    break;
                flag = -1;
            }else if(char=='+'){
                if(start)
                    break;
            }else{
                ret = ret*10+parseInt(char);
            }
            start =  true;
        }
    }
    ret = ret*flag;
    let max = Math.pow(2,31);
    ret = ret >=max?max-1:ret;
    ret = ret <=-max?-max:ret;
    //console.log(max)
    return ret;
};
console.log(myAtoi(' +0 247'))
console.log(myAtoi('2147483647'))