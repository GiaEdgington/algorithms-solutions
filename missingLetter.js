function letters(str){
    // Here goes all your code.
    let alphabet = "abcdefghijklmnopqrstuvwz";
    let missingLetter;
  
    for(let i = 0 ; i < str.length-1 ; i++){
        if(alphabet.indexOf(str[i+1]) - alphabet.indexOf(str[i]) !== 1){
            result = alphabet[alphabet.indexOf(str[i])+1];
        } else {
            result = "undefined"
        }
    }
         return result;
  }
  
  letters("abcdefghij");