import React from 'react';
import PropTypes from 'prop-types';
import AreaList from '../../components/AreaList/AreaList';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";


Tracking.propTypes = {
    
};

function Tracking(props) {
    


    const areaList = [[
        {
            icon: 'bi bi-thermometer-half',
            name: 'Nhiệt độ',
            value: '13',
            unit: '°C',
            status: 'Bình thường',
        },{
            icon: 'bi bi-droplet',
            name: 'Độ ẩm không khí',
            value: '20',
            unit: '%',
            status: 'Cao'
        },{
            icon: 'bi bi-moisture',
            name: 'Độ ẩm đất',
            value: '13',
            unit: '%',
            status: 'Bình thường'
        },{
            icon: 'bi bi-brightness-high',
            name: 'Cường độ ánh sáng',
            value: '20',
            unit: '%',
            status: 'Thấp'
        }
    ],[
        {
            icon: 'bi bi-thermometer-half',
            name: 'Nhiệt độ',
            value: '13',
            unit: '°C',
            status: 'Bình thường',
        },{
            icon: 'bi bi-droplet',
            name: 'Độ ẩm không khí',
            value: '20',
            unit: '%',
            status: 'Cao'
        },{
            icon: 'bi bi-moisture',
            name: 'Độ ẩm đất',
            value: '13',
            unit: '%',
            status: 'Bình thường'
        },{
            icon: 'bi bi-brightness-high',
            name: 'Cường độ ánh sáng',
            value: '20',
            unit: '%',
            status: 'Thấp'
        }  
    ]]

    return (
        <div className='container'>
            <AreaList areaList={areaList}></AreaList>
            <div className='d-flex flex-row-reverse my-5'>
                <Link to='/setting' type="button" className="btn btn-primary justify-content-end">Thiết lập</Link>
            </div>
            
        </div>
    );
}

export default Tracking;