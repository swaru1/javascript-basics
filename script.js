// ask the user for a number and print all numbers down to 1 in descending order. if the number is negative, print "invalid input".=================
/* var num = Number(prompt("enter a number")); */

/* var num = 15;

if(num < 0) {
    console.log('invalid input');
}else{
    while (num >= 1) {
    console.log(num);
    num--;
    }
} */

//ask the user for a number. If it's even print all even numbers up to that number. If it is odd display "bye once and exit" ----------------------

/* var num = 5;
var a = 0;

if(num % 2 != 0) {
    console.log("bye !");
} else {
    console.log('even number');
    while ( a < num) {
        console.log(a);
        a++;
    }
   
} */

//ask the user for an email and password. If they enter "admin@mail.com" and "1234", show a success message. Otherwise, allow up to 3 attempts before showing access denied.

/* var attempts = 0;
var success = false;

while (attempts < 3) {
    var email = prompt("Enter email:");
    var passwd = prompt("Enter password:");

    if (email === "admin@mail.com" && passwd === "1234") {
        console.log("Login success");
        success = true;
        break; 
    } else {
        console.log("Wrong, try again");
    }
    attempts++;
}

if (!success) {
    console.log("Access denied");
} */

// ask the user for a number and print numbers up to that number. If a number is a multiple of 3, print "sheriyans" if a multiple of 5 print "coding" and if both, print "Sheriyans coding school".---------------------------------------------------------------------------------------------

/* let num = 20;
for (let i = 1; i<num ; i++) {
    if ( i % 3 == 0 && i % 5 == 0) {
        console.log('> sheriyans coding school');
    } else if ( i % 3 == 0 ) {
        console.log('> sheriyans');
    } else if ( i % 5 == 0) {
        console.log('> coding');
    } else {
        console.log(i)
    }
} */

//Ask the user for a number and print all prime numbers up to that number.-------------------------------------------------------------------------

/* let num = Number(prompt('enter a number')); */
/* let num = 20;

for ( let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
} */

//Ask the user for a string and print it in reverse. ----------------------------------------------------------------------------------------------

/* var str = 'hello world'
var newStr = '';
for( let i=str.length-1; i>=0; i--) {
    newStr += str[i];
}

console.log(newStr); */

//Ask the user for a word and check if it is a palindrome (reads the same forward and backward).---------------------------------------------------

/* var str = "racecar";
var i = 0;
var j = str.length-1;
var isPalindrome = true;

while (i < j) {
    if(str[i]!==str[j]) {
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}

console.log(isPalindrome ? "String is a palindrome" : "Not a palindrome"); */

//Ask the user for a number and print the sum of its digits (eg 456 = 15)--------------------------------------------------------------------------
//var num = (prompt("enter a number"));

/* var num = 456;
var sum = 0;

while ( num > 0) {
    var ones_dig = num % 10;
    sum += ones_dig;
    num = Math.floor(num/10);
}

console.log("sum of the digits" + sum); */

//ask the user for a number and print its factorial------------------------------------------------------------------------------------------------

/* var num = 1;
var factorial = 1;

for (var i = 1; i <= num ; i++) {
    factorial *= i;
}

console.log(factorial); */

//ask the user for a sentence and count how many vovels (a e i o u) are present ----------------------------------------------------------------
/* var str = prompt('enter a sentence') */

/* var str = "a random sentence";

count = 0;

for ( let i = 0; i < str.length ; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        count++;
    }
}

console.log(count); */

//===================================================================[OR]=====================================================================
/* var str = "A random Sentence";
var str = str.toLowerCase();
var v_count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        v_count++;
        break;
    default:
  }
}

console.log(v_count); */

/* function add(a, b) {
    console.log(a + b)
}
add( 10, 20);

function sq(a) {
    console.log(a*a)
}
sq(10);

function mul(a, b) {
    console.log(a * b)
}
mul( 10, 2);

function cube(a) {
    console.log(a*a*a)
}
cube(2); */