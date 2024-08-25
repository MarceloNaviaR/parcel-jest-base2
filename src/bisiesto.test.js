import esBisiesto from "./bisiesto.js";

test('2000 es un año bisiesto (divisible por 400)', () => {
    expect(esBisiesto(2000)).toBe(true);
});

test('1900 no es un año bisiesto (divisible por 100 pero no por 400)', () => {
    expect(esBisiesto(1900)).toBe(false);
});

test('2016 es un año bisiesto (divisible por 4 pero no por 100)', () => {
    expect(esBisiesto(2016)).toBe(true);
});

test('2017 no es un año bisiesto (no divisible por 4)', () => {
    expect(esBisiesto(2017)).toBe(false);
});

test('2100 no es un año bisiesto (divisible por 100 pero no por 400)', () => {
    expect(esBisiesto(2100)).toBe(false);
});
