import React from 'react';
import PropTypes from 'prop-types';
import AreaList from '../../components/AreaList/AreaList';

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
        <div>
            <AreaList areaList={areaList}></AreaList>
            <button type="button" class="btn btn-primary justify-content-end">Thiết lập</button>
        </div>
    );
}

export default Tracking;