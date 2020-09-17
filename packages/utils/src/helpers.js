export const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array.
        if (!result[currentValue[key]]) {
            result[currentValue[key]] = [];
        } // Else create an array and push the object
        result[currentValue[key]].push(currentValue);
        // Return the current iteration `result` value,
        // this will be taken as next iteration `result` value and accumulate
        return result;
    }, {});
};
