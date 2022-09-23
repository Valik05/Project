import API from '../API'

const starshipsServices = {
  getStarships: async (page) => {
    try {
      const { data } = await API.get(`/starships?page=${page}`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
}

export default starshipsServices
