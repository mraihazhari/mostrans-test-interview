import axios from 'axios'

const API_URL = "http://localhost:4000/create"

export const postLocation = async (data, location) => {
    try {
        //body adalah menambahkan data dan location
        const body = {
            data: data,
            location: location
        }
        const response = await axios.post(API_URL, body)
    } catch (error) {
        console.error(error)
    }
};