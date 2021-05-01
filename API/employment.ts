import axios from 'axios'
import { URLs } from './constants'

export const employment = {
  loadAll: async () => {
    const { data } = await axios.get(URLs.employment)
    return data
  },
}

export default employment
