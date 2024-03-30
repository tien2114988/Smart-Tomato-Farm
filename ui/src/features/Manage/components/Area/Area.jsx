import React from 'react';
import PropTypes from 'prop-types';
import Measure from '../Measure/Measure';
import './Area.css'
import Scale from '../Scale/Scale';

Area.propTypes = {
    
};

function Area(props) {
    return (
        <div className='area ivory-bg rounded-5 row m-3'>
            <div className='area-name fs-3 m-3'>Khu vực A</div>
            {props.area.map(x=><div className='col-xs-3 col-md-5 col-lg m-3 aliceBlue-bg rounded-3'>
                <Measure icon={x.icon} name={x.name} value={x.value} unit={x.unit} status={x.status}/>
                <Scale />
            </div>)}

        </div>
    );
}

export default Area;