export function convertNumber(number: number): string {
  if (number % 15 === 0) return "fizzbuzz";
  if (number % 5 === 0) return "buzz";
  if (number % 3 === 0) return "fizz";

  return number.toString();
}

export function logFizzbuzz(numbers: number[]): void {
  if (!numbers.length) console.log("empty array");
  numbers.forEach((n) => {
    const fizzBuzzConversion = convertNumber(n);
    console.log(fizzBuzzConversion);
  });
}
