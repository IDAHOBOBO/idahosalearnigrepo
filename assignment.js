let irstName = 'Peter'
let astName = 'Idahosa'
let country = 'Brazil'
let city = 'Salvador'
let age = 22
let isMarried = false
let year = 2026
 
console.log(typeof 'Idahosa')
console.log(typeof 22)
console.log(typeof false)
console.log(typeof null)
console.log(typeof undefined)


console.log(typeof '10' === 10)
console.log(typeof parseInt('9.8') === 10)


let mo = 2 > 1
let no = 'Aeroplane'.length > 'Mango'.length
let gram = 1 < 5 

let pa = 3 < 8
let ra = 'Create'.length > 'Manuever'.length
let graph = 0 > 3

console.log(4 > 3)  //True
console.log(4 >= 3)  //True
console.log(4 < 3)  //False
console.log(4 <= 3)  //False
console.log(4 == 4)  // True but not accurate
console.log(4 === 4) //True
console.log(4 != 4)  //False
console.log(4 !== 4)  //False
console.log(4 != '4')  //False
console.log(4 == '4')  //True
console.log(4 === '4') //False

let compare = 'Python'.length < 'Jargon'.length

console.log(4 > 3 && 10 < 12)  //True
console.log(4 > 3 && 10 > 12)  //False
console.log(4 > 3 || 10 < 12)  //True
console.log(4 > 3 || 10 > 12)  //True, one argument has to be true
console.log(!4 > 3)  //False
console.log(!4 < 3)  //True
console.log(!false)  //True
console.log(!4 > 3 && 10 < 12)  //False
console.log(!4 > 3 && 10 > 12)  //False
console.log(!4 === '4')  //False

let exmp = 'Dragon, Python'
console.log(!sha.includes('on')) //False

const timeNow = new Date()
console.log(timeNow.getFullYear())
console.log(timeNow.getMonth())
console.log(timeNow.getDate())
console.log(timeNow.getHours())
console.log(timeNow.getMinutes())
console.log(timeNow.getTime())



let base = prompt('Enter Base')
let height = prompt('Enter Height')
 
base = Number(base);
height = Number(height);

let area = 0.5 * base * height

console.log(`The area of your triange is ${area}`)
alert(`The area of the calculated triangle is ${area}`)

let sideA = prompt('Enter side A')
let sideB = prompt('Enter side B')
let sideC = prompt('Enter side C')

sideA = Number(sideA);
sideB = Number(sideB);
sideC = Number(sideC);

let perimeter = sideA + sideB + sideC

console.log(`The perimeter of the triangle is ${perimeter}`)
alert(`The perimeter for calculated triangle is ${perimeter}`)

let leength = prompt('Enter Length')
let width = prompt('Enter Width')

length = Number(leength);
width = Number(width);

let peremitre = 2 * (leength + width)

console.log(`The Peremitre of the Rectangle is ${peremitre}`)
alert(`The Peremitre of your Calculated Rectangle is ${peremitre}`)


let pi = 3.14
let userRadius = prompt('Input Radius')

userRadius = Number(userRadius)

let areaa = 2 * pi * userRadius

console.log(`The Area of the Circle is ${areaa}`)
alert(`The Area of the Circle calculated is ${areaa}`)

let userHours = prompt('Enter Hours WOrked')
let userRate = prompt('Enter your Rate per Hour')

userHours = Number(userHours)
userRate = Number(userRate)

let payOfUser = userHours * userRate

console.log(`Your Weekly Earning is ${payOfUser}`)
alert(`Your Weekly Earning is ${payOfUser}`)


let botName = 'Kenpachi'
botName.length > 7

? console.log(`${botName} is a long name`)
: console.log(`${botName} is a short name`)

botName = 'Itachi'

botName.length > 7 
? console.log(`${botName} is a long name`)
: console.log(`${botname} is a short name`)

let firstName = 'Idahosa'
let lastName = 'Peter'

firstName.length > lastName.length

console(`Your firstname,${firstName} is longer is longer than your lastname,${lastName}`)


let myAge = 250
let yourAge = 25

let conclusion = myAge - yourAge

console.log(`I am ${conclusion} years older than you`)

//let permitToDrive = 18 

// I was partialy assisted by Ai in this part

let birthYear = prompt('What year were you born?')

birthYear = Number(birthYear)

let currentYear = new Date().getFullYear()

let agee = currentYear - birthYear

let message = agee >= 18
? `You are ${agee}. You are old enough to drive`
: `You are ${agee}. You will be allowed to drive after ${18 - agee} years.`

console.log(message)
alert(message)

let now = new Date()

let yy = now.getFullYear()

let mon = now.getMonth()

let day = now.getDate()

let tim = now.getHours()

let min = now.getMinutes()

console.log(`The first date method is: ${yy} - ${mon} - ${day}  ${tim}:${min}`)

console.log(`The second time format is this: ${day} - ${mon} - ${yy}  ${tim}:${min}`)

console.log(`The third time format is this: ${day}/${mon}/${yy}  ${tim}:${min}`)

