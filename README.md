# @kaikaew13/is-power-of

![version](https://img.shields.io/npm/v/@kaikaew13/is-power-of)
![license](https://img.shields.io/github/license/kaikaew13/is-power-of)

Finds if a number **n** is a power of a **base number**.

The currently supported **base numbers** are between 1 - 10 inclusive.

The biggest value of **n** that would yeild correct result is 2^31-1 (2147483647)

## Install

```
npm i @kaikaew13/is-power-of
```

## How to use

```js
const isPowerOf = require('@kaikaew13/is-power-of);

console.log(isPowerOf(128,2)); // true

console.log(isPowerOf(128,5)); // false

console.log(isPowerOf(4,-1)); // Error: base number is not in the supported range

console.log(isPowerOf('hi','hello')) // Error: only works with numeric inputs
```
