import axios from 'axios';

class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.escuelajs.co/api/v1',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg',
      },
    });
  }

  getProductsList(term = '', reset, offset, limit) {
    return this.http.get(
      `/products?title=${term}&offset=${reset ? 0 : offset}&limit=${limit}`,
    );
  }

  getProductInfo(id) {
    return this.http.get(`/products/${id}`);
  }
}

export default new ApiService();
