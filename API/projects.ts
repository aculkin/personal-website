import axios from 'axios'
import { URLs } from './constants'

export const projects = {
  loadAll: async () => {
    const { data } = await axios.get(URLs.projects)
    return data
  },
}

export default projects
