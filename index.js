const MIN = 0;
const MAX = 2147483647;
const M_SQR = 46340;

module.exports = (n, baseNum) => {
  if (!Number.isInteger(n) || !Number.isInteger(baseNum))
    throw new Error('only works with integer');

  if (baseNum > MAX || baseNum < MIN)
    throw new Error('base number is not in the supported range');
  if (n > MAX || n < MIN) throw new Error('n is not in the supported range');
  if (baseNum > M_SQR) return n === baseNum;
  if (baseNum === 1) return n === 1;
  if (baseNum === 0) return n === 0;
  if (baseNum > n) return false;

  let baseNumTmp = baseNum;
  while (baseNumTmp <= MAX) {
    if (baseNumTmp % n === 0) return true;
    baseNumTmp *= baseNum;
  }
  return false;
};
