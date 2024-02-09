const intToRoman = (num) => {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romChar = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let roman = "";

  for (let i = 0; num > 0; i++) {
    while (num >= numbers[i]) {
      roman += romChar[i];
      num -= numbers[i];
    }
  }

  return roman;
};

const num = 58;
intToRoman(num);
