const removeFromArray = function(array, ...args) {
    for (let i = array.length-1; i >= 0; i--) {
        for (let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]) {
                array.splice(i,1);
            }
        }
    }
    return array;
};

// const removeFromArray = function(array, ...args) {
//     const newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
