import axios from 'axios'
import { URLs } from './constants'

export const languages = {
  loadAll: async () => {
    const { data } = await axios.get(URLs.languages)
    return data
  },
}

export default languages
