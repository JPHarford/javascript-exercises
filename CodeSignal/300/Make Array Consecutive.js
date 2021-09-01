// Exercise URL: https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function makeArrayConsecutive2(statues) {
    
    missing = 0;
    found = false;
    least = statues[0];
    greatest = statues[0];
    
    for(i = 1; i < statues.length; i++)
    {
        if(statues[i] < least) least = statues[i];
        if(statues[i] > greatest) greatest = statues[i];
    }
    
    for(i = least + 1; i < greatest; i++)
    {
        for(j = 0; j < statues.length; j++)
        {
            found = found || statues[j] == i;
        }
        
        if(!found) missing += 1;
        found = false;
    }
    
    return missing;
}
