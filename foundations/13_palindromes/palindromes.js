const palindromes = function (string) {
    let sanitizedString = string.toLowerCase().replaceAll(" ", "")
    for (let i = 0, j = sanitizedString.length - 1; i <= j;) {
        if ((sanitizedString.charCodeAt(i) < 97 || sanitizedString.charCodeAt(i) > 122) && (sanitizedString.charCodeAt(i) < 48 || sanitizedString.charCodeAt(i) > 57)) {
            i++;
        }
        else if ((sanitizedString.charCodeAt(j) < 97 || sanitizedString.charCodeAt(j) > 122) && (sanitizedString.charCodeAt(j) < 48 || sanitizedString.charCodeAt(j) > 57)) {
            j--;
        }
        else if (sanitizedString[i] !== sanitizedString[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
