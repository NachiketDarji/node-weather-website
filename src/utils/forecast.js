const request = require('request');
const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key = aaf2f496e6bd8a33aedf6a6b08a8f8a4'+latitude+','+longitude//Enter proper Api URL
    request({url,json:true},(error,{body})=>{
        if(error)
        callback('Something went wrong',undefined)
        else if(body.error)
        callback('Nothings..',undefined)
        else
        callback(undefined,)
    })
    
}

module.exports = forecast