import React from 'react';
import PropTypes from 'prop-types';
import Area from '../Area/Area'

AreaList.propTypes = {
    
};

function AreaList(props) {
    const areaList = [[
        {
            icon: 'bi bi-thermometer-half',
            name: 'Nhiệt độ',
            value: '13',
            unit: 'C',
            status: 'normal'
        },{
            icon: 'tempIcon',
            name: 'temp',
            value: '13',
            unit: 'C',
            status: 'normal'
        }
    ],[
        {
            icon: 'tempIcon',
            name: 'temp',
            value: '13',
            unit: 'C',
            status: 'normal'
        },{
            icon: 'tempIcon',
            name: 'temp',
            value: '13',
            unit: 'C',
            status: 'normal'
        }   
    ]]


    return (
        <div className='area-list'>
            {areaList.map(x=><Area area={x} />)}
        </div>
    );
}

export default AreaList;