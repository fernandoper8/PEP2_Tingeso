import axios from 'axios'

const ACOPIO_API_URL = "http://127.0.0.1:59103/acopio"
const ACOPIO_SUBIR_API_URL = "http://127.0.0.1:59103/acopio/subir"

class AcopioService{

    getAcopios(){
        return axios.get(ACOPIO_API_URL);
    }

    subirAcopio(acopio){
        return axios.post(ACOPIO_SUBIR_API_URL, acopio);
    }

}
const instance = new AcopioService()
export default instance