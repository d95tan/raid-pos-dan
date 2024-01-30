export function centsToDollars(cents) {
  if (typeof cents !== 'number') {
    return 0;
  }


  const dollars = parseInt(cents) / 100;
  const dollarsString = dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return dollarsString;
}
