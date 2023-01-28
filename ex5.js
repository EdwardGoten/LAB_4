const names = (array) => {
    for(let left = 0, right = array.length - 1; left < right; left++, right -= 1){
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
const massiv = ['john', 'smith', 'karl'];
console.log(names(massiv));