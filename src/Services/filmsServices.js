import API from '../API'

const filmsServices = {
  getFilms: async (id) => {
    try {
    const { data } = await API.get(`/films/${id}`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
}

export default filmsServices