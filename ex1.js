const swap = (array) => {
    if (array.length <= 2) return array;
    else {
      let temp = array[0];
      array[0] = array[array.length - 1];
      array[array.length - 1] = temp;
      return array;
    } 
  }
  
  console.log(swap(['one', 'two', 'three']));