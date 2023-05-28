import axios from 'axios';

async function getHeroByID(idHero) {
  const API = 'https://fierce-wildwood-40904.herokuapp.com/api/';

  try {
    const response = await axios.get(`${API}superheroes/getbyid/?id=${idHero}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getHeroByID;
