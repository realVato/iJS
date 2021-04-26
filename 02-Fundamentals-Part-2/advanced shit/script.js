`use strict`

const mark = {
    name: 'Mark',
    height: 1.69,
    weight: 75,

    calcBMI: function() {
        this.BMI = this.weight / (this.height * 2)
        return this.BMI
    }
}

mark.calcBMI()
console.log(mark.BMI)

const john = {
    name: 'John',
    height: 1.93,
    weight: 95,

    calcBMI: function() {
        this.BMI = this.weight / (this.height * 2)
        return this.BMI
    }
}

john.calcBMI()
console.log(john.BMI)


const resultBMI = (a, b) => {
    return a > b ? console.log(`Mark has higher BMI`) : a < b ? console.log(`John has higher BMI`) : console.log(`Mark and John have the same BMI`)
}

resultBMI(mark.calcBMI(), john.calcBMI())