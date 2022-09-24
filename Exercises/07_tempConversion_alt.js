const fToC = function converterFC(fTemp){
    a =fTemp - 32;
    cTemp = a * (5/9);
    cTemp = Math.round(cTemp * 10) / 10;
    return cTemp;
}

