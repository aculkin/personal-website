import axios from 'axios'
import { URLs } from './constants'

export const technologies = {
  loadAll: async () => {
    const { data } = await axios.get(URLs.technologies)
    return data
  },
}

export default technologies
