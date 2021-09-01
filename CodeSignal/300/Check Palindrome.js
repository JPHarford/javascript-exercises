// Exercise URL: https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function checkPalindrome(inputString) {

    palindrome = true;

    for(i = 0; i < inputString.length; i++)
    {
        palindrome = palindrome && 
            inputString.charAt(i) == inputString.charAt(inputString.length - 1 - i);
    }
    
    return palindrome;
}
