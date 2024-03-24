const index = (req,res)=>
    res.status(200).json({
    message : 'index'
})

const getAll = (req,res)=>
    res.status(200).json({
    message : 'getAll'
})

module.exports = {
    index, getAll
}