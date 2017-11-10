var longestCommonPrefix = function(strs) {
    if(strs.length == 0)
        return '';
    let ret = [];
    min_len =  strs[0].length;
    for(let i=1;i<strs.length;i++){
        min_len = Math.min(min_len,strs[i].length);
    }
    for(let i=0;i<min_len;i++){
        let char = strs[0][i];
        let j = 0;
        for( ;j<strs.length;j++){
            if(strs[j][i]!=char)
                break;
        }
        if(j===strs.length)
            ret.push(char);
        else
            break;
    }
    return ret.join('');
};
console.log(longestCommonPrefix(['ab','abc']))