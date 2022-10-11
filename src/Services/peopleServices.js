import API from '../API'

const peopleServices = {
  getPeople: async (page, search='') => {
    try {
    const { data } = await API.get(`/people/?page=${page}&search=${search}`);
      return data
    } catch (error) {
      console.log(error)
    }
  },
  getPerson: async (id) => {
    try {
    const { data } = await API.get(`/people/${id}`)
    console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  },
}

export default peopleServices
