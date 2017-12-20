exports.randomizeNumber = function(integer) {
    if (!integer) {
        integer = 10
    };

    if (isNaN(integer)) {
        throw new Error('Given Parameter must be an Integer!');
    };

    var randomized = Math.floor(Math.random() * integer);

    return(randomized);
};

exports.randomizeArray = function(array) {
    if (!Array.isArray(array)) {
        throw new Error('Given Parameter must be an Array!');
    };

    var randomized = array[Math.floor(Math.random() * array.length)];

    return(randomized);
};