function longestSubstringWithUniqueChars(txt) {
    var chars = txt.split('');
    var currChar;
    var str = "";
    var longestString = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) 
    {
        currChar = chars[i];
        if (!hash[chars[i]]) 
        { 
            str += currChar; 
            hash[chars[i]] = {index:i};
        }
        else 
        {
            if(longestString.length <= str.length)
            {
                longestString = str;
            }
            var prevDupeIndex = hash[currChar].index;
            var strFromPrevDupe = txt.substring(prevDupeIndex + 1, i);
            str = strFromPrevDupe + currChar;
            hash = {};
            for (var j = prevDupeIndex + 1; j <= i; j++) {
                hash[txt.charAt(j)] = {index:j};
            }
        }
    }
    return longestString.length > str.length ? longestString : str;
}

console.log(longestSubstringWithUniqueChars('awdecbie'));