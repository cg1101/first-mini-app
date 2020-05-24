/**
 * This routine checks the credit card number. The following checks are made:

1. A number has been provided
2. The number is a right length for the card
3. The number has an appropriate prefix for the card
4. The number has a valid modulus 10 number check digit if required

If the validation fails an error is reported.

The structure of credit card formats was gleaned from a variety of sources on the web, although the
best is probably on Wikepedia ('Credit card number'):

  http://en.wikipedia.org/wiki/Credit_card_number

Parameters:
            cardnumber           number on the card
            cardname             name of card as defined in the card list below

Author:     John Gardner
Date:       1st November 2003
Updated:    26th Feb. 2005      Additional cards added by request
Updated:    27th Nov. 2006      Additional cards added from Wikipedia
Updated:    18th Jan. 2008      Additional cards added from Wikipedia
Updated:    26th Nov. 2008      Maestro cards extended
Updated:    19th Jun. 2009      Laser cards extended from Wikipedia
Updated:    11th Sep. 2010      Typos removed from Diners and Solo definitions (thanks to Noe Leon)
Updated:    10th April 2012     New matches for Maestro, Diners Enroute and Switch
Updated:    17th October 2012   Diners Club prefix 38 not encoded

   If a credit card number is invalid, an error reason is loaded into the global ccErrorNo variable.
   This can be be used to index into the global error  string array to report the reason to the user
   if required:

   e.g. if (!checkCreditCard (number, name) alert (ccErrors(ccErrorNo);
*/

/**
 * check if given credit card number if of given type
 * @param cardnumber 
 * @param cardname 
 */
export function checkCreditCard (cardnumber: string, cardname: string): boolean {
  let ccErrorNo = 0;
  const ccErrors = new Array<string>();

  ccErrors [0] = 'Unknown card type';
  ccErrors [1] = 'No card number provided';
  ccErrors [2] = 'Credit card number is in invalid format';
  ccErrors [3] = 'Credit card number is invalid';
  ccErrors [4] = 'Credit card number has an inappropriate number of digits';
  ccErrors [5] = 'Warning! This credit card number is associated with a scam attempt';

  // Array to hold the permitted card characteristics
  const cards = new Array<{
    name: string;
    length: string;
    prefixes: string;
    checkdigit: boolean;
  }>();

  // Define the cards we support. You may add addtional card types as follows.

  //  Name:         As in the selection box of the form - must be same as user's
  //  Length:       List of possible valid lengths of the card number for the card
  //  prefixes:     List of possible prefixes for the card
  //  checkdigit:   Boolean to say whether there is a check digit

  cards [0] = {name: 'Visa',
                length: '13,16',
                prefixes: '4',
                checkdigit: true};
  cards [1] = {name: 'MasterCard',
                length: '16',
                prefixes: '51,52,53,54,55',
                checkdigit: true};
  cards [2] = {name: 'DinersClub',
                length: '14,16',
                prefixes: '36,38,54,55',
                checkdigit: true};
  cards [3] = {name: 'CarteBlanche',
                length: '14',
                prefixes: '300,301,302,303,304,305',
                checkdigit: true};
  cards [4] = {name: 'AmEx',
                length: '15',
                prefixes: '34,37',
                checkdigit: true};
  cards [5] = {name: 'Discover',
                length: '16',
                prefixes: '6011,622,64,65',
                checkdigit: true};
  cards [6] = {name: 'JCB',
                length: '16',
                prefixes: '35',
                checkdigit: true};
  cards [7] = {name: 'enRoute',
                length: '15',
                prefixes: '2014,2149',
                checkdigit: true};
  cards [8] = {name: 'Solo',
                length: '16,18,19',
                prefixes: '6334,6767',
                checkdigit: true};
  cards [9] = {name: 'Switch',
                length: '16,18,19',
                prefixes: '4903,4905,4911,4936,564182,633110,6333,6759',
                checkdigit: true};
  cards [10] = {name: 'Maestro',
                length: '12,13,14,15,16,18,19',
                prefixes: '5018,5020,5038,6304,6759,6761,6762,6763',
                checkdigit: true};
  cards [11] = {name: 'VisaElectron',
                length: '16',
                prefixes: '4026,417500,4508,4844,4913,4917',
                checkdigit: true};
  cards [12] = {name: 'LaserCard',
                length: '16,17,18,19',
                prefixes: '6304,6706,6771,6709',
                checkdigit: true};

  // Establish card type
  var cardType = -1;
  for (let i=0; i < cards.length; i++) {
    // See if it is this card (ignoring the case of the string)
    if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
      cardType = i;
      break;
    }
  }

  // If card type not found, report an error
  if (cardType == -1) {
    ccErrorNo = 0;
    return false;
  }

  // Ensure that the user has provided a credit card number
  if (cardnumber.length == 0)  {
    ccErrorNo = 1;
    return false;
  }

  // Now remove any spaces from the credit card number
  cardnumber = cardnumber.replace(/\s/g, '');

  // Check that the number is numeric
  const cardNo = cardnumber;
  const cardexp = /^[0-9]{13,19}$/;
  if (!cardexp.exec(cardNo))  {
    ccErrorNo = 2;
    return false;
  }

  // Now check the modulus 10 check digit - if required
  if (cards[cardType].checkdigit) {
    let checksum = 0;                                  // running checksum total
    // let mychar = '';                                   // next char to process
    let j = 1;                                         // takes value of 1 or 2

    // Process each digit one by one starting at the right
    let calc: number;
    for (let i = cardNo.length - 1; i >= 0; i--) {

      // Extract the next digit and multiply by 1 or 2 on alternative digits.
      calc = Number(cardNo.charAt(i)) * j;

      // If the result is in two digits add 1 to the checksum total
      if (calc > 9) {
        checksum = checksum + 1;
        calc = calc - 10;
      }

      // Add the units element to the checksum total
      checksum = checksum + calc;

      // Switch the value of j
      if (j ==1) {j = 2} else {j = 1};
    }

    // All done - if checksum is divisible by 10, it is a valid modulus 10.
    // If not, report an error.
    if (checksum % 10 != 0)  {
      ccErrorNo = 3;
      return false;
    }
  }

  // Check it's not a spam number
  if (cardNo == '5490997771092064') {
    ccErrorNo = 5;
    return false;
  }

  // The following are the card-specific checks we undertake.
  let isLengthValid = false;
  let isPrefixValid = false;

  // We use these for holding the valid lengths and prefixes of a card type
  let prefix = new Array<string>();
  let lengths = new Array ();

  // Load an array with the valid prefixes for this card
  prefix = cards[cardType].prefixes.split(',');

  // Now see if any of them match what we have in the card number
  for (let i = 0; i < prefix.length; i++) {
    const exp = new RegExp('^' + prefix[i]);
    if (exp.test (cardNo)) {
      isPrefixValid = true
    };
  }

  // If it isn't a valid prefix there's no point at looking at the length
  if (!isPrefixValid) {
    ccErrorNo = 3;
    return false;
  }

  // See if the length is valid for this card
  lengths = cards[cardType].length.split(',');
  for (let j = 0; j < lengths.length; j++) {
    if (cardNo.length == lengths[j]) {
      isLengthValid = true;
    }
  }

  // See if all is OK by seeing if the length was valid. We only check the length if all else was
  // hunky dory.
  if (!isLengthValid) {
    ccErrorNo = 4;
    return false;
  };

  // The credit card is in the required format.
  return ccErrorNo === 0;
  // return true;
}

/**
 * Find corresponding credit card type of given credit card number
 * @param cardNum credit card number string
 */
export function getCardType(cardNum: string): string {
  let payCardType: string = '';

  const regexMap = [
    {regEx: /^4[0-9]{5}/ig, cardType: 'Visa'},
    {regEx: /^5[1-5][0-9]{4}/ig, cardType: 'MasterCard'},
    {regEx: /^3[47][0-9]{3}/ig, cardType: 'AmEx'},
    {regEx: /^(5[06-8]\d{4}|6\d{5})/ig, cardType: 'Maestro'},
  ];

  for (let j = 0; j < regexMap.length; j++) {
    if (cardNum.match(regexMap[j].regEx)) {
      payCardType = regexMap[j].cardType;
      break;
    }
  }

  if (cardNum.indexOf('50') === 0 || cardNum.indexOf('60') === 0 || cardNum.indexOf('65') === 0) {
    const g = '508500-508999|606985-607984|608001-608500|652150-653149';
    const i = g.split('|');
    for (let d = 0; d < i.length; d++) {
      const c = parseInt(i[d].split('-')[0], 10);
      const f = parseInt(i[d].split('-')[1], 10);
      if ((parseInt(cardNum.substr(0, 6)) >= c && parseInt(cardNum.substr(0, 6)) <= f) &&
          cardNum.length >= 6) {
        payCardType = 'RUPAY';
        break;
      }
    }
  }
  return payCardType;
}

/**
 * validate credit card number
 * @param cardNum credit card number string
 */
export function luhnCheck(cardNum: string): boolean {
  // Luhn Check Code from https://gist.github.com/4075533
  // accept only digits, dashes or spaces
  const numericDashRegex = /^[\d\-\s]+$/;
  if (!numericDashRegex.test(cardNum)) {
    return false;
  }

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  const strippedField = cardNum.replace(/\D/g, '');

  for (let n = strippedField.length - 1; n >= 0; n--) {
      const cDigit = strippedField.charAt(n);
      nDigit = parseInt(cDigit, 10);
      if (bEven) {
          if ((nDigit *= 2) > 9) nDigit -= 9;
      }
      nCheck += nDigit;
      bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

/**
 * check if expiry date is passed
 * @param expiryMonth 
 * @param expIryYear 
 */
export function dateCheck(expiryMonth: string, expIryYear: string): boolean {
  const today = new Date();
  const someday = new Date();
  expiryMonth = expiryMonth.padStart(2, '0');
  expIryYear = expIryYear.padStart(2, '0');
  expIryYear = '20' + expIryYear;
  someday.setFullYear(parseInt(expIryYear), parseInt(expiryMonth), 1);
  return someday >= today;
}
