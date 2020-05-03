function getTemp(arr, i, j) {
    if (i < 0 || j < 0) {
        return 0;
    } 
    return arr[i][j];
    
}
const longestCommonSubsequence = function(text1, text2) {
    if (!text1.length || !text2.length) {
        return 0;
    }
    const len1 = text1.length;
    const len2 = text2.length;
    let res = [];
    let result = 0;
    for (let i = 0; i < len1; i ++) {
        res[i] = [];
        for(let j = 0; j < len2; j ++) {
            if (text2[j] === text1[i]) {
                res[i][j] = getTemp(res, i - 1, j - 1) + 1;
                result = res[i][j];
            } else {
                res[i][j] = Math.max(getTemp(res, i - 1, j), getTemp(res, i, j - 1));
                result = res[i][j];

            }
        }
    }
    return result;
};
console.log(longestCommonSubsequence('abcde', 'ace'));