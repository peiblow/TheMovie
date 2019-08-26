import { create } from 'axios'
import env from './env'

const api = create({
  baseURL: env.BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
    'api_key': env.API_KEY
  }
})

export default api