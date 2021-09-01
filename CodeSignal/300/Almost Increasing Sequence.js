// Exercise URL: https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function almostIncreasingSequence(sequence) {
    

    var j = sequence.length;
    var i = j;
    
    for(i; i--;)
    {
        for
        (
            j; 
            j-- &&
                j == i ? true : sequence[j == i + ] > sequence[j - 1]; 
        ){}
        
        if(j == 0) return true;
        j = sequence.length;
    }
    
    return false;
}
