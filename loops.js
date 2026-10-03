//question 1

for (let v = 0; v <= 10; v++) {
    console.log(v)
}

let v = 0 
while (v <= 10) {
    console.log(v)
    v++
}

 v = 0
do {
    console.log(v)
    v++
} while (v <= 10)


//question 2

for (let c = 10; c >= 0; c--) {
    console.log(c)
}

let c = 10
while (c >= 0) {
    console.log(c)
    c--
}

c = 10
do {
    console.log(c)
    c--
} while (c >= 0)

    //question 4
    for (let i = 0; i <= 8; i++) {
    console.log('#'.repeat(i))
}


//question 5

for (let m = 0; m <= 10; m++) {
    console.log(`${m} * ${m} = ${m * m}`)
}

//question 6

for (let z = 0; z <= 10; z++) {
    console.log(`${z} ${z ** 2} ${z ** 3}`)
}

//question 7

for (let h = 0; h <= 100; h++) {
    if (h % 2 === 0) {
        console.log(h)
    }
}

//question 8

for (let h = 0; h <= 100; h++) {
    if (h % 2 != 0) {
        console.log(h)
    }
}

// question 9

for (let num = 2; num <= 100; num++) {
    let isPrime = true

    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            isPrime = false
        }
    if (isPrime) {
        console.log(num)
    }
}

// question 10

let sum = 0

for (let i = 0; i <= 100; i++) {
    sum += i
} console.log(`The sum of all numbers 0 to 100 is ${sum}`)


// question 11

let zum = 0 
let odZum = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        zum += i
    } else if (i % 2 !== 0) {
        odZum += i
    }
} 
console.log(`The sum of sum of all evens from 0 to 100 is ${zum}. And the sum of all odd numbers from 0 to 100 is ${odZum}`)


// question 12 

let evenNum = 0 
let odNum = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNum += i
    } else {
        odNum += i
    } 
}
console.log([evenNum,odNum])

// question 13

const randomNumbers = []
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1)
}
console.log(randomNumbers)

// question 14 ai assited

const raandomNumbers = [];

while (raandomNumbers.length < 5) {
  let num = Math.floor(Math.random() * 100) + 1;


  if (!raandomNumbers.includes(num)) {
    raandomNumbers.push(num);
  }
}

console.log(raandomNumbers)





