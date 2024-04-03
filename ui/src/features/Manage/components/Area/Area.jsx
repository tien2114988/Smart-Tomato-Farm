import React from 'react';
import PropTypes from 'prop-types';
import './Area.css'
import Setup from '../Setup/Setup';
import Measure from '../Measure/Measure';

Area.propTypes = {
    
};

function Area(props) {
    return (
        <div className='rounded-4 row mb-5 aliceBlue-bg border border-primary pb-3'>
            <div className='area-name fs-3 m-3'>{props.name}</div>
            {props.page == 'tracking' ? 
                props.area?.filter(measure=>measure.icon).map(measure=>
                    <div key={measure.id} className='col-xs-3 col-md-5 col-lg'>
                        <Measure icon={measure.icon} name={measure.displayName} value={measure.last_value} unit={measure.unit} status={measure.status}/>
                    </div>) : 
                <div className='row'>
                    <div className='col-xs-3 col-md-5 col-lg'>
                        <Setup name='Nhiệt độ' threshold={props.temp}/>
                    </div>
                    <div className='col-xs-3 col-md-5 col-lg'>
                        <Setup name='Độ ẩm không khí' threshold={props.air}/>
                    </div>
                    <div className='col-xs-3 col-md-5 col-lg'>
                        <Setup name='Độ ẩm đất' threshold={props.soil}/>
                    </div>
                    <div className='col-xs-3 col-md-5 col-lg'>
                        <Setup name='Cường độ ánh sáng' threshold={props.light}/>
                    </div>
                </div>
            }

            
        </div>
    );
}

export default Area;