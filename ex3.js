const ex3 = (array, index, defaultValue) => {
    if (index >= 0 && index < array.length) return array[index];
    else if (defaultValue !== ' ') return defaultValue;
    else if (index > array.length - 1) return null;
}

const cities = ['moskow', 'london', 'berlin', 'porto'];

console.log(ex3(cities, 10, 'sas'));