export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = number => number % 2 === 0;

export default getRandomNumber;
