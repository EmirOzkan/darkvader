window.addEventListener('load',function(){
    var lat, lng;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

        function showPosition(pos){
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
            
            var api = `http://api.weatherapi.com/v1/current.json?key=0e2b251ef64040efab5185656201811&q=${lat},${lng}`;

            fetch(api).then(
                function(res){
                    return res.json();
                }
            ).then(
              function(data){
                   
                    document.querySelector('.temp').innerHTML =data.current.temp_c + "&deg;" + "C" ;
                    document.querySelector('.name').innerHTML = data.location.name;
                    document.querySelector('.region').innerHTML = data.location.region;
                    document.querySelector('.text').innerHTML =  data.current.condition.text;
                     var img =document.querySelector('.icon');
                     img.src = data.current.condition.icon;
                     console.log("All Okay!")
                
                }
            )
         
        }
    }

});
