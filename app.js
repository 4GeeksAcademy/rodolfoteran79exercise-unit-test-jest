// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}




// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Función para convertir de dólares a yenes
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

// Función para convertir de euros a dólares
const fromEuroToDollar = (euros) => {
    const dollars = euros * oneEuroIs.USD;
    return dollars;
}

// Función para convertir de yenes a libras
const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}


module.exports = { sum,fromDollarToYen, fromEuroToDollar, fromYenToPound  };
