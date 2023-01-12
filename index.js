// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }
get countSides() {
    return this.array.length

}
get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
    sum += this.array[i];
    }
    return sum
}
}

class Triangle extends Polygon {
    get isValid() {
        const [a,b,c] = this.array       
   const con1 = a + b > c;
   const con2 = b + c > a;
   const con3 = c + a > b;
   if ((con1 && con2 && con3) === true) {
    return true
   } else {
    return false
   }
};
    }
class Square extends Polygon {
    
    get area() {
        const [a,b,c,d]= this.array
        return a*b


    }
    get isValid() {
        const [a,b,c,d]= this.array
        if(a===b && b === c && c === d) {
            return true
        } else {
            return false
        }
    }
}

