import axios from "axios";

const fetchData = async (url, path) => {
  try {

    const response = await axios.get(url + path);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la requête HTTP :", error);
    throw error;
  }
};



export default fetchData
