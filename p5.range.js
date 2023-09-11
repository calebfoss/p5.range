/**
 * Creates an <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators">
 * iterator</a>, which is an object that produces a sequence of values.
 * This may be used in a <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">
 * for...of</a> loop.
 *
 * @method range
 * @param {number} stop - when the range reaches or goes past this value,
 * it will stop returning values
 * @return {object} Iterator that returns values from 0 to stop with
 * each value 1 apart.
 * @example
 * for(let i of range(100)) {
 *  circle(random(width), random(height), random(100));
 * }
 * describe("100 circles with random sizes and positions.")
 */
/**
 * @method range
 * @param {number} start - initial value
 * @param {number} stop - when the range reaches or goes past this value,
 * it will stop returning values
 * @param {number} [increment] - change between each value (default is 1 or -1 depending on whether
 * stop is greater than or less than start) (Optional)
 * @return {object} Iterator that returns values from start to stop with
 * each value increment apart.
 * @example
 * for(let x of range(25, width, 50)) {
 *  circle(x, height / 2, 50);
 * }
 * describe("A row of circles spanning the width of " +
 * "the canvas halfway down the canvas.");
 */
p5.prototype.range = function (n1, n2, increment) {
  if (increment === 0)
    throw new Error(
      "range() was called with an increment of 0, " +
        "but this would cause an infinite loop."
    );
  const [start, stop] = typeof n2 === "undefined" ? [0, n1] : [n1, n2];
  const span = stop - start;
  if (typeof increment === "undefined") increment = span > 0 ? 1 : -1;
  else if (span > 0 !== increment > 0)
    throw new Error(
      `range() was called with stop ${
        span > 0 ? "greater than" : "less than"
      } start ` +
        `and a ${increment > 0 ? "positive" : "negative"} increment, ` +
        "but this would cause an infinite loop."
    );
  let value = start;
  function next() {
    done = Math.abs(value) - Math.abs(stop) >= 0;
    const result = {
      value,
      done,
    };
    value += increment;
    return result;
  }
  return {
    next,
    [Symbol.iterator]() {
      return this;
    },
  };
};
