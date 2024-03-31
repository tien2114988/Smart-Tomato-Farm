import React from 'react';
import './Measure.css'
import PropTypes from 'prop-types';

Measure.propTypes = {
    
};

function Measure(props) {
    

    return (
        <div className='measure bg-honeyDew rounded-3 m-4 text-success border border-success'>
            <div className='measure-header row p-1'>
                <div className='measure-name col-2 bolder fw-bold'>
                    <i className={`${props.icon}`}></i>
                </div>
                <div className='measure-name col bolder fw-bold'>{props.name}</div>
            </div>
            <div className='measure-body row text-center p-1'>
                <div className='measure-value col-5 fs-1'>{props.value}</div>
                <div className='measure-unit col-5 d-flex align-items-center justify-content-center fs-4'>{props.unit}</div>
            </div>
            <div className='measure-footer text-center p-1'>{props.status}</div>
        </div>
    );
}

export default Measure;