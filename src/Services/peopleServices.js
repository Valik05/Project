import API from '../API'

const peopleServices = {
  getPeople: async (page) => {
    try {
    const { data } = await API.get(`/people/?page=${page}`)
      return data
    } catch (error) {
      console.log(error)
    }
  },
}

export default peopleServices
