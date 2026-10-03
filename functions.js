// Question 1

function fullname() {
    let firstName = 'Idahosa'
    let lastName = 'Peter'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName 
}
console.log(fullname())

// Question  2

function fulName (firstName = 'John', lastName = 'Doe') {
    let space = ' '
    let newFullName = firstName + space + lastName
    return newFullName
}
console.log(fulName())

// Question 3

function addNewNumbers (numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(addNewNumbers(6,7))

// Question 4 

function areaOfRectangle() {
    let length = 6
    let width = 7
    let area = length * width
    return area
}
console.log(areaOfRectangle())

// Question 5

function perimeterOfRectangle() {
    let length = 12
    let width = 5 
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle())

// Question 6

function volumeOfRectPrism() {
    let length = 4
    let width = 4 
    let height = 4
    let volume = length * width * height
    return volume
} 
console.log(volumeOfRectPrism())

// Question 7

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(6))

// question 8

function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r
    return circumference
} 
console.log(circumOfCircle(11))

// question 9 

function substDensity() {
    let mass = 62
    let volume = 12
    let density = mass / volume
    return density
}
console.log(substDensity())

// question 10 

function speedOfObject() {
    let distance = 323
    let timeTaken = 12
    let speed = distance / timeTaken
    return speed
}
console.log(speedOfObject())

// question 11
function weightOfSubst() {
    let mass = 12
    let gravity = 9.81
    let weight = mass * gravity
    return weight
}
console.log(weightOfSubst())

// or

function weightOfSubs(mass, gravity) {
    let weight = mass * gravity
    return weight
}
console.log(weightOfSubs(15,9.81))

// question 12 

function convertCelciusToFahrenheit () {
    let oC = 25
    let oF = (oC * 9/5) + 32
    return oF
}
console.log(convertCelciusToFahrenheit())

// OR 

function convertCelsiusFahrenheit(oc) {
    let oF = (oc * 9/5) + 32
    return oF 
}
console.log(convertCelsiusFahrenheit(16))

// 13

function calculateBodyMass() {
    let height = Number(prompt('How tall are you')) * 0.3048
    let weight = Number(prompt('How many KG do you weigh'))
    let bmi = weight / (height * height)
    return bmi 

} 
let bmi = calculateBodyMass()

if (bmi < 18.5) {
    console.log('You are currently underweight EAT UP!')
    alert('You are currently underweight EAT UP!')
}
else if (bmi <= 24.9) {
    console.log('Your weight is Normal, Keep It Up')
    alert('Your weight is Normal, Keep It Up')
}
else if (bmi <= 29.9) {
    console.log('You are overweight, Go Burn Some Calories!')
    alert('You are overweight, Go Burn Some Calories!')
}
else {
    console.log('You are OBESE!, Start working out in order to stay HEALTHY!')
    alert('You are OBESE!, Start working out in order to stay HEALTHY!')
}

// question 14 

/*function checkSeason() {
    let month = 
}*/


// Exercise 2 Question 4

function showDateTime() {
    const now = new Date()
    let yy = now.getFullYear()
    let mm = now.getMonth()
    let day = now.getDate()
    let time = now.getHours()
    let min = now.getMinutes()

    let timeDate = `${day}/0${mm}/${yy}  ${time}:${min}`
    return timeDate
}
console.log(showDateTime())


// question 14 

const sumAll = (...args) => {
    let sum = 0 
    for (const element of args) {
        sum += args 
    }
    return sum 
}

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

// question 13

function evenAndOdds(n) {
    let even = 0
    let odd = 0 
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    console.log(`The number of evens are ${even}`)
    console.log(`The number of odds are ${odd}`)
}

// Question 