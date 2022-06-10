let input = "bitcoin take over the world maybe who knows perhaps"; //or any other input string
let inputArray = input.split(' ');

let shortest = 1000000000;

for(let i = 0; i<inputArray.length; i++){
  if(inputArray[i].length < shortest){
    shortest = inputArray[i].length;
  }
}

console.log(shortest)
