import axios from "axios";

//Crio objeto API para conexão
const api = axios.create({
    timeout:2000
})
export default api;