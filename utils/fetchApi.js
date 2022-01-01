import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '377ca1ceefmsh379b3f8324639dbp19b8ebjsnd827a469b147'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((urt), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '377ca1ceefmsh379b3f8324639dbp19b8ebjsnd827a469b147'
          }
    })
}