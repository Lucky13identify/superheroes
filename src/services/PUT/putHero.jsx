import axios from 'axios';

async function putHero(hero) {
  const API = 'https://fierce-wildwood-40904.herokuapp.com/api/';

  try {
    const response = await axios.put(`${API}superheroes/update`, hero);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default putHero;
