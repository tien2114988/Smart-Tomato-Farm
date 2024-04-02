import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Area from '../../components/Area/Area';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Alert } from '@mui/material';
import deviceApi from '../../../../api/deviceApi';

Tracking.propTypes = {
    
};

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

function convertThreshold(threshold){
    return threshold.reduce((acc,cur)=>{
        acc[cur.area_id] = cur;
        return acc;
    },[]);
}


function Tracking(props) {
    const [areas, setAreas] = useState([]);
    const [alert, setAlert] = useState({
        text : 'Mọi thông số đang ở trạng thái bình thường',
        status : 'success'
    });

    var tempThreshold = 
    [{
        level1 : 1,
        level2 : 50,
        level3 : 60,
        level4 : 80,
        area_id : 1
    },{
        level1 : 1,
        level2 : 50,
        level3 : 60,
        level4 : 100,
        area_id : 2
    }]

    var airThreshold = 
    [{
        level1 : 1,
        level2 : 40,
        level3 : 60,
        level4 : 80,
        area_id : 1
    },{
        level1 : 1,
        level2 : 40,
        level3 : 60,
        level4 : 80,
        area_id : 2
    }]

    var soilThreshold = 
    [{
        level1 : 1,
        level2 : 40,
        level3 : 60,
        level4 : 80,
        area_id : 1
    },{
        level1 : 1,
        level2 : 40,
        level3 : 60,
        level4 : 80,
        area_id : 2
    }]

    var lightThreshold = 
    [{
        level1 : 1,
        level2 : 40,
        level3 : 60,
        level4 : 80,
        area_id : 1
    },{
        level1 : 1,
        level2 : 40,
        level3 : 60,
        level4 : 80,
        area_id : 2
    }]

    tempThreshold = convertThreshold(tempThreshold);
    airThreshold = convertThreshold(airThreshold);
    soilThreshold = convertThreshold(soilThreshold);
    lightThreshold = convertThreshold(lightThreshold);

    

    useEffect(()=>{
        const fetchDevices = async()=>{
            var datas = await deviceApi.getAll();

            datas = datas.reduce((acc, cur) => {
                const area_id = cur.group.key.slice(-1);
                if(isNaN(area_id)){
                    return acc;
                }

                if (!acc[area_id]) {
                  acc[area_id] = [];
                }

                if(cur.name=='cambien_doam'){
                    cur.displayName = 'Độ ẩm không khí';
                    cur.icon = 'bi bi-droplet';
                    cur.status = calculateStatus(cur.last_value, airThreshold[area_id]);
                    cur.unit = '%';
                }else if(cur.name=='cambien_nhietdo'){
                    cur.displayName = 'Nhiệt độ';
                    cur.icon = 'bi bi-thermometer-half';
                    cur.status = calculateStatus(cur.last_value, tempThreshold[area_id]);
                    cur.unit = '°C';
                }else if(cur.name=='cambien_anhsang'){
                    cur.displayName = 'Cường độ ánh sáng';
                    cur.icon = 'bi bi-brightness-high';
                    cur.status = calculateStatus(cur.last_value, lightThreshold[area_id]);
                    cur.unit = '%';
                }else if(cur.name=='doam_dat'){
                    cur.displayName = 'Độ ẩm đất';
                    cur.icon = 'bi bi-moisture';
                    cur.status = calculateStatus(cur.last_value, soilThreshold[area_id]);
                    cur.unit = '%';
                }

                if(cur.status==-2){
                    setAlert({
                        text: `Nguy hiểm : ${cur.displayName} đang ở mức rất thấp`,
                        status: 'error'
                    })
                }else if(cur.status==-1){
                    setAlert({
                        text: `Cảnh báo : ${cur.displayName} đang ở mức thấp`,
                        status: 'warning'
                    })
                }else if(cur.status==0){
                    setAlert({
                        text: `Mọi thông số đang ở trạng thái bình thường`,
                        status: 'Success'
                    })
                }else if(cur.status==1){
                    setAlert({
                        text: `Cảnh báo : ${cur.displayName} đang ở mức cao`,
                        status: 'warning'
                    })
                }else if(cur.status==2){
                    setAlert({
                        text: `Nguy hiểm : ${cur.displayName} đang ở mức rất cao`,
                        status: 'error'
                    })
                }

                acc[area_id].push(cur);
                return acc;
              }, []);


      


            setAreas(datas);
        }
        fetchDevices();

    },[])



    return (
        <div className='container'>
            <Alert className='m-3' severity={`${alert.status}`}>{`${alert.text}`}</Alert>
            {areas.map((area,idx)=><Area key={idx} page='tracking' name={`Khu vực ${idx}`} area={area}></Area>)}
            <div className='d-flex flex-row-reverse my-5'>
                <Link to='/manage/setting' type="button" className="btn btn-primary justify-content-end">Thiết lập</Link>
            </div>
        </div>
    );
}

export default Tracking;