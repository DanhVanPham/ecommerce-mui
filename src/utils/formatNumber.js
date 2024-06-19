import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number, format = '') {
  let defaultFormat = Number.isInteger(number) ? '$0,0' : '$0,0.00'
  if (format) {
    defaultFormat = format
  }
  return numeral(number).format(defaultFormat);
}

export function fCurrencyVND(amount) {
  // Convert the amount to a string with fixed 2 decimal places
  const fixedAmount = amount.toFixed(0);

  // Use regex to add thousand separators
  const formattedAmount = fixedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Prepend the currency symbol "₫"
  return `₫${formattedAmount}`;
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return numeral(number).format('0.00a').replace('.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export function getOrdinalNum(number) {
  if (number > 3 && number < 21) return 'th';
  switch (number % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

export function fThousandSeparator(number, nullValue = 0) {
  if (!number) return nullValue;

  const thousands = /\B(?=(\d{3})+(?!\d))/g;

  const parts = number.toString().split(".");

  const numberPart = parts[0].replace(thousands, ",")
  const decimalPart = parts[1] ? `.${parts[1]}` : ""

  return numberPart + decimalPart;
}

export function formatCustom(string, format) {
  let regex = '';

  for (let i = 1; format.indexOf('X') >= 0; i += 1) {
    format = format.replace('X', `$${i}`);
    regex += '(\\d)';
  }
  regex += '[^]*'; // Match the rest of the string to crop characters overflowing the format.
  // Remove this ^ line if you want `format('12345678', 'XX/XX/XX')` to return `12/34/5678` instead of `12/34/56`;
  return string.replace(new RegExp(regex), format);
}

export function fPhoneNumber(value) {
  const number = value?.toString()?.match(/\d/g)?.join("");
  if (!number) return;

  let format = ''
  switch (number?.length) {
    case 10: {
      format = 'XX-XXXX-XXXX'
      break;
    }
    case 11: {
      format = 'XXX-XXXX-XXXX'
      break;
    }
    default:
  }

  if (format) return formatCustom(number, format)
  return number;
}
