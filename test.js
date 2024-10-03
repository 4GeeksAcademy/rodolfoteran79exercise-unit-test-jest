// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// segunda pruba
test('adds 33 + 67 to equal 100', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(33, 67);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(100);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(1);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(1)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 146.26168224299064 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1);

    
    const expectedtoYen = 1 * 146.26168224299064;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(expectedtoYen); 
})


test("One yen should be 0.0055591054313099035 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromYenToPound(1);

    
    const expectedtoPound = 1 * 0.0055591054313099035;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe(expectedtoPound); 
})

