import { convertNumber, logFizzbuzz } from "./";

describe("Fizzbuzz test", () => {
  describe("convertNumber", () => {
    test.each([1, 2, 4, 7, 8])(
      "%i should return stringified input when input is not multiple 3 or 5 or both",
      (input) => {
        // act
        const result = convertNumber(input);

        // assert
        expect(result).toEqual(input.toString());
      }
    );

    test.each([3, 6, 9, 12])(
      "%i should return `fizz` when input is multiple of 3",
      (input) => {
        const result = convertNumber(input);

        // assert
        expect(result).toEqual("fizz");
      }
    );

    test.each([5, 10, 20, 25])(
      "%i should return `buzz` when input is multiple of 5",
      (input) => {
        // act
        const result = convertNumber(input);

        // assert
        expect(result).toEqual("buzz");
      }
    );

    test.each([15, 30, 45])(
      "%i should return `fizzbuzz` when input is multiple of 3 and 5",
      (input) => {
        // act
        const result = convertNumber(input);

        // assert
        expect(result).toEqual("fizzbuzz");
      }
    );

    test("should log correct number conversions of array [1..30]", () => {
      // arrange
      console.log = jest.fn();
      const array = Array.from({ length: 30 }, (_, i) => i + 1);

      // act
      logFizzbuzz(array);

      // assert
      expect(console.log).toHaveBeenNthCalledWith(1, "1");
      expect(console.log).toHaveBeenNthCalledWith(2, "2");
      expect(console.log).toHaveBeenNthCalledWith(3, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(4, "4");
      expect(console.log).toHaveBeenNthCalledWith(5, "buzz");
      expect(console.log).toHaveBeenNthCalledWith(6, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(7, "7");
      expect(console.log).toHaveBeenNthCalledWith(8, "8");
      expect(console.log).toHaveBeenNthCalledWith(9, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(10, "buzz");
      expect(console.log).toHaveBeenNthCalledWith(11, "11");
      expect(console.log).toHaveBeenNthCalledWith(12, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(13, "13");
      expect(console.log).toHaveBeenNthCalledWith(14, "14");
      expect(console.log).toHaveBeenNthCalledWith(15, "fizzbuzz");
      expect(console.log).toHaveBeenNthCalledWith(16, "16");
      expect(console.log).toHaveBeenNthCalledWith(17, "17");
      expect(console.log).toHaveBeenNthCalledWith(18, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(19, "19");
      expect(console.log).toHaveBeenNthCalledWith(20, "buzz");
      expect(console.log).toHaveBeenNthCalledWith(21, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(22, "22");
      expect(console.log).toHaveBeenNthCalledWith(23, "23");
      expect(console.log).toHaveBeenNthCalledWith(24, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(25, "buzz");
      expect(console.log).toHaveBeenNthCalledWith(26, "26");
      expect(console.log).toHaveBeenNthCalledWith(27, "fizz");
      expect(console.log).toHaveBeenNthCalledWith(28, "28");
      expect(console.log).toHaveBeenNthCalledWith(29, "29");
      expect(console.log).toHaveBeenNthCalledWith(30, "fizzbuzz");
    });

    test("should log empty array when an empty array is passed", () => {
      // arrange
      console.log = jest.fn();
      const array = [] as number[];

      // act
      logFizzbuzz(array);

      // assert
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith("empty array");
    });
  });
});
