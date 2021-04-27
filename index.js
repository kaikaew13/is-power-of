const MIN = 1;
const MAX = 10;
const ARR = [
  1,
  1073741824,
  1162261467,
  1073741824,
  1220703125,
  362797056,
  1977326743,
  1073741824,
  387420489,
  1000000000,
];

module.exports = (n, baseNum) => {
  if (typeof n !== 'number' || typeof baseNum !== 'number')
    throw new Error('only works with numeric inputs');
  if (baseNum > MAX || baseNum < MIN)
    throw new Error('base number is not in the supported range');
  return n > 0 && ARR[baseNum - 1] % n == 0;
};
