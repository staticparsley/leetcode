const isPalindrome = (str) => {
    if(str[0] !== str[str.length-1]) return false;

    function reverse(str) {
        if(str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    }

    if(reverse(str) === str) return true;
    return false;
}

console.log(isPalindrome('WhoohW'));