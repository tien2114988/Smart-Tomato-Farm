import React from 'react';
import PropTypes from 'prop-types';
import Area from '../../components/Area/Area';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

Setting.propTypes = {
    
};

function Setting({temp, air, soil, light}) {
    
    return (
        <div className='container'>
            <div className='row m-3'>
                <div className='col-xs-3 col-md-4 col-lg text-danger'>Rất thấp : [0, mức 1) </div>
                <div className='col-xs-3 col-md-4 col-lg text-warning'>Thấp : [mức 1, mức 2) </div>
                <div className='col-xs-3 col-md-4 col-lg text-primary'>Bình thường : [mức 2, mức 3] </div>
                <div className='col-xs-3 col-md-4 col-lg text-warning'>Cao : (mức 3, mức 4] </div>
                <div className='col-xs-3 col-md-4 col-lg text-danger'>Rất cao : (mức 4, 100] </div>
            </div>
            <Area page='setting' temp={temp} air={air} soil={soil} light={light}></Area>
            <div className='d-flex flex-row-reverse my-5'>
                <Link to='/manage' type="button" className="btn btn-secondary justify-content-end">Thoát</Link>
            </div>
            
        </div>
    );
}

export default Setting;