const request = require('request');

const geocode = (place,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(place) +'.json?access_token=pk.eyJ1IjoiZGFyamluYWNoaWtldCIsImEiOiJjbGk0YXYzNzEwM3F0M2xtdjE2OXY5Z2xyIn0.S9VskIU-UF5KgG-5BbjXUw&limit=1'
    
    request({url,json:true},(error,{body})=>{
        if(error)
            callback('Something went wrong......',undefined)
        else if(body.features.length === 0)
            callback('No such location services were found',undefined)
        else
            callback(undefined,{
                latitude: body.features[0].bbox[1],
                longitude: body.features[0].bbox[0],
                location: body.features[0].place_name
            })
    })

}

module.exports = geocode