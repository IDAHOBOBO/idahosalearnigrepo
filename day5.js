const ar = Array()

const numbrs = [1,2,3,4,5]
console.log(numbrs.length)

let firstItem = numbrs[0]
let midlItem = numbrs[2]
let lastItem = numbrs[4]

console.log(firstItem)
console.log(midlItem)
console.log(lastItem)

const mixedDataTypes = [
    'Idahosa',
    22,
    true,
    {country: 'Brazil', city: 'Sao Paolo'},
    {skills: ['Basketball', 'HTML', 'CSS', 'JavaScript','React']},
    isEmployed = false
]

console.log(mixedDataTypes)

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft', 
    'Aplle',
    'IBM',
    'Oracle',
    'Amazon'
]

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

let firstComp = itCompanies[0].toUpperCase()
let secndComp = itCompanies[1].toUpperCase()
let thrdComp = itCompanies[2].toUpperCase()
let frthComp = itCompanies[3].toUpperCase()
let fifthComp = itCompanies[4].toUpperCase()
let sixthComp = itCompanies[5].toUpperCase()
let sevthComp = itCompanies[6].toUpperCase()

console.log(firstComp)
console.log(secndComp)
console.log(thrdComp)
console.log(frthComp)
console.log(fifthComp)
console.log(sixthComp)
console.log(sevthComp)

let check = itCompanies.includes('Amazon')
if (check === true) {
    console.log(itCompanies[6])
}
else {
    console.log('Company not found')
}

console.log(check)

itCompanies.sort()
console.log(itCompanies)

itCompanies.reverse()
console.log(itCompanies)

console.log(itCompanies.slice(0,3))

console.log(itCompanies.slice(4,7))

itCompanies.shift()
console.log(itCompanies)

itCompanies.shift(3)
console.log(itCompanies)

itCompanies.pop()

let txt = 
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let text = txt.split(' ')
console.log(text.length)

const shopCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shopCart.unshift('Meat')
shopCart.push('Sugar')
let cart = shopCart.toString()
cart.replace('Tea','Green Tea')


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
