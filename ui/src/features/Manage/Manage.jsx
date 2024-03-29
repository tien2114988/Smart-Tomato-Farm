import React from 'react';
import PropTypes from 'prop-types';
import AreaList from './components/AreaList/AreaList';

Manage.propTypes = {
    
};

function Manage(props) {
    return (
        <div className='manage'>
            <AreaList />
        </div>
    );
}

export default Manage;