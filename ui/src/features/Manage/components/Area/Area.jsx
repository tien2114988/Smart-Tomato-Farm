import React from 'react';
import PropTypes from 'prop-types';
import './Area.css'
import Setup from '../Setup/Setup';
import Measure from '../Measure/Measure';

Area.propTypes = {
    
};

function Area({page, area, name}) {

    return (
        <div className='rounded-4 row mb-5 aliceBlue-bg border border-primary pb-3'>
            <div className='area-name fs-3 m-3'>{name}</div>
            {area?.filter(measure=>measure.icon).map(measure=>
            <div key={measure.id} className='col-xs-3 col-md-5 col-lg'>
                {page == 'tracking' ? 
                <Measure icon={measure.icon} name={measure.displayName} value={measure.last_value} unit={measure.unit} status={measure.status}/> : 
                <Setup/>
                }  
            </div>
             )}
        </div>
    );
}

export default Area;