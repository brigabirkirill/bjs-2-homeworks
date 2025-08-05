function parseCount(number) {
    if (isNaN(Number.parseFloat(number))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseFloat(number);
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
      } catch (error) {
        return error;
      }
}
    
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let p = 0.5 * (this.a + this.b + this.c);
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (Error) {
        return {
            get area() {return "Ошибка! Треугольник не существует"},
            get perimeter() {return "Ошибка! Треугольник не существует"}
        }
    }
}