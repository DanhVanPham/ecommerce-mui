export function fCurrencyVND(amount) {
  // Convert the amount to a string with fixed 2 decimal places
  const fixedAmount = amount.toFixed(0);

  // Use regex to add thousand separators
  const formattedAmount = fixedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Prepend the currency symbol "₫"
  return `₫${formattedAmount}`;
}

export function fThousandSeparator(number, nullValue = 0) {
  if (!number) return nullValue;

  const thousands = /\B(?=(\d{3})+(?!\d))/g;

  const parts = number.toString().split(".");

  const numberPart = parts[0].replace(thousands, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : "";

  return numberPart + decimalPart;
}
