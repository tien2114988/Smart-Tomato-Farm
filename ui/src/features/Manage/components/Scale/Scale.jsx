import React from 'react';
import PropTypes from 'prop-types';
import './Scale.css'

Scale.propTypes = {
    
};

function Scale(props) {
    const level1 = 50;
    const level2 = 60;
    const level3 = 70;
    const level4 = 80;

    const superLowWidth = level1/100;
    const lowWidth = (level2-level1)/100;
    const normalWidth = (level3-level2)/100;
    const highWidth = (level4-level3)/100;
    const superHighlWidth = (100-level4)/100;



    return ( 
        <div className="scale p-3">
            <div className='rounded-5 border scale-measure row'>
                <div style={{width:`${superLowWidth}%`}} className="scale-1 col rounded-start-5"></div>
                <div style={{width:`${lowWidth}%`}} className="scale-2 col"></div>
                <div style={{width:`${normalWidth}%`}} className="scale-3 col"></div>
                <div style={{width:`${highWidth}%`}} className="scale-4 col"></div>
                <div style={{width:`${superHighlWidth}%`}} className="scale-5 col rounded-end-5"></div>
            </div>
        </div>
      );
}

export default Scale;