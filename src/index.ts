import { logFizzbuzz } from "./fizzbuzz";

console.log("hello world");

const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

logFizzbuzz(numbers);
