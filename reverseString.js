var reverseString = function(s) {
    let temporaryString;
    let sLength = s.length;
    for (let i = 0; i < sLength/2; i++)
    {
    temporaryString = s[i];
    s[i] = s[sLength-i-1];
    s[sLength-i-1] = temporaryString;
    }
};