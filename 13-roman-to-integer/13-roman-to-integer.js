const romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = romans[s[s.length - 1]];
    for (let i = s.length - 2; i >= 0; i--) {
        if (romans[s[i]] < romans[s[i+1]]) res -= romans[s[i]];
        else res += romans[s[i]];
    }
    return res;
};