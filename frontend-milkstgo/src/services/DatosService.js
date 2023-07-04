import axios from 'axios'

const DATOS_API_URL = "http://127.0.0.1:53728/datos"

class DatosService{

    getDatos(){
        return axios.get(DATOS_API_URL);
    }

    subirDatos(datos){
        return axios.post(DATOS_API_URL + '/addDatos', datos);
    }

}

const instance = new DatosService()
export default instance