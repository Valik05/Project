import API from "../API"


const peopleServices = {
    getPeople: async () => {
        try {
            const getPeople = await API.get('/people')
            return getPeople
    } catch (error) {
        console.log(error)
    }
    }
}