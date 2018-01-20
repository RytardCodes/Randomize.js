/*
MIT License

Copyright (c) 2017 RytardCodes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/**
 * 
 * @param {number} integer Must be a Number, not a string.\
 * @example
 * randomizeNumber() or randomizeNumber(100)
 */

exports.randomizeNumber = function(integer) {
    if (!integer) {
        integer = 10
    };

    if (!Number.isInteger(integer)) {
        throw new Error('Randomize.js Error: Given Parameter must be an Integer!');
    };

    var randomized = Math.floor(Math.random() * integer);

    return(randomized);
};

/**
 * 
 * @param {Array} array Must be an array only, not Integers, Strings or Objects!
 * @example 
 * randomizeArray(['Array', 'Goes', 'Here!'])
 */

exports.randomizeArray = function(array) {
    if (!Array.isArray(array)) {
        throw new Error('Given Parameter must be an Array!');
    };

    var randomized = array[Math.floor(Math.random() * array.length)];

    return(randomized);
};

/**
 *
 * @param {string} text Must be strings Only.
 * @example
 * reverseString('hello');
 */

exports.reverseString = function(string) {
    if (typeof string !== 'string') {
        throw new Error('Given Parameter must be a String!');
    } else {
        var splitted = string.split(''); // Splits the Given String, (e.g ['h', 'e', 'l', 'l', 'o']);
        var reversed = splitted.reverse(); // Reverses the Array
        var joined = reversed.join(''); // Joins it, so it will return: 'olleh'
        
        return joined;
    }
};
