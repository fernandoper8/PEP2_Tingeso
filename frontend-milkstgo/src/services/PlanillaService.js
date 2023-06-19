import axios from 'axios'

const PLANILLA_API_URL = "http://localhost:8080/planilla"

class PlanillaService{

    getPlanillas(){
        return axios.get(PLANILLA_API_URL);
    }

    crearPlanilla(){
        return axios.post(PLANILLA_API_URL);
    }

}

const instance = new PlanillaService()
export default instance