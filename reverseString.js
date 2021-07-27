function reverseString(string){
  let i = string.length - 1;
  let str2 = '';
  
  while(i >= 0){
    str2 += string[i]
    i--
  }
  return str2;
}

console.log(reverseString('dog'))