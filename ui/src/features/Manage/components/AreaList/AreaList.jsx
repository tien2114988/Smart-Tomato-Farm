import React from 'react';
import PropTypes from 'prop-types';
import Area from '../Area/Area'

AreaList.propTypes = {
    
};

function AreaList({areaList}) {
    


    return (
        <div className='area-list'>
            {areaList.map(x=>
            <div><Area area={x}/></div>
            )}
        </div>
    );
}

export default AreaList;