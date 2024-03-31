import React from 'react';
import PropTypes from 'prop-types';
import Measure from '../Measure/Measure';
import './Area.css'
import Scale from '../Scale/Scale';
import Setup from '../Setup/Setup';

Area.propTypes = {
    
};

function Area({area}) {
    return (
        <div className='area ivory-bg rounded-4 row mb-5 aliceBlue-bg border border-primary pb-3'>
            <div className='area-name fs-3 m-3'>Khu vực A</div>
            {area.map(x=><div className='col-xs-3 col-md-5 col-lg'>
                <Measure icon={x.icon} name={x.name} value={x.value} unit={x.unit} status={x.status}/>
                {/* <Setup/> */}
            </div>)}

        </div>
    );
}

export default Area;