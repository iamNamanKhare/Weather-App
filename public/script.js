function fillData(obj){

    let cardTitle = $('#cardTitle')
    let cardMain = $('#cardMain')
    let cardTemp = $('#cardTemp')
    let cardTempMinMax = $('#cardTempMinMax')
    let cardDesc = $('#cardDesc')

    let temp = (obj.main.temp - 273.15).toFixed(1)
    let tempMin = (obj.main.temp_min - 273.15).toFixed(1)
    let tempMax = (obj.main.temp_max - 273.15).toFixed(1)
    let tempFeelsLike = (obj.main.feels_like - 273.15).toFixed(1)

    cardTitle.empty()
    cardMain.empty()
    cardTemp.empty()
    cardTempMinMax.empty()
    cardDesc.empty()

    cardTitle.html(obj.name);
    cardMain.html(obj.weather[0].main)
    cardTemp.html(`<b>Temp:</b> ${temp} <br><b>Feels Like :</b> ${tempFeelsLike}`)
    cardTempMinMax.html(`<b>Temp Min :</b> ${tempMin} <br> <b>Temp Max :</b> ${tempMax}`)
    cardDesc.html(`<b>Description : </b> ${obj.weather[0].description}`)
}

$(function(){
    let findTemp = $('#tempButton')
    let cityField = $('#cityName')

    findTemp.click(() => {
        let cityName = cityField.val()

        $.get(`/weather/city/${cityName}`, (data) => {
            var obj = jQuery.parseJSON(data)
            fillData(obj)
        })
    })
})
