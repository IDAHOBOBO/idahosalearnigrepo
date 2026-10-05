 dog = {}

// question 2 

console.log(dog)

// question 3 

const dog = {
    name: 'bingo',
    legs: 4,
    color: 'tan brown',
    age: 12,
    getBark: function() {
        return 'woof woof'
    },
}

// question 4 

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.getBark())

// question 5

dog.breed = 'Rottweiler'
dog.getDogInfo = function() {
    return `${this.breed} ${this.color} ${this.name}`
}

// Excercise 2 
// Question 1

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let mostSkilledUser = ''
let maxSkills = 0

for (const user in users) {
  const skillCount = users[user].skills.length
  if (skillCount > maxSkills) {
    maxSkills = skillCount
    mostSkilledUser = user
  }
}

console.log(`${mostSkilledUser} has the most skills acquired (${maxSkills} skills).`)

// question 2

for (const user in users) {
    if (users[user].isLoggedIn === true) {
        console.log(`${user} is logged in`)
    }
}

// still in q num 2

for (const user in users) {
    if (users[user].points >= 50) {
        console.log(`${user} has the most points`)
    }
} 

// question 3

let mernDev = ['MongoDB', 'Express', 'React', 'Node']
for (const user in users) {
    let skills = users[user].skills     

    if (skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
        console.log(`${user} is a MERN developer`)
    }
}

// question 4

users.Peter = {
    email: 'osewmegiebigi@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    age: 22,
    isLoggedIn: true,
    points: 50
}

// question 5 
 
const userKeys = Object.keys(users)
console.log(userKeys)


// question 6

const userValues = Object.values(users)
console.log(userValues)

// question 7 
const country = {
    place: 'Brazil',
    capital: 'Brasilia',
    population: '214.2 million people',
    languages: 'Portugese'
}
console.log(country)

// Exercise 3
// Question 1

const personInfo = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [
        {description: 'Monthly Salary', amount: 500000},
        {description: 'Monthly Allowance', amount: 250000},
        {description: 'Side Projects', amount: 350000},
        {description: 'Misceleanous Jobs', amount: 100000}
    ],

    expenses: [
        {description: 'Shopping', amount: 120000},
        {description: 'Transportation', amount: 100000},
        {description: 'Outings', amount: 100000},
        {description: 'Unexpecteds', amount: 100000},
    ],

    totalIncome () {
        let sum = 0
       for (const item of this.incomes) {
        sum += item.amount
       }
       return sum
    },

    totalExpense () {
        let sum = 0
        for (const item of this.expenses) {
            sum += item.amount
        }
        return sum
    },

    accountInfo () {
        return {
            fullName: `${this.firstName} ${this.lastName}`,
            income: this.totalIncome(),
            expense: this.totalExpense()
        }
    },

        addIncome(description, amount) {
  this.incomes.push({ description, amount });
},

    addExpense(description, amount) {
  this.expenses.push({ description, amount });
},


    accountBalance () {
        return this.totalIncome() - this.totalExpense()
       
    },
}
