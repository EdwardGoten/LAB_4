const getWeekends = (value) => {
  let array = ['saturday', 'sunday', 'sat', 'sun'];  
  if (value === 'long') {
    let long = [array[0], array[1]];
    return long;
  }
  else if (value === 'short'){
    let short = [array[2], array[3]];
    return short;
  }
  else return 0;
}
console.log(getWeekends('short'));