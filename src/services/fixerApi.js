const baseURL = 'http://api.fixer.io';

export let getLatest = (currency = 'PHP') => fetch(`${baseURL}/latest?base=${currency}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });

export let findByCurrency = (name) => fetch(`${baseURL}/latest?base=${name}`)
    .then((response) => response.json());

export let findById = (id) => fetch(`${baseURL}/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });