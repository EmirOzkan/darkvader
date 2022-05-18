function showTime(){
    var date = new Date();
    var h = date.getHours();
     var m = date.getMinutes();
     var s = date.getSeconds();
     var dd = date.getDate();
     var mm = date.getMonth();
     var yy = date.getFullYear();
     var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var n = weekday[date.getDay()];
     var session = "AM";
     if(h==0){
         h=12;
     }
     if(h > 12){
         h = h - 12;
         session = "PM";
     }
     h=(h<10) ? "0"+ h : h;
     m=(m<10) ? "0"+ m : m;
     s=(s<10) ? "0"+ s : s;
     dd=(dd<10) ? "0"+ dd : dd;
     mm=(mm<10) ? "0"+ mm : mm;

     var time = h +" " + ":"+" "  +m +" " + ":" +" " +s + " " +session + "<br>" + "<br>" +  dd +"/"+mm+"/" +yy  + "<br>"+ "<br>" + n;
     document.querySelector("#Time").innerHTML = time;

     setTimeout(showTime,1000);
     
    }
    showTime();

    navigator.getBattery().then(function(battery) {
function updateAllBatteryInfo(){
updateChargeInfo();
updateLevelInfo();
updateChargingInfo();
updateDischargingInfo();
}
updateAllBatteryInfo();

battery.addEventListener('chargingchange', function(){
updateChargeInfo();
});
function updateChargeInfo(){
var status = "Charging? = "   + (battery.charging ? "Yes" : "No");
document.querySelector(".status").innerHTML = status;
}

battery.addEventListener('levelchange', function(){
updateLevelInfo();
});
function updateLevelInfo(){
var percentage =  battery.level * 100 + "%";
document.querySelector(".percentage").innerHTML = percentage;
}

battery.addEventListener('chargingtimechange', function(){
updateChargingInfo();
});
function updateChargingInfo(){
console.log("Battery charging time: "
         + battery.chargingTime + " seconds");
}

battery.addEventListener('dischargingtimechange', function(){
updateDischargingInfo();
});
function updateDischargingInfo(){
console.log("Battery discharging time: "
         + battery.dischargingTime + " seconds");
}

});