import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import thresholdApi from '../../../../api/thresholdApi';


Setup.propTypes = {
    
};


const updateApi = async(name, threshold, level1, level2)=>{
    if(name=='Nhiệt độ'){
        await thresholdApi.updateTempThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
        })
    }else if(name=='Độ ẩm đất'){
        await thresholdApi.updateSoilThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
        })
    }else if(name=='Cường độ ánh sáng'){
        await thresholdApi.updateLightThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
        })
    }else{
        await thresholdApi.updateAirThreshold({
            id: threshold._id,
            level1: level1,
            level2: level2,
        })
    }
}



function Setup(props) {
    const threshold = props.threshold[0];
    const [disInput, setDisInput] = useState(true);
    const [curInput, setCurInput] = useState(1);
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();

    


    useEffect(() => {
        // Set default values when threshold is available
        if (props.threshold.length > 0) {
            setVal1(threshold.level1);
            setVal2(threshold.level2);
        }
    }, [threshold]);

    var invalid1 = '';
    var invalid2 = '';


    if(val1<0){
        invalid1 = '* Giá trị phải lớn hơn hoặc bằng 0';
    }else if(val1>=val2){
        invalid1 = '* Giá trị mức 1 phải bé hơn mức 2';
        invalid2 = '* Giá trị mức 2 phải lớn hơn hoặc bằng mức 1';
    }

    
    if(val2>100){
        invalid2 = '* Giá trị mức 2 phải bé hơn hoặc bằng 100';
    }

 

    
    return (
        <div className='m-4'>
            <div className='fs-5 mb-3'>{props.name}</div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level1" min='0' max={`${val2-1}`} value={val1} disabled={disInput || invalid2!='' && curInput==2} onChange={e=>{
                    const value = Number(e.target.value);
                    setVal1(value);
                    setCurInput(1);
                }}/>
                <label htmlFor="level1">Mức 1</label>
                <div className='text-danger'>{curInput == 1 ? invalid1 : ''}</div>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="level2" min={`${val1+1}`} max='100' value={val2} disabled={disInput || invalid1!='' && curInput==1} onChange={e=>{
                    const value = Number(e.target.value);
                    setVal2(value);
                    setCurInput(2);
                }}/>
                <label htmlFor="level2">Mức 2</label>
                <div className='text-danger'>{curInput == 2 ? invalid2 : ''}</div>
            </div>


            <div className={`d-flex flex-row-reverse mt-3 ${!disInput ? 'd-none' : ''}`}>
                <button type="button" className="btn btn-primary justify-content-end" onClick={()=>{
                    setDisInput(!disInput);
                }}>Điều chỉnh</button>
            </div>
            <div className={`d-flex flex-row-reverse mt-3 ${disInput ? 'd-none' : ''}`}>
                <button type="button" className="btn btn-success justify-content-end" disabled={invalid1!='' || invalid2!='' } 
                onClick={async ()=>{
                    setDisInput(!disInput);
                    await updateApi(props.name, threshold, val1, val2);
                    props.setShow({
                        status: true,
                        name: props.name
                    });
                    props.fetchTemp();
                }}>Lưu</button>
                <button type="button" className="btn btn-secondary me-3 justify-content-end" onClick={()=>{
                    setDisInput(!disInput);
                    props.setShow({
                        status: true,
                        name: 'huy'
                    });
                    props.fetchTemp();
                }}>Hủy</button>
            </div>
            
        </div>
    );
}

export default Setup;