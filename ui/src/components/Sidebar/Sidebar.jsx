import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

Sidebar.propTypes = {
    
};

function Sidebar(props) {
    return (
        <div>
            <p><NavLink to='/manage' className='btn btn-primary'>Manage</NavLink></p>
        </div>
    );
}

export default Sidebar;