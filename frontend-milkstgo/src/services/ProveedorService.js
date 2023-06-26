import axios from 'axios'

const PROVEEDOR_API_URL = "http://127.0.0.1:59103/proveedor"

class ProveedorService{

    getProveedores(){
        return axios.get(PROVEEDOR_API_URL);
    }

    createProveedor(proveedor){
        return axios.post(PROVEEDOR_API_URL, proveedor);
    }

}
const instance = new ProveedorService()
export default instance