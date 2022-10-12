import API from "../API"

export const planetServices = {
  getPlanets: async (page, search='') => {
    try {
      const { data } = await API.get(`/planets?page=${page}&search=${search}`)
      return data
    } catch (error) {
      console.log(error)
    }
    },
    getPlanet: async (id) => {
        try {
            const {data} = await API.get(`/planets/${id}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    
}