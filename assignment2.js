let userInput = Number(prompt('Enter Your Age'))

if (userInput >= 18) {
    console.log('You are old enough to drive')
    alert('You are old enough to drive')
}

else{
    console.log(`You are not old enough to drive. Wait for ${18 - userInput} years before you can start driving`)
}


let myAge = Number(prompt('Enter Your Age'))

let yourAge = Number(prompt('Enter Your Age'))

if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
}

else if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge}years older than me`)
}

else {
    console.log('We are age mates')
}


let a = 11
let b = 6

if (a > b) {
    console.log(`${a} is greater than ${b}`)
    alert(`${a} is greater than ${b}`)
}

else {
    console.log(`${a} is less than ${b}`)
    alert(`${a} is less than ${b}`)
}

a = 20
b = 10

let tenOp = a > b
? `${a} is greater than ${b}`
: `${a} is less than ${b}`

console.log(tenOp)
alert(tenOp)

let evenNumb = Number(prompt('Enter a number'))

if (evenNumb % 2 === 0) {
    console.log(`${evenNumb} is an even number`)
    alert(`${evenNumb} is an even number`)
}

else {
    console.log(`${evenNumb} is an odd number`)
    alert(`${evenNumb} is an odd number`)
}


let userGrade = Number(prompt('What was your Grade'))

if (userGrade >= 80 && userGrade <= 100) {
    console.log('Your grade is A, Keep it up!')
    alert('Your grade is A, Keep it up!')
}

else if (userGrade >= 70 && userGrade <= 79) {
    console.log('Your grade is B, you are almost there!')
    alert('Your grade is B, you are almost there!')
}

else if (userGrade >= 60 && userGrade <= 69) {
    console.log('Your grade is C, Keep working!')
    alert('Your grade is C, Keep working!')
}

else if (userGrade >= 50 && userGrade <= 59) {
    console.log('Your grade is D, You can do better!')
    alert('Your grade is D, You can do better!')
}

else if (userGrade >= 0 && userGrade <= 49) {
    console.log('Your grade is F, What the Heelly!')
    alert('Your grade is F, What the Heelly!')
}

else {
    console.log('You did not partake in the exam, INVALID GRADE!')
    alert('You did not partake in the exam, INVALID GRADE!')
}

let userSeason = prompt('Input month for season check').toLocaleLowerCase()

if (userSeason = 'septembr' || 'october' || 'november') {
    console.log('The current Season is Autumn')
    alert('The current Season is Autumn')
}

else if (userSeason === 'decemeber' || 'january' || 'february') {
    console.log('The curent Season is Winter')
    alert('The current Season is Winter')
}

else if (userSeason === 'march' || 'april' || 'may') {
    console.log('The current Season is Spring')
    alert('The current Season is Spring')
}

else if (userSeason === 'june' || 'july' || 'august') {
    console.log('The current Season is Summer')
    alert('The current Season is Summer')
}

else {
    console.log('Invalid Input')
    alert('Invalid Input')
}

let userDay = prompt('What is the day today?').toLocaleLowerCase()

if (userDay === 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday') {
    console.log(`${userDay} is a working Day.`)
    alert(`${userDay} is a working Day.`)
}

else if (userDay === 'saturday' || 'sunday') {
    console.log(`${userDay} is a weekend.`)
    alert(`${userDay} is a weekend.`)
}

else {
    console.log(`${userDay} is not a DAY of the week. INVALID INPUT`)
    alert(`${userDay} is not a DAY of the week. INVALID INPUT`)
}


let userMonth = prompt('Enter a Month:').toLocaleLowerCase()
switch (userMonth) {
    case 'january':
        console.log(`${userMonth} has 31 Days.`)
        alert(`${userMonth} has 31 Days.`)
        break
        case 'february':
            console.log(`${userMonth} has 28 Days.`)
            alert(`${userMonth} has 28 Days.`)
            break
            case 'march':
                console.log(`${userMonth} has 31 Days.`)
                alert(`${userMonth} has 31 Days.`)
                break
                case 'april':
                    console.log(`${userMonth} has 30 Days.`)
                    alert(`${userMonth} has 30 Days.`)
                    break
                    case 'may':
                        console.log(`${userMonth} has 31 Days.`)
                        alert(`${userMonth} has 31 Days.`)
                        break
                        case 'june':
                            console.log(`${userMonth} has 30 Days.`)
                            alert(`${userMonth} has 30 Days.`)
                            break
                            case 'july':
                                console.log(`${userMonth} has 31 Days.`)
                                alert(`${userMonth} has 31 Days.`)
                                break
                                case 'august':
                                    console.log(`${userMonth} has 31 Days.`)
                                    alert(`${userMonth} has 31 Days.`)
                                    break
                                    case 'semptember':
                                        console.log(`${userMonth} has 30 Days.`)
                                        alert(`${userMonth} has 30 Days.`)
                                        break
                                        case 'october':
                                            console.log(`${userMonth} has 31 Days.`)
                                            alert(`${userMonth} has 31 Days.`)
                                            break
                                            case 'november':
                                                console.log(`${userMonth} has 30 Days.`)
                                                alert(`${userMonth} has 30 Days.`)
                                                break
                                                case 'december':
                                                    console.log(`${userMonth} has 31 Days.`)
                                                    alert(`${userMonth} has 31 Days.`)
                                                    break
                                                    default:
                                                        console.log('Month not found')
                                                        alert('Month not found')

}

