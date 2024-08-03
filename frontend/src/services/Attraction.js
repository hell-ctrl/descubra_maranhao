import axios from "axios";

class Attraction {
  static baseUrl = "http://localhost:3000/attraction";

  static async getRecomendeds() {
    const { data } = await axios.get(`${this.baseUrl}/recomendeds`);
    return data;
  };
  
  static async findByName(attractionName) {
    const { data } = await axios.get(`${this.baseUrl}/${attractionName}`);
    return data;
  }

  static async findAll(q, page, perPage) {
    const { data } = await axios.get(`${this.baseUrl}?q=${q}&page=${page || 1}&per_page=${perPage || 10}`);
    return data;
  }
}

export default Attraction;
