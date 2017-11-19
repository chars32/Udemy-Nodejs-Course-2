// USD CAN 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:

const axios = require('axios');

const getExchangeRate = (from, to) => {
  return axios.get(`https://api.fixer.io/latest?base=${from}`).then((response) => {
    return response.data.rates[to];
  });
}

const getCountries = (currencyCode) => {
  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then ((response) => {
    return response.data.map((country) => country.name);
  })
};
// Promises mode
const convertCurrency = (from, to, amount) => {
  let countries;
  return getCountries(to).then((tempCountries) => {
    countries = tempCountries;
    return getExchangeRate(from, to);
  }).then((rate) => {
    const exchangedAmount = amount * rate;

    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
  })
}
// Async/Await mode
const getConvertCurrency = async (from, to, amount) => {
  const listCountries = await getCountries(to);
  const exchangeRate = await getExchangeRate(from, to);
  const exchangedAmount = amount * exchangeRate

  return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${listCountries.join(', ')}`;
}


getConvertCurrency('MXN', 'USD', 1000).then((status) => {
  console.log(status)
})