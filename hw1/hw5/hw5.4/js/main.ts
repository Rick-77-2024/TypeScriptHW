// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const squareOfCylinder = (r: number, h: number): number =>
    2 * Math.PI * r * h + 2 * Math.PI * r * r;

const r: number = 8;
const h: number = 16;
const areaCylinder: number = squareOfCylinder(r, h);
console.log('Square of cylinder: ' + areaCylinder);
