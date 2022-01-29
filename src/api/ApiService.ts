import { ISuccessResponse } from "types/ISuccessResponse";

class ApiService {
  private apiURL: string | undefined = process.env.REACT_APP_PIXABAY_API_URL;

  private apiKey: string | undefined = process.env.REACT_APP_PIXABAY_API_KEY;

  async fetchPictures(query?: string): Promise<ISuccessResponse> {
    const response: Response = await fetch(
      `${this.apiURL}?key=${this.apiKey}&${new URLSearchParams(`q=${query}`)}`,
    );
    return response.json();
  }
}

export default ApiService;
