import adafruit from "./adafruit"

const deviceApi = {
    getAll(params){
        return adafruit.get('',params)
    }
}

export default deviceApi;