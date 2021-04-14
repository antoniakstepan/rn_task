const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const request = async (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw console.log(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });
};

export const getProducts = () => request(BASE_URL)
