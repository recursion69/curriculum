/* Takes in a number, returns true if a number is greater than 5
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  if (a === 0 || a < 0 || a === 5) return false;
  if (a > 5) return true;
};

module.exports = {
  solution,
};
