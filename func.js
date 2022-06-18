const obj = {
    "name": "TDD",
    "version": 1,
    "type": ["object", "multi-type"]
}


module.exports = (level) => {
    const response = []
    Object.values(obj).forEach((element, index)=>{
        if(index===level) response.push(element)
    })
    return response
}