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
        return -2;
    }else if(cur<threshold.level2){
        return -1;
    }else if(cur<=threshold.level3){
        return 0;
    }else if(cur<=threshold.level4){
        return 1;
    }else{
        return 2;
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
            .then((res) => {
              console.log(res);
              // console.log(lighten);
            })
            .catch((err) => {
              console.log(err);
            });

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
          .then((res) => {
            console.log(res);
            // console.log(lighten);
          })
          .catch((err) => {
            console.log(err);
          });

  }

    //triggerBuzzer();
    //triggerLCD('nguyen dai tien');
    const fetchApi = async()=>{
        deviceApi.triggerBuzzer({
            value: '0',
        });
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
        fetchTemp();
    },[]);
    

    // var tempThreshold = 
    // [{
    //     level1 : 1,
    //     level2 : 50,
    //     level3 : 60,
    //     level4 : 80,
    //     area_id : 1
    // },{
    //     level1 : 1,
    //     level2 : 50,
    //     level3 : 60,
    //     level4 : 100,
    //     area_id : 2
    // }]

    // var airThreshold = 
    // [{
    //     level1 : 1,
    //     level2 : 40,
    //     level3 : 60,
    //     level4 : 80,
    //     area_id : 1
    // },{
    //     level1 : 1,
    //     level2 : 40,
    //     level3 : 60,
    //     level4 : 80,
    //     area_id : 2
    // }]

    // var soilThreshold = 
    // [{
    //     level1 : 1,
    //     level2 : 40,
    //     level3 : 60,
    //     level4 : 80,
    //     area_id : 1
    // },{
    //     level1 : 1,
    //     level2 : 40,
    //     level3 : 60,
    //     level4 : 80,
    //     area_id : 2
    // }]

    // var lightThreshold = 
    // [{
    //     level1 : 1,
    //     level2 : 40,
    //     level3 : 60,
    //     level4 : 80,
    //     area_id : 1
    // },{
    //     level1 : 1,
    //     level2 : 40,
    //     level3 : 60,
    //     level4 : 80,
    //     area_id : 2
    // }]

    // tempThreshold = convertThreshold(tempThreshold);
    // airThreshold = convertThreshold(airThreshold);
    // soilThreshold = convertThreshold(soilThreshold);
    // lightThreshold = convertThreshold(lightThreshold);

    
    const fetchDevices = async()=>{
        //await deviceApi.triggerBuzzer({value:'0'});
        var datas = await deviceApi.getAll();
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

        if(status == -2){
            setAlert({
                status: 'error',
                text: `Nguy hiểm: ${cur_key} đang ở mức rất thấp`
            })
        }else if(status == -1){
            setAlert({
                status: 'warning',
                text: `Cảnh báo: ${cur_key} đang ở mức thấp`
            })
        }else if(status == 0){
            setAlert({
                status: 'success',
                text: `Mọi thông số ở mức bình thường`
            })
        }else if(status == 1){
            setAlert({
                status: 'warning',
                text: `Cảnh báo: ${cur_key} đang ở mức cao`
            })
        }else{
            setAlert({
                status: 'error',
                text: `Nguy hiểm: ${cur_key} đang ở mức rất cao`
            }) 
        }

    
        
          
        setAreas(datas);

        
    }

    useEffect(()=>{
        
        let timerId = setInterval(()=>{
            console.log(alert.status);
            fetchDevices();
            
            // triggerBuzzer();
            // triggerLCD();
        },2000)
        
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
