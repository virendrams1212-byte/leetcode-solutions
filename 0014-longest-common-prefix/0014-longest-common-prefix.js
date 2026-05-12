/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let prefix = "";
    for(let i =0;i<strs[0].length;i++){
         let chars = strs[0][i]
         console.log(chars)
         for(let j=1;j<strs.length;j++){
             if(strs[j][i] !== chars){
                 return prefix;
             }
             
             }
         
         prefix +=chars
    }
    return prefix
};