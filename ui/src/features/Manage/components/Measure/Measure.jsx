import React from 'react';
import './Measure.css'
import PropTypes from 'prop-types';

Measure.propTypes = {
    
};

function Measure(props) {
    

    return (
        <div className='measure bg-honeyDew d-flex flex-column'>
            <div className='measure-header d-flex'>
                <i className={props.icon}></i>
                <div className='measure-name'>{props.name}</div>
            </div>
            <div className='measure-body d-flex'>
                <div className='measure-value'>{props.value}</div>
                <div className='measure-unit'>{props.unit}</div>
            </div>
            <div className='measure-footer'></div>
        </div>
    );
}

export default Measure;