import API from '../API'

const starshipsServices = {
  getStarships: async (page, search= '') => {
    try {
      const { data } = await API.get(`/starships?page=${page}&search=${search}`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
  getStarshipImage: async (id) => {
    try {
      const { data } = await API.get(`/starships/${id}.jpg`)
        return data
      } catch (error) {
        console.log(error)
      }
  },
  getStarship: async (id) => {
    try {
    const { data } = await API.get(`/starships/${id}`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
}

export default starshipsServices
