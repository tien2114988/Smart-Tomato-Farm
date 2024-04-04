import adafruit from "./adafruit";
import axios from 'axios';


const deviceApi = {
    getAll(params){
        return adafruit.get('',params)
    },

    // async triggerBuzzer(data){
    //     // await adafruit.post('/khuvuc1.buzzer/data', data).then().catch((error)=>{
    //     //     console.log(error);
    //     // })
        
    // }

    // async triggerBuzzer (data){
    //       await axios
    //         .post(
    //           `https://io.adafruit.com/api/v2/viet_hcmut/feeds/khuvuc1.buzzer/data/`,
    //           { data },
    //           {
    //             headers: {
    //               "Content-Type": "application/json",
    //               "X-AIO-Key": "aio_qliQ64LT5XQdvAkPGdSm1Cqo0Xqz",
    //             },
    //           }
    //         )
    //         .then((res) => {
    //           console.log(res);
    //           // console.log(lighten);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });

    // }
}

export default deviceApi;