//Create an object representing a bank account with methods deposit() and withdraw().

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
console.log(bankAcc);