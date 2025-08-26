/* var a = 10; //is var me wo number hoga jiski table print karni hai

var b = 1 //yaha humne naya var initalise kiya 1 se, is hi var pe hum loop karenge

while ( b <= 10) { //jab tak b jo ki 1 hai wo 10 nhi ho jata tab tak run karo 

    console.log( a + " x " + b + " = " + a*b )  // output ke liye [10] x [1] = [10]   

    b++;   // var b jo ki 1 tha usko increment kr do aur loop me wapis jao
} */


var num = Number(prompt("enter a number")) //promt ke reply ko number me convert karo and var num me store karo
var aa = 1;     //var aa jisme 1 hai isey hum loop karne ke liye use karenge 
console.log("even numbers till " + num + " are..");

while ( aa <= num ) {           //jab tak var aa var num ke barabar nahi hota tab tak loop run karo

    if( aa % 2 == 0) {          //agar var aa/2 ka remainder = 0 i.e case for even no hai to block ka code run karo 
        console.log(aa);
    }
    aa++;      // var aa jiski value 1 thi usme +1 kardo
}