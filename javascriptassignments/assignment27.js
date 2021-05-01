function isPalindrome(str) 
{
    var rev = str.split("").reverse().join("");
    return str == rev;
}
    
function longestPalindrome(str){
    
    var maxLength = 0,
    maxp = '';
    
    for(var i=0; i < str.length; i++) 
    {
        var subs = str.substr(i, str.length);
    
        for(var j=subs.length; j>=0; j--) 
        {
            var subSubsStr = subs.substr(0, j);
            if (subSubsStr.length <= 1)
                continue;
    
            if(isPalindrome(subSubsStr))
            {
                if (subSubsStr.length > maxLength) 
                {
                    maxLength = subSubsStr.length;
                    maxp = subSubsStr;
                }
            }
        }
    }
    
    return maxp;
}

console.log(longestPalindrome('dagfewfabccbajutwejff76663536667asd'));