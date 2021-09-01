// Exercise URL: https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ/

function shapeArea(n) {
    
    if(n == 1) return 1;
    
    return shapeArea(n - 1) + 4 * (n - 1);
}
