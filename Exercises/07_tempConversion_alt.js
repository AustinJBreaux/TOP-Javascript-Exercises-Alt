const fToC = function converterFC(ftoCTemp){
    a = ftoCTemp - 32;
    cFromFTemp = a * (5/9);
    cFromFTemp = Math.round(cFromFTemp * 10) / 10;
    return cFromFTemp;
}

const cToF = function converterCF(ctoFTemp){
    b = ctoFTemp * 1.8;
    fFromCTemp = b + 32;
    fFromCTemp = Math.round(fFromCTemp * 10) / 10;
    return fFromCTemp;
}