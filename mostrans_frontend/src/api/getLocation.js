import axios from 'axios'

const API_URL = "https://rickandmortyapi.com/api/location"

export const getLocation = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data.results
    } catch (error) {
        console.error(error)
    }
};