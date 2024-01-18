const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=m8PxgX2E3yXIsnO1gYuUc1MAU7Jy7ZgPzYPvGwls';

export type DateInput = {
    start_date: string
    end_date: string
}

export type APODResponseShape = {
    copyright: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
}

const buildURL = (params: DateInput) => `${APOD_API}&${new URLSearchParams(params)}`;

export async function fetchAPOD(params: DateInput): Promise<APODResponseShape[]> {
    try {
        const response = await fetch(buildURL(params));
        return response.json();
    } catch(e) {
        throw new Error('Something went wrong :(');
    }
}
