import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Area from '../../components/Area/Area';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Alert } from '@mui/material';
import deviceApi from '../../../../api/deviceApi';

Tracking.propTypes = {
    
};





function Tracking({area, alert}) {

    return (
        <div className='container'>
            <Alert className='m-3' severity={`${alert.status}`}>{`${alert.text}`}</Alert>
            <Area page='tracking' name='Khu vực 1' area={area}></Area>
            <div className='d-flex flex-row-reverse my-5'>
                <Link to='/manage/setting' type="button" className="btn btn-primary justify-content-end">Thiết lập</Link>
            </div>
        </div>
    );
}

export default Tracking;