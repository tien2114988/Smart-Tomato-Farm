import React from 'react';
import PropTypes from 'prop-types';
import './Area.css'
import Setup from '../Setup/Setup';
import Measure from '../Measure/Measure';

Area.propTypes = {
    
};

function Area({page, areaList}) {
    return (
        <div className=''>
            {areaList.map(area=>
            <div>
                <div className='rounded-4 row mb-5 aliceBlue-bg border border-primary pb-3'>
                    <div className='area-name fs-3 m-3'>Khu vực A</div>
                    {area.map(x=>
                    <div className='col-xs-3 col-md-5 col-lg'>
                        {page == 'tracking' ? 
                        <Measure icon={x.icon} name={x.name} value={x.value} unit={x.unit} status={x.status}/> : 
                        <Setup/>
                        }  
                    </div>
                    )}
                </div>
            </div>
            )}
        </div>
    );
}

export default Area;