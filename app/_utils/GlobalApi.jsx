const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL:'http://127.0.0.1:1337/api'
})

const getCategory = () => axiosClient.get('/categories?populate=icon');
const getSlider = () => axiosClient.get('/sliders?populate=image').then(resp=>{
    return resp.data.data
})
export default {
    getCategory,
   getSlider
}