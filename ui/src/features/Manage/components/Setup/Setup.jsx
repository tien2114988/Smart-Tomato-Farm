import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


Setup.propTypes = {
    
};

function Setup(props) {
    const [disInput, setDisInput] = useState(true);
    const [val1, setVal1] = useState(1);
    const [val2, setVal2] = useState(5);
    const [val3, setVal3] = useState(10);
    const [val4, setVal4] = useState(15);

    var invalidVal1 = '';
    if(val1==''){
        invalidVal1 = 'Giá trị phải là số'
    }else if(val1 >= val2){
        invalidVal1 = 'Giá trị bé hơn giá trị mức 2'
    }
    
    return (
        <div className='m-4'>
            <div className='fs-5 mb-3'>Nhiệt độ</div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level1" value={val1} disabled={disInput} onChange={e=>{
                    setVal1(e.target.val1)
                }}/>
                <label for="level1">Mức 1</label>
                <div className={`${invalidVal1 == '' ? '' :  'd-none'} text-danger`}>* Giá trị vượt mức phải lớn hơn 0</div>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level2" value={val2} disabled={disInput} onChange={e=>{
                    setVal2(e.target.val2)
                }}/>
                <label for="level2">Mức 2</label>
                <div className=' text-danger'>* Giá trị vượt mức phải lớn hơn 0</div>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level3" value={val3} disabled={disInput} onChange={e=>{
                    setVal3(e.target.val3)
                }}/>
                <label for="level3">Mức 3</label>
                <div className=' text-danger'>* Giá trị vượt mức phải lớn hơn 0</div>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level4" value={val4} disabled={disInput} onChange={e=>{
                    setVal4(e.target.val4)
                }}/>
                <label for="level4">Mức 4</label>
                <div className='d-none text-danger'>* Giá trị vượt mức phải lớn hơn 0</div>
            </div>
            <div className={`d-flex flex-row-reverse mt-3 ${!disInput ? 'd-none' : ''}`}>
                <button type="button" className="btn btn-primary justify-content-end" onClick={()=>{
                    setDisInput(!disInput);
                }}>Điều chỉnh</button>
            </div>
            <div className={`d-flex flex-row-reverse mt-3 ${disInput ? 'd-none' : ''}`}>
                <button type="button" className="btn btn-success justify-content-end" onClick={()=>{
                    setDisInput(!disInput);
                }}>Lưu</button>
                <button type="button" className="btn btn-secondary me-3 justify-content-end" onClick={()=>{
                    setDisInput(!disInput);
                }}>Hủy</button>
            </div>
        </div>
    );
}

export default Setup;