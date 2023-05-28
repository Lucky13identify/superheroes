import axios from 'axios';

async function postNewHero(data) {
  const API = 'https://fierce-wildwood-40904.herokuapp.com/api/';

  try {
    const response = await axios.post(`${API}superheroes`, data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default postNewHero;
