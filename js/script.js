function dateD(){
	var a = document.form.bdday.valueAsDate;
        var today= new Date();
	var get = a.getTime();
	var gett = today.getTime();
	var ms = gett-get;
	var second = ms/1000;
	var minutes = second/60;
	var hours = minutes/60;
	var days = hours/24;
	var years = days/365;
        document.getElementById("time").innerHTML="Years: "+Math.round(years)+" "+"Days: "+Math.round(days)+" "+"Hours: "+Math.round(hours)+" "+"Seconds: "+Math.round(second);
        setTimeout(function(){dateD()},1000);  
};
