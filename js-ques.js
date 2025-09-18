//1. You have a shop selling apples for ₹20 each. Write a program that takes the number of apples a customer buys and prints the total cost.

/* let total = (amount) => {
    return amount*20;
}

console.log(`total amount ${total(10)}`) */

//2. A movie ticket costs ₹150. If age is below 12 or above 60, give a 50% discount. Calculate final price.

/* var ticketPrice = function (age) {
    let orignalPrice = 150;
    let discountPrice = (age < 12 || age > 60 ? orignalPrice * 0.5 : orignalPrice);
    return discountPrice;
}
console.log(`You need to pay: ${ticketPrice(25)} rupees`); */


//3. Write a program where a car has fuel = 100. Each km consumes 2 fuel. If you want to travel n km, print if the fuel is enough or not.

/* function fuelCheck (kms) {
    let fuel = 100;
    if ((fuel-(kms*2)) >= 0) {
        return 'enough fuel'
    } else {
        return 'not enough'
    }
}

console.log(fuelCheck(51)) */

//4. You are building a password checker. A valid password must be at least 8 characters and must contain at least one number. Write a program to check validity.

/* var password = 'Hello@12'

let digits = '1234567890'
function passCheck (pass) {
    var isValid = false;
    if(pass.length==8) {
        for(let i = 0 ; i < pass.length; i++) {
            if ( pass.charAt(i) < 9 && pass.charAt(i) > 0) {
                isValid = true
            }
        }
    }

    if( isValid) {
        console.log("valid password")
    } else {
        console.log("invalid pass")
    }
}

passCheck(password); */

//5. Create a simple game: generate a random number between 1–10. Ask user to guess. If they guess correctly, print "You win!", otherwise "Try again".

/* let randomInt = Math.floor(Math.random()*10)
console.log(randomInt)
function guessGame (guess) {
    if (randomInt === guess) {
        console.log(`you win!!!`)
        randomInt = Math.floor(Math.random()*10)
        return `Number is Updated..`
    } else {
        return `try again!`
    }
}

console.log(guessGame(4)); */

//6. You are organizing a cricket match. Store runs scored by 5 players in an array. Print total runs and the highest run scorer.

/* var runs = [45, 77, 100, 83, 0]
let total = 0

function topScorer (runs) {
    let highest = 0;
    for(i=0; i <runs.length; i++ ) { 
        if(runs[i] > highest) {
            highest = runs[i];
        }
    }
    return highest;
}

for(let i = 0; i<runs.length ; i++) {
    total += runs[i];
}

console.log(`total = ${total}`)
console.log(`top scorer: ${ topScorer(runs)}`) */

//7. A delivery guy has to deliver 10 parcels. If he delivers 1 parcel, he gets ₹50. Write a program to calculate his earnings after delivering n parcels.

/* function earnings( parcels ) {
    if(parcels < 10 && parcels > 0) {
        return parcels * 50
    } else {
        return `invalid no of parcels`
    }
}

console.log(`Earnings : ${earnings(9)} Rupees`); */

//Create an object representing a bank account with methods deposit() and withdraw().

//8. Write a program to simulate a basic ATM. Start with balance = 1000. Ask user if they want to deposit or withdraw, update balance, and print new balance.

/* 
const bankAcc = {
    user: 'Alex',
    ballance: 0,
    
    deposit: function (amount) {
        this.ballance += amount;
        console.log(`deposit successful! Curr Bal: ${this.ballance} \n `);
    },
    withdraw: function (amount){
        if(amount <= this.ballance) {
            this.ballance -= amount;
            console.log(`Withdrawal successful! Curr Bal: ${this.ballance} \n `);
        } else {
            console.log(`Transaction cancelled! \n Ballance is insufficient! \n Curr balance: ${this.ballance} \n`)
        }
    }
}

bankAcc.deposit(5000);
bankAcc.withdraw(4500);
console.log(bankAcc); */

