import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-gvfitness.vercel.app",
})

export default api