// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// const color1 = new Color(250, 100, 10)

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     rgb() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`
//     }
// }

// const c1 = new Color(255, 67, 89, "tomato")

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}


class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        this.livesLeft = livesLeft;
        super(name, age)
    }
    meow() {
        return "meow"
    }
}

class Dog extends Pet {
    bark() {
        return "bark"
    }
}