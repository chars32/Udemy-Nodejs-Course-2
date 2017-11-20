// USD CAN 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:

const axios = require('axios');
// cambiamos las dos funciones getExchangeRate y getCountries y usamos
// async await para que se vuelvan asincronas 
const getExchangeRate = async (from, to) => {
  // Utilizamos try/catch para manejar los errors
  try {
    const response = await axios.get(`https://api.fixer.io/latest?base=${from}`);
    const rate = response.data.rates[to];

    if (rate) {
      return rate;
    }else {
      throw new Error(`Unable to get exhange rate for ${from} and ${to}`);
    }

  }catch (e) {
    throw new Error(`Unable to get exhange rate for ${from} and ${to}`)
  }
};

const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    return response.data.map((country) => country.name);
  } catch (e) {
    throw new Error(`Unable to get countries that use ${currencyCode}`)
  }
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


getConvertCurrency('USD', 'EUR', 1000).then((status) => {
  console.log(status)
}).catch((e) => console.log(e.message));