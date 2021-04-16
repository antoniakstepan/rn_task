// const BASE_URL = "https://apiko-marketplace-api-2019.herokuapp.com/products/latest?offset=0&limit=20";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const request = async (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw console.log(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  });
};

export const getProducts = () => request(BASE_URL)
.then(value =>  value)

console.log(getProducts())

