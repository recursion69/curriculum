/**
 * Takes in 2 numbers, return a function that
 *    returns the sum when the function is called
 * @param {number} a
 * @param {number} b
 * @returns {function}
 */

const solution = (a, b) => {
	 const sum=(a,b) =>{
		return a+b;
	}
return sum(a,b);
}

module.exports = {
	solution,
};
