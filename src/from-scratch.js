const helloWorldRegex = (str) => {
  let pattern = /hello\s+world/i;
  return pattern.test(str);
};
// console.log(helloWorldRegex("I am god"));
// console.log(helloWorldRegex("hello world"));
// console.log(helloWorldRegex("hello world, my old friend"));

const hasAVowel = (str) => {
  let vowels = /[aeiou]/gi;
  return vowels.test(str);
};
// console.log(hasAVowel("I am god"));
// console.log(hasAVowel("hello world"));
// console.log(hasAVowel("hello world, my old friend"));
// console.log(hasAVowel("zzzzzzkkkww"));


const hasCatsOrDogs = (str) => {
  let pet = /cats|dogs/gi;
  return pet.test(str);
};

const hasVowelStart = (str) => {
  let vowel = /^a|^e|^i|^o|^u/gi;
  return vowel.test(str);
};

const hasPunctuationEnd = (str) => {};

const hasNothingOrDigits = (str) => {};

const hasNoFlippers = (str) => {};

const isValidEmail = (str) => {};

const isValidPhoneNumber = (str) => {};

const matchAllNumbers = (str) => {};

const matchAllNumbersAsNumbers = (str) => {};

const matchAllWords = (str) => {};

const replaceAllNumbers = (str) => {};

const fixFileName = (str) => {};

const nameRedacter = (str) => {};

const camelToSnakeCase = (str) => {};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
