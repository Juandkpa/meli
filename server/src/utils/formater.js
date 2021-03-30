const formatDecimals = (decimals) => {
  return decimals.length === 1 ? parseInt(decimals) * 10 : decimals;
};

const formatPrice = (price, currency_id) => {
  let [amount, decimals] = (price + "").split(".");

  amount = parseInt(amount);
  decimals = decimals ? formatDecimals(decimals) : "00";

  return { amount, decimals, currency: currency_id };
};

export { formatPrice };
