import axios from 'axios';

async function deleteHero(heroId) {
  const API = 'https://fierce-wildwood-40904.herokuapp.com/api/';

  try {
    const response = await axios.delete(
      `${API}superheroes/delete/?id=${heroId}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default deleteHero;
