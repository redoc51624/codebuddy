var arr = [1,2,3];
var x= document.getElementById("root")

// # Code Quality
// ## Level 1
async function GET_daTA() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return  response.json();
  }
  console.log(GET_daTA());

// ## Javascript data structure questions
// level 1: Question 1:

var arr1 = arr.map((ar)=> ar+1);
console.log(arr1);
// level 1: Question 2:
var arr2 = arr.reduce((a, b) => a + b, 0);
console.log(arr2);
// level 1: Question 3:
const obj = {name: 'Elie', rank: 'Pro'}
const str = JSON.stringify(obj);
console.log(str);

// # Loops and Iteration
// # Level 1
// Javascript to print the following pattern.

let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);

// # Level 2

var number = 6;   
var num1 = 1, num2 = 1;  
var next_term = 0;
var sum = 0;
document.write( " Fibonacci series of the number 6: " + "<br>")  
    for (i = 1; i <= number; i++)  
    {  
        if ( i <= 1)  {
        next_term = i;
        sum = sum + next_term;
        }
        else 
        {  
            next_term = num1 + num2;  
            num1 = num2;  
            num2 = next_term;
        }  
        document.write(num1 ); 
        sum = sum + num1;
    }
    document.write("<br/>" + "sum:" + (sum -1));
