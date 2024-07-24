import queryString from 'query-string';
/**
 * 
 * @param {object} options 
 * @param {number} options.page 
 * @param {number} options.results
 * @param {string} options.seed
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    seed: 'fpm2024-1',
    page: 1,
    results: 1,
  };
  const finallyOptions = {
    ...defaultOptions,
    ...options,
  };
  const queryStr = queryString.stringify(finallyOptions);
  return fetch(`https://randomuser.me/api/?${queryStr}`)
  .then((response) =>
    response.json()
  );
};

export const getEvents = (options={}) => {
  return fetch('/data/events.json')
  .then((response) => response.json())
}


export const getPhones = (options={}) => {
  return fetch('/data/phones.json')
  .then((response) => response.json())
}