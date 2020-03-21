let data = 42;

let myName; //this infers as any

myName = "Paul";
const multiply = (x: number, y: number): number => {
    return x*y;
}

export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;  //? specifies optional
}

const car1: ICar = {
    color: 'Blue',
    model: 'VW'
}
const car2: ICar = {
    color: 'Red',
    model: 'BMW',
    topSpeed: 200
}
export const cars = [car1, car2];

