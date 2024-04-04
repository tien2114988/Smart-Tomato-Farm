const axios = require('axios');
const adafruit_url = require('../config/adafruit.config');
const {TemperatureThreshold, SoilMoistureThreshold, AirHumidityThreshold, LightThreshold} = require('../models/models');

// const triggerBuzzer = async(req,res)=>{
//     try {
//         const data = req.body.value;
//         axios.post('https://io.adafruit.com/api/v2/viet_hcmut/feeds/khuvuc1.buzzer/data', {
//             value: data,
//           },{
//             'Content-Type': 'aplication/json',
//             'X-AIO-Key': 'aio_qliQ64LT5XQdvAkPGdSm1Cqo0Xqz',
//           })
//     } catch (error) {
//         res.json({
//             error: error
//         })
//     }
// }


const readTempThreshold = async (req,res)=>{
    try {
        const temp = await TemperatureThreshold.find({});
        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const createTempThreshold = async (req,res)=>{
    try {
        const newTemp = new TemperatureThreshold();
        newTemp.level1 = req.body.level1;
        newTemp.level2 = req.body.level2;
        newTemp.level3 = req.body.level3;
        newTemp.level4 = req.body.level4;
        newTemp.area_id = req.body.area_id;

        await newTemp.save();

        return res.status(200).json(newTemp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const updateTempThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const level1 = req.body.level1;
        const level2 = req.body.level2;
        const level3 = req.body.level3;
        const level4 = req.body.level4;
        const area_id = req.body.area_id;

        const temp = await TemperatureThreshold.updateOne(
            { _id : id},
            {
                $set: { level1: level1, level2: level2, level3: level3, level4: level4, area_id:area_id },
            }

        );

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const deleteTempThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const temp = await TemperatureThreshold.deleteOne({_id:id});

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}




const readAirThreshold = async (req,res)=>{
    try {
        const temp = await AirHumidityThreshold.find({});
        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const createAirThreshold = async (req,res)=>{
    try {
        const newTemp = new AirHumidityThreshold();
        newTemp.level1 = req.body.level1;
        newTemp.level2 = req.body.level2;
        newTemp.level3 = req.body.level3;
        newTemp.level4 = req.body.level4;
        newTemp.area_id = req.body.area_id;

        await newTemp.save();

        return res.status(200).json(newTemp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const updateAirThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const level1 = req.body.level1;
        const level2 = req.body.level2;
        const level3 = req.body.level3;
        const level4 = req.body.level4;
        const area_id = req.body.area_id;

        const temp = await AirHumidityThreshold.updateOne(
            { _id : id},
            {
                $set: { level1: level1, level2: level2, level3: level3, level4: level4, area_id:area_id },
            }

        );

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const deleteAirThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const temp = await AirHumidityThreshold.deleteOne({_id:id});

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}




const readSoilThreshold = async (req,res)=>{
    try {
        const temp = await SoilMoistureThreshold.find({});
        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const createSoilThreshold = async (req,res)=>{
    try {
        const newTemp = new SoilMoistureThreshold();
        newTemp.level1 = req.body.level1;
        newTemp.level2 = req.body.level2;
        newTemp.level3 = req.body.level3;
        newTemp.level4 = req.body.level4;
        newTemp.area_id = req.body.area_id;

        await newTemp.save();

        return res.status(200).json(newTemp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const updateSoilThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const level1 = req.body.level1;
        const level2 = req.body.level2;
        const level3 = req.body.level3;
        const level4 = req.body.level4;
        const area_id = req.body.area_id;

        const temp = await SoilMoistureThreshold.updateOne(
            { _id : id},
            {
                $set: { level1: level1, level2: level2, level3: level3, level4: level4, area_id:area_id },
            }

        );

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const deleteSoilThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const temp = await SoilMoistureThreshold.deleteOne({_id:id});

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}




const readLightThreshold = async (req,res)=>{
    try {
        const temp = await LightThreshold.find({});
        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const createLightThreshold = async (req,res)=>{
    try {
        const newTemp = new LightThreshold();
        newTemp.level1 = req.body.level1;
        newTemp.level2 = req.body.level2;
        newTemp.level3 = req.body.level3;
        newTemp.level4 = req.body.level4;
        newTemp.area_id = req.body.area_id;

        await newTemp.save();

        return res.status(200).json(newTemp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const updateLightThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const level1 = req.body.level1;
        const level2 = req.body.level2;
        const level3 = req.body.level3;
        const level4 = req.body.level4;
        const area_id = req.body.area_id;

        const temp = await LightThreshold.updateOne(
            { _id : id},
            {
                $set: { level1: level1, level2: level2, level3: level3, level4: level4, area_id:area_id },
            }

        );

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}

const deleteLightThreshold = async(req,res)=>{
    try {
        const id = req.params.id;
        const temp = await LightThreshold.deleteOne({_id:id});

        return res.status(200).json(temp);
    } catch (error) {
        res.json({
            error: error
        })
    }
}



module.exports = {
    readTempThreshold, createTempThreshold, deleteTempThreshold, updateTempThreshold, 
    readAirThreshold, createAirThreshold, deleteAirThreshold, updateAirThreshold,
    readSoilThreshold, createSoilThreshold, deleteSoilThreshold, updateSoilThreshold,
    readLightThreshold, createLightThreshold, deleteLightThreshold, updateLightThreshold,
    
}