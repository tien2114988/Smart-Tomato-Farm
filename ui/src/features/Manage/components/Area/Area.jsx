import React from 'react';
import PropTypes from 'prop-types';
import Measure from '../Measure/Measure';
import './Area.css'

Area.propTypes = {
    
};

function Area(props) {
    return (
        <div className='area ivory-bg rounded-5 w-50'>
            {props.area.map(x=><Measure icon={x.icon} name={x.name}   />)}
        </div>
    );
}

export default Area;