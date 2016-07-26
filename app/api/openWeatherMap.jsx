var axios=require('axios');
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=069de3a6cf890c0256904831e66cd8e5&units=imperial';
//
module.exports = {
  getTemp:function (location){
    var encodedlocation= encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedlocation}`;
  return  axios.get(requestUrl).then(function (res)
  {
    
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message);

    } else {
      return  res.data.main.temp;
    }
  }, function(res){
    throw new Error(res.data.message);
  });
}
  }
