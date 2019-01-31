function romanCipher(num) {
 const romanNumerals = {
   1: 'I',
   2: 'II',
   3: 'III',
   4: 'IV',
   5: 'V',
   6: 'VI',
   7: 'VII',
   8: 'VIII',
   9: 'IX',
   10: 'X',
   20: 'XX',
   30: 'XXX',
   40: 'XL',
   50: 'L',
   60: 'LX',
   70: 'LXX',
   80: 'LXXX',
   90: 'XC',
   100: 'C',
   200: 'CC',
   300: 'CCC',
   400: 'CD',
   500: 'D',
   600: 'DC',
   700: 'DCC',
   800: 'DCCC',
   900: 'CM',
   1000: 'M'
 };

/***
    HELPER METHODS START
***/
function tensPlaceReduced(num, arr) {
  var singleDigit = Math.floor(num / 10);
  var tensDigit = singleDigit * 10;
  arr.push(tensDigit, num - tensDigit);
}

function hundredsPlaceReduced(num, arr) {
  // now whittle down hundreds, add to array for final process
  var singleDigit = Math.floor(num / 100);
  var hundredsDigit = singleDigit * 100;

  // check to see if we are done early by having no tens place digit
  // if so, just add the hundreds place into the array
  if(num - hundredsDigit === 0) {
    arr.push(hundredsDigit)
  } else {
   arr.push(hundredsDigit, num - hundredsDigit);
  }
}

function convertNumsToNumerals(arr) {
  return arr.reduce((accum, digit) => {
    return accum += romanNumerals[digit];
  }, '')
}
/***
    HELPER METHODS END
***/


/***
    MAIN FUNCTION
***/
function converterBox(num, arr) {
  // basic error checks
  if(num === 0) { return 0; }

  if(typeof num === 'string') {
    return 'only type numbers please';
  }

  if(romanNumerals.hasOwnProperty(num)) { return romanNumerals[num]; }

  // take care of the thousands place first, subtract num to get the hundreds
  while (num >= 1000) {
    arr.push(1000);
    num -= 1000;
  }

  // check if num is a low single digit, then add it to be converted later
  if(num < 10) { arr.push(num); }

  if (num >= 100) {
    hundredsPlaceReduced(num, arr)
  }

  // if num does equal 0, it means a whole 1,000s number was used,
  // so skip over this if statement
  if(num < 100 && num !== 0 && num >= 10) {
    tensPlaceReduced(num, arr);
  }

  // final check of tens place
  var tensPlaceDigit = arr[arr.length - 1];

  // check if last number is in romanNumerals object, then we can end early
  if (romanNumerals.hasOwnProperty(tensPlaceDigit)) {
    convertNumsToNumerals(arr);
  } else {
    // tens place needs reducing, remove last element to make room
    arr.splice(-1);
    tensPlaceReduced(tensPlaceDigit, arr);
  }

  return convertNumsToNumerals(arr);
}


 /***
    MAIN FUNCTION CALL
***/
 return converterBox(num, []);
}

// function createRomanNumeralBlogTitle(romanStr) {
//   var mRegex = /m+/gi;
//   var mLength = romanStr.match(mRegex)[0].length;
//   var romanStrCut = romanStr.substring(mLength);
//
//
//   return `M^${mLength}${romanStrCut}`;
// }

// 💽 artist --> title
// createRomanNumeralBlogTitle(romanCipher(6436));

export default romanCipher;
