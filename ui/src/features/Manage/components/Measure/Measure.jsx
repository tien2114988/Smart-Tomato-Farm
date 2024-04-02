import React from 'react';
import './Measure.css'
import PropTypes from 'prop-types';

Measure.propTypes = {
    
};

function Measure(props) {
    var text = 'text-success';
    var border = 'border-success';
    var status = 'Bình thường';
    var bg = 'bg-success-subtle';

    if(props.status==-2){
        status = 'Rất thấp'
        text = 'text-danger';
        border = 'border-danger';
        bg = 'bg-danger-subtle';
    }else if(props.status==-1){
        status = 'Thấp'
        text = 'text-warning';
        border = 'border-warning';
        bg = 'bg-warning-subtle';
    }else if(props.status==1){
        status = 'Cao'
        text = 'text-warning';
        border = 'border-warning';
        bg = 'bg-warning-subtle';
    } else if(props.status==2){
        status = 'Rất cao'
        text = 'text-danger';
        border = 'border-danger';
        bg = 'bg-danger-subtle';
    }

    return (
        <div className={`measure ${bg} rounded-3 m-4 ${text} border ${border}`}>
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
            <div className='measure-footer text-center p-1'>{status}</div>
        </div>
    );
}

export default Measure;