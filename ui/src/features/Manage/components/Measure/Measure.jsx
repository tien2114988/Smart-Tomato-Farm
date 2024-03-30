import React from 'react';
import './Measure.css'
import PropTypes from 'prop-types';

Measure.propTypes = {
    
};

function Measure(props) {
    

    return (
        <div className='measure bg-honeyDew rounded-5 my-3 text-success'>
            <div className='measure-header row p-1'>
                <i className={`${props.icon} col-1 fw-bold`}></i>
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