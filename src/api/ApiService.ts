export class ApiService {
    private apiURL: string | undefined = process.env.REACT_APP_PIXABAY_API_URL;
    private apiKey: string | undefined = process.env.REACT_APP_PIXABAY_API_KEY;
    
    async fetchPictures(query?: string): Promise<Response> {
        const response: Response = await fetch(`${this.apiURL}?key=${this.apiKey}&q=${new URLSearchParams(query)}`);
        return await response.json();
    }
}
