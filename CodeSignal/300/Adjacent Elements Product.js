// Exercise URL: https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

function adjacentElementsProduct(inputArray) {

    largest = inputArray[0] * inputArray[1];
    
    for(i = 1; i < inputArray.length - 1; i++)
    {
        product = inputArray[i] * inputArray[i + 1];
        
        if(product > largest) largest = product; 
    }
    
    return largest;
}
