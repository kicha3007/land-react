const smsAeroService = (phone, value) => {
  const username = encodeURI('kichigin@aicrobotics.ru');
  const apyKey = 'KpQJnGSWvW8lhp7GSNiD8xkawIvZ';
  const url = `https://@gate.smsaero.ru/v2/sms/send?number=${phone}&text=${value}&sign=SMS Aero`;

  const options = {
    method: 'GET',
    mode: 'cors',
    // language: 'ru',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${btoa(`${username}:${apyKey}`)}`,
    },
  };
  const getResult = async () => {
    const resultAll = await fetch(url, options)
      .then((response) => response.text())
      .then((response) => console.log('responseSms', response))
      .catch((error) => console.log('smsAeroError', error));

    return resultAll;
  };

  return getResult();
};

export { smsAeroService };