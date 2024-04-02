import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import {Routes, Route} from 'react-router-dom';
import Tracking from './pages/Tracking/Tracking';
import Setting from './pages/Setting/Setting';
import { Alert } from '@mui/material';
import deviceApi from '../../api/deviceApi';

Manage.propTypes = {};

function Manage(props) {
    


    return (
        <div className='manage container'>
            <Routes>
                <Route index element={<Tracking/>}/>
                <Route path='setting' element={<Setting/>}/>
            </Routes>
        </div>
    );
}

export default Manage;
