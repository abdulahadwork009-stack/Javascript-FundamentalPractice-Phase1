//Largest Number
let numbers=[10,30,54,75,32,87,34,66,11,45,90,32];
let largest=numbers[0];
for(let i=0; i<=numbers.length; i++){
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}
console.log(largest);

//Smallest Number
let x=[10,30,54,75,32,87,34,66,11,45,90,32];
let smallest=x[0];
for(let i=0; i<x.length; i++){
    if(x[i]<smallest){
        smallest=x[i];
    }
}
console.log(smallest);

//Sum
let y=[10,30,54,75,32,87,34,66,11,45,90,32];
let sum=0;
for(let i=0; i<x.length; i++){
    sum=sum+x[i];
}
console.log(sum);

//reverse array
let numbers2 = [10,30,54,75,32,87,34,66,11,45,90,32];
let reversed = [];

for (let i = numbers2.length - 1; i >= 0; i--) {
  reversed[reversed.length] = numbers2[i];
}
console.log(reversed);

//duplicate array
let duplicateNumbers = [10,30,30,75,32,32,34,66,11,11,90,90];
let uniqueNumbers = [];

for (let i = 0; i < duplicateNumbers.length; i++) {
  let alreadyExists = false;

  for (let j = 0; j < uniqueNumbers.length; j++) {
    if (duplicateNumbers[i] === uniqueNumbers[j]) {
      alreadyExists = true;
    }
  }

  if (!alreadyExists) {
    uniqueNumbers[uniqueNumbers.length] = duplicateNumbers[i];
  }
}

console.log("Array without duplicates:", uniqueNumbers);