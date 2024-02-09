const intToRoman = (num) => {
  const obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  Object.entries(obj).forEach(([letter, number]) => {
    // Calculate how many times the current integer value fits into num
    let times = Math.floor(num / number);

    // Add the Roman numeral character repeated times to the roman string
    roman += letter.repeat(times);

    // Update num by taking the remainder of num divided by the current integer value
    num %= number;
  });

  return roman;
};

const num = 58;
intToRoman(num);
