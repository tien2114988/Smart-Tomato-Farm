import React from 'react';
import PropTypes from 'prop-types';
import AreaList from '../../components/Area/Area';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

Setting.propTypes = {
    
};

function Setting(props) {
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
            <div className='row m-3'>
                <div className='col text-danger'>Rất thấp : [0, mức 1) </div>
                <div className='col text-warning'>Thấp : [mức 1, mức 2) </div>
                <div className='col text-primary'>Bình thường : [mức 2, mức 3] </div>
                <div className='col text-warning'>Cao : (mức 3, mức 4] </div>
                <div className='col text-danger'>Rất cao : (mức 4, 100] </div>
            </div>
            <AreaList page='setting' areaList={areaList}></AreaList>
            <div className='d-flex flex-row-reverse my-5'>
                <Link to='/manage' type="button" className="btn btn-secondary justify-content-end">Thoát</Link>
            </div>
            
        </div>
    );
}

export default Setting;