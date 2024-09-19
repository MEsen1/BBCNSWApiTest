import request from "supertest";

class apiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // Get Request
  async getRequest(endpoint = "") {
    try {
      const response = await request(this.baseUrl).get(endpoint);
      return response;
    } catch (error) {
      throw new Error(`Error fetching response: ${error.message}`);
    }
  }
}

export default apiClient;
