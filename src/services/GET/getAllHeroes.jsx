import axios from 'axios';

async function getAllHeroes(limit, page) {
  const API = 'https://fierce-wildwood-40904.herokuapp.com/api/';

  try {
    const response = await axios.get(
      `${API}superheroes/?limit=${limit}&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getAllHeroes;
