const addPrefix = (array, prefix) => {
    for (let i = 0; i < array.length; i++){
        array[i] = prefix + ' ' + array[i];
    }
    return array;
}

names = ['John', 'Smith'];
console.log(addPrefix(names, 'Mr'));