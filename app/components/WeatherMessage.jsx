var React=require('react');

 var WeatherMessage=({temp, location} )=>{

    
     return(
     <h1>it is {temp} in {location}</h1>
     )
   };

   module.exports=WeatherMessage;
