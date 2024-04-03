import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import thresholdApi from '../../../../api/thresholdApi';


Setup.propTypes = {
    
};


const updateApi = async(name, threshold, level1, level2, level3, level4)=>{
    if(name=='Nhiệt độ'){
        await thresholdApi.updateTempThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
            level3: level3,
            level4: level4,
        })
    }else if(name=='Độ ẩm đất'){
        await thresholdApi.updateSoilThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
            level3: level3,
            level4: level4,
        })
    }else if(name=='Cường độ ánh sáng'){
        await thresholdApi.updateLightThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
            level3: level3,
            level4: level4,
        })
    }else{
        await thresholdApi.updateAirThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
            level3: level3,
            level4: level4,
        })
    }
}



function Setup(props) {
    const threshold = props.threshold[0];
    const [disInput, setDisInput] = useState(true);
    const [curInput, setCurInput] = useState(1);
    const [val1, setVal1] = useState(20);
    const [val2, setVal2] = useState(50);
    const [val3, setVal3] = useState(70);
    const [val4, setVal4] = useState(90);


    useEffect(() => {
        // Set default values when threshold is available
        if (props.threshold.length > 0) {
            setVal1(threshold.level1 || 20);
            setVal2(threshold.level2 || 50);
            setVal3(threshold.level3 || 70);
            setVal4(threshold.level4 || 90);
        }
    }, [threshold]);

    var invalid1 = '';
    var invalid2 = '';
    var invalid3 = '';
    var invalid4 = '';

    if(val1<0){
        invalid1 = '* Giá trị phải lớn hơn hoặc bằng 0';
    }else if(val1>=val2){
        invalid1 = '* Giá trị mức 1 phải bé hơn mức 2';
        invalid2 = '* Giá trị mức 2 phải lớn hơn hoặc bằng mức 1';
    }

    
    if(val2>=val3){
        invalid2 = '* Giá trị mức 2 phải bé hơn mức 3';
        invalid3 = '* Giá trị mức 3 phải lớn hơn hoặc bằng mức 2';
    }

    if(val3>=val4){
        invalid3 = '* Giá trị mức 3 phải bé hơn mức 4';
        invalid4 = '* Giá trị mức 4 phải lớn hơn hoặc bằng mức 3';
    }

    if(val4>100){
        invalid4 = '* Giá trị mức 4 phải bé hơn hoặc bằng 100';
    }

    
    return (
        <div className='m-4'>
            <div className='fs-5 mb-3'>{props.name}</div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level1" min='0' max={`${val2-1}`} value={val1} disabled={disInput || invalid2!='' && curInput==2 || invalid3!='' && curInput==3 || invalid4!='' && curInput==4} onChange={e=>{
                    const value = Number(e.target.value);
                    setVal1(value);
                    setCurInput(1);
                }}/>
                <label htmlFor="level1">Mức 1</label>
                <div className='text-danger'>{curInput == 1 ? invalid1 : ''}</div>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level2" min={`${val1+1}`} max={`${val3-1}`} value={val2} disabled={disInput || invalid1!='' && curInput==1 || invalid3!='' && curInput==3 || invalid4!='' && curInput==4} onChange={e=>{
                    const value = Number(e.target.value);
                    setVal2(value);
                    setCurInput(2);
                }}/>
                <label htmlFor="level2">Mức 2</label>
                <div className='text-danger'>{curInput == 2 ? invalid2 : ''}</div>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level3" min={`${val2+1}`} max={`${val4-1}`} value={val3} disabled={disInput || invalid1!='' && curInput==1 || invalid2!='' && curInput==2 || invalid4!='' && curInput==4} onChange={e=>{
                    const value = Number(e.target.value);
                    setVal3(value);
                    setCurInput(3);
                }}/>
                <label htmlFor="level3">Mức 3</label>
                <div className='text-danger'>{curInput == 3 ? invalid3 : ''}</div>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level4" min={`${val3+1}`} max='100' value={val4} disabled={disInput || invalid1!='' && curInput==1 || invalid2!='' && curInput==2 || invalid3!='' && curInput==3 } onChange={e=>{
                    const value = Number(e.target.value);
                    setVal4(value);
                    setCurInput(4);
                }}/>
                <label htmlFor="level4">Mức 4</label>
                <div className='text-danger'>{curInput == 4 ? invalid4 : ''}</div>
            </div>
            <div className={`d-flex flex-row-reverse mt-3 ${!disInput ? 'd-none' : ''}`}>
                <button type="button" className="btn btn-primary justify-content-end" onClick={()=>{
                    setDisInput(!disInput);
                }}>Điều chỉnh</button>
            </div>
            <div className={`d-flex flex-row-reverse mt-3 ${disInput ? 'd-none' : ''}`}>
                <button type="button" className="btn btn-success justify-content-end" disabled={invalid1!='' || invalid2!='' || invalid3!='' || invalid4!='' } 
                onClick={()=>{
                    setDisInput(!disInput);
                    updateApi(props.name, threshold, val1, val2, val3, val4);
                }}>Lưu</button>
                <button type="button" className="btn btn-secondary me-3 justify-content-end" onClick={()=>{
                    setDisInput(!disInput);
                }}>Hủy</button>
            </div>
        </div>
    );
}

export default Setup;