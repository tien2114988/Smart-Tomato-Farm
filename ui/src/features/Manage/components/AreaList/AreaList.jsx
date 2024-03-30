import React from 'react';
import PropTypes from 'prop-types';
import Area from '../Area/Area'

AreaList.propTypes = {
    
};

function AreaList({areaList}) {
    


    return (
        <div className='area-list container'>
            {areaList.map(x=><Area area={x} />)}
        </div>
    );
}

export default AreaList;