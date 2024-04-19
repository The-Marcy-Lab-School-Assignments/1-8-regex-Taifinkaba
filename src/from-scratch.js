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

const hasPunctuationEnd = (str) => {
  let punc = /[.!?]$/gi;
  return punc.test(str);
};

const hasNothingOrDigits = (str) => {
  let digit = /^$|^\d+$/gi;
  return digit.test(str);
};

const hasNoFlippers = (str) => {
  let flips = /^[^BCcDEHIKOoXxl]*$/;
  return flips.test(str);
};

const isValidEmail = (str) => {
  let email = /^[\w.]+@[\w]+\.[\w]{2,4}/;
  return email.test(str);
}

const isValidPhoneNumber = (str) => {
  let phone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  return phone.test(str);
};

const matchAllNumbers = (str) => {
  if(str.match(/\d+/g)) return str.match(/\d+/g);
  return [];
};

const matchAllNumbersAsNumbers = (str) => {
  let str2 = str.match(/\d+/g);
  if (str2) return str2.map(Number);
  return [];
};

const matchAllWords = (str) => {
  let word = /[a-zA-Z']+/g;
  if(str.match(word)) return str.match(word);
  return [];
};

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
