function formatCurrency(amount, currency = 'UGX') {
  const userLanguage =
    Intl.DateTimeFormat().resolvedOptions().timeZone === 'Africa/Kampala'
      ? 'en-UG'
      : window.navigator.language;

  return new Intl.NumberFormat(userLanguage, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount));
}

export default formatCurrency;
