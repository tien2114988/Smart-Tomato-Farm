import React from 'react';
import PropTypes from 'prop-types';
import {Routes, Route, useResolvedPath} from 'react-router-dom';
import Tracking from './pages/Tracking/Tracking';
import Setting from './pages/Setting/Setting';

Manage.propTypes = {
    
};

function Manage(props) {
    const url = useResolvedPath("").pathname;
    

    return (
        <div className='manage'>
            <Routes>
                <Route index element={<Tracking/>}/>
                <Route path='/setting' element={<Setting/>}/>
            </Routes>
            
        </div>
    );
}

export default Manage;