import React, { useState,useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import {Routes, Route} from 'react-router-dom';
import Tracking from './pages/Tracking/Tracking';
import Setting from './pages/Setting/Setting';
import { Alert } from '@mui/material';
import deviceApi from '../../api/deviceApi';
import thresholdApi from '../../api/thresholdApi';
import SettingToast from './components/SettingModal/SettingToast';
import axios from 'axios';


Manage.propTypes = {};

function calculateStatus(cur, threshold){
    if(cur<threshold.level1){
        return -1;
    }else if(cur>=threshold.level1 && cur<=threshold.level2){
        return 0;
    }else{
        return 1;
    }
}

// function convertThreshold(threshold){
//     return threshold.reduce((acc,cur)=>{
//         acc[cur.area_id] = cur;
//         return acc;
//     },[]);
// }



function Manage(props) {
    // deviceApi.triggerBuzzer({value:'0'});

    const triggerBuzzer = async (data) => {
          await axios
            .post(
              `https://io.adafruit.com/api/v2/viet_hcmut/feeds/khuvuc1.buzzer/data/`,
              { value: data },
              {
                headers: {
                  "Content-Type": "application/json",
                  "X-AIO-Key": "aio_qliQ64LT5XQdvAkPGdSm1Cqo0Xqz",
                },
              }
            )
            // .then((res) => {
            //   console.log(res);
            //   // console.log(lighten);
            // })
            // .catch((err) => {
            //   console.log(err);
            // });

    }

    const triggerLCD = async (data) => {
        await axios
          .post(
            `https://io.adafruit.com/api/v2/viet_hcmut/feeds/khuvuc1.lcd/data/`,
            { value:data },
            {
              headers: {
                "Content-Type": "application/json",
                "X-AIO-Key": "aio_qliQ64LT5XQdvAkPGdSm1Cqo0Xqz",
              },
            }
          )
        //   .then((res) => {
        //     console.log(res);
        //     // console.log(lighten);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

  }

    
    
        
    

    const [areas, setAreas] = useState([]);
    const [temp, setTemp] = useState([]);
    const [air, setAir] = useState([]);
    const [light, setLight] = useState([]);
    const [soil, setSoil] = useState([]);
    var status_list = [];
    const [alert, setAlert]  = useState({
        status: 'success',
        text: 'Mọi thông số đang ở trạng thái bình thường'
    });

    const fetchTemp = async ()=>{
        const tempThreshold = await thresholdApi.getTempThreshold();
        const airThreshold = await thresholdApi.getAirThreshold();
        const lightThreshold = await thresholdApi.getLightThreshold();
        const soilThreshold = await thresholdApi.getSoilThreshold();
        setTemp(tempThreshold);
        setAir(airThreshold);
        setLight(lightThreshold);
        setSoil(soilThreshold);
    }

    

    useEffect(()=>{
        // const fetchData = async () => {
        //     try {
        //         // Call fetchTemp and wait for it to complete
        //         await fetchTemp();
        //         // Now temp should be updated
        //         console.log(temp);
        //         // Once fetchTemp is complete, call fetchDevices
        //         await fetchDevices();
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };
    
        // Call the fetchData function when the component mounts
        fetchTemp();
    },[]);
    


    
    const fetchDevices = async()=>{
        var datas = await deviceApi.getAll();
        var buzzer, lcd;
        datas = datas.map((cur)=> {
            if(cur.name=='data_doamkk'){
                cur.displayName = 'Độ ẩm không khí';
                cur.icon = 'bi bi-droplet';
                cur.status = calculateStatus(cur.last_value, air[0]);
                cur.unit = '%';
            }else if(cur.name=='data_nhietdo'){
                cur.displayName = 'Nhiệt độ';
                cur.icon = 'bi bi-thermometer-half';
                cur.status = calculateStatus(cur.last_value, temp[0]);
                cur.unit = '°C';
            }else if(cur.name=='data_anhsang'){
                cur.displayName = 'Cường độ ánh sáng';
                cur.icon = 'bi bi-brightness-high';
                cur.status = calculateStatus(cur.last_value, light[0]);
                cur.unit = '%';
            }else if(cur.name=='data_doamdat'){
                cur.displayName = 'Độ ẩm đất';
                cur.icon = 'bi bi-moisture';
                cur.status = calculateStatus(cur.last_value, soil[0]);
                cur.unit = '%';
            }else if(cur.name=='buzzer'){
                buzzer = cur.last_value;
            }else if(cur.name=='LCD'){
                lcd = cur.last_value;
            }

            status_list[`${cur.displayName}`] = cur.status;
            

            return cur;
          });
        
        var cur_key = 'Nhiệt độ';

        for(var key in status_list){
            if(Math.abs(status_list[key])>Math.abs(status_list[cur_key])){
                cur_key = key;
            }
        }

        const status = status_list[cur_key];


        if(status == -1){
            setAlert({
                status: 'error',
                text: `Nguy hiểm: ${cur_key} đang ở mức thấp`
            })
        }else if(status == 0){
            setAlert({
                status: 'success',
                text: `Mọi thông số ở mức bình thường`
            })
        }else{
            setAlert({
                status: 'error',
                text: `Nguy hiểm: ${cur_key} đang ở mức cao`
            }) 
        }
        // triggerBuzzer();
        if(cur_key=='Cường độ ánh sáng'){
            cur_key = 'Cuong do anh sang';
        }else if(cur_key=='Nhiệt độ'){
            cur_key = 'Nhiet do';
        }else if(cur_key=='Độ ẩm đất'){
            cur_key = 'Do am dat';
        }else{
            cur_key = 'Do am khong khi';
        }

        var text;

        if((status == -1 || status == 1) && buzzer == '0'){
            triggerBuzzer('1');
        }else if(status == 0 && buzzer == '1'){
            triggerBuzzer('0');
        }

        if(status == -1){
            var text = `${cur_key} dang o muc thap`;
            if(text != lcd){
                triggerLCD(text);
            }
        }else if(status == 1){
            var text = `${cur_key} dang o muc cao`;
            if(text != lcd){
                triggerLCD(text);
            }
        }

        

        
          
        setAreas(datas);

        
    }

    useEffect(()=>{
        let timerId = setInterval(()=>{
            fetchDevices();
        },1000)
        
        return ()=>{
            clearInterval(timerId);
        }
    },[temp,air,light,soil])

    
    

    return (
        
        <div className='manage container'>
            {/* <button onClick={()=>fetchApi()}>fetch api</button> */}
            {/* <SettingToast></SettingToast> */}
            <Routes>
                <Route index element={<Tracking area={areas} alert={alert}/>}/>
                <Route path='setting' element={<Setting fetchTemp={fetchTemp} temp={temp} air={air} soil={soil} light={light}/>}/>
            </Routes> 
        </div>
    );

}

export default Manage;
