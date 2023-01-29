const getMax = ([first, ...rest]) => {
    let maxValue = first;

    for (const value of rest) {
        if (value > maxValue) {
            maxValue = value;
        }
    }

    return maxValue;
}

console.log(getMax([1, 10, 8, 2, 12, 1, 9]));