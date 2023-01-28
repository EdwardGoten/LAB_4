const countUniqueChars = (str) => {
    let uniqueChars = '';
    for (let i = 0; i < str.length; i++) {
        if (!uniqueChars.includes(str[i])) {
            uniqueChars += str[i];
    }
  }
  return uniqueChars.length;
  }
  
  console.log(countUniqueChars('You know nothing Jon Snow'));