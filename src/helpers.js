// const BASE_URL = "https://apiko-marketplace-api-2019.herokuapp.com/products/latest?offset=0&limit=20";
const BASE_URL = "https://jsonplaceholder.typicode.com";
const request = async (url) => {
  return fetch(`${BASE_URL}/${url}`).then((response) => {
    if (!response.ok) {
      throw console.log(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};

export const getProducts = () => request('posts');

