// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function add(value : number):(num : number) => number{
    return function(num){
          return num + value
    }
}

let adding = add(7)
console.log(adding(8))
console.log(adding(6))
