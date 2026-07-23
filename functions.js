//squre function
function square(num) {
    return num ** 2;
}
let result=square(7);
console.log(result);

//prime function
function Prime(pnumber) {
  if (pnumber < 2) {
    return false;
  }

  for (let i = 2; i < pnumber; i++) {
    if (pnumber % i === 0) {
      return false;
    }
  }

  return true;
}

let testNumber = 22;

if (Prime(testNumber)) {
  console.log(testNumber, "is a Prime number");
} else {
  console.log(testNumber, "is not a Prime number");
}

//check maximum between 2 numbers
function max(xval,yval){
    if(xval>yval){
        return xval;
    }else{
        return yval;
    }
}
let check=max(4,11)
    console.log(check,"is the maximum value");

    
//check maximum between 2 numbers
function checkvowel(text){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text[i]=="a" || text[i]=="e" || text[i]=="i" || text[i]=="o" || text[i]=="u"){
           count=count+1; }
    }
    return count;
}
let vowelresult=checkvowel("aeiou")
console.log(vowelresult,"vowels");