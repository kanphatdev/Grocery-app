const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL:'http://127.0.0.1:1337/api'
})

const getCategory = () => axiosClient.get('/categories?populate=icon');
const getSlider = () => axiosClient.get('/sliders?populate=image').then(resp=>{
    return resp.data.data
})
const getCategoryList = () =>  axiosClient.get('/categories?populate=icon').then(resp=>{
    return resp.data.data
})
const getAllProducts = () => axiosClient.get('/products?populate=*').then(resp => {
    return resp.data.data
})
const getProductsByCategory = (category) => axiosClient.get('/products?filters[categories][name][$in]='+category+"&populate=*").then(resp =>{
    return resp.data.data
})
export default {
    getCategory,
   getSlider,
   getCategoryList,
   getAllProducts,
   getProductsByCategory
}