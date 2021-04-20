function translatePigLatin(str) {
    // Your code goes here.
    let consonants = "bcdfghjklmnpqrstvwyz";
    let vowels = "aeiou";
  
    if(consonants.includes(str[0])){
        console.log(str.slice(1) + str[0] + "ay");
    } else {
      console.log(str + "way");
    }
  }
  
  translatePigLatin("california");
  translatePigLatin("algorithm");
  // translatePigLatin("california") should return "aliforniacay".
  // translatePigLatin("algorithm") should return "algorithmway".
  
  //Solution with Regex
  // function translatePigLatin(str) {
  //   let consonantRegex = /^[^aeiou]+/;
  //   let myConsonants = str.match(consonantRegex);
  //   return myConsonants !== null
  //     ? str
  //         .replace(consonantRegex, "")
  //         .concat(myConsonants)
  //         .concat("ay")
  //     : str.concat("way");
  // }
  
  // translatePigLatin("consonant");