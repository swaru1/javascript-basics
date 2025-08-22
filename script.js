var salary = Number(prompt("enter your salary"));

/* if(salary > 10000 && salary < 20000) {
  salary = salary + ((salary/100) * 10); 
  console.log(" the raised salary is " + salary)
}else{
  console.log("you are not elegible for a raise")
} */


var salary = Number(prompt("enter your salary"));

if(salary > 10000 && salary < 20000) {
  salary = salary - ((salary/100) * 5); 
  console.log(" the deducted salary is " + salary)
}else{
  console.log("you are not elegible for a raise")
}

