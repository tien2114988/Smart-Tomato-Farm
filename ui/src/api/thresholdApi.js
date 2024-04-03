import db from "./db"

const url = 'manage';

const thresholdApi = {
    getTempThreshold(params){
        return db.get(`${url}/temp`,params);
    },

    getAirThreshold(params){
        return db.get(`${url}/air`,params);
    },

    getSoilThreshold(params){
        return db.get(`${url}/soil`,params);
    },

    getLightThreshold(params){
        return db.get(`${url}/light`,params);
    },

    updateTempThreshold(data){
        return db.put(`${url}/temp/${data.id}`,data);
    },

    updateAirThreshold(data){
        return db.put(`${url}/air/${data.id}`,data);
    },

    updateSoilThreshold(data){
        return db.put(`${url}/soil/${data.id}`,data);
    },

    updateLightThreshold(data){
        return db.put(`${url}/light/${data.id}`,data);
    },
}

export default thresholdApi;