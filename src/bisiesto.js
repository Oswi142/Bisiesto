function esBisiesto(anio) {
    if (anio % 400 === 0) {
        return "Es bisiesto";
    } 
    else 
    {
        return "No es bisiesto";
    }
}

export default esBisiesto;