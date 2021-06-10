const dadataService = (queryType, query) => {
  const url = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${queryType}`;
  const token = 'e867bffb113be7cccaaf1561770e24d82b928bcd';

  const options = {
    method: 'POST',
    mode: 'cors',
    language: 'ru',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ query }),
  };

  const getResult = async () => {
    const resultAll = await fetch(url, options)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.log('errorDadata', error));

    return resultAll;
  };

  return getResult();
};

export { dadataService };