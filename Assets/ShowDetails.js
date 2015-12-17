//#pragma strict

import SimpleJSON;

public var event;

function Start () {

}

function Update () {
	
}

function OnMouseDown(){
	LoadData.lbText = event["title"];
	LoadData.rbText = event["city_name"];
	LoadData.ltText = event["venue_name"];
	LoadData.rtText = event["start_time"]; 
	var lat = event["latitude"].AsFloat;
	var lon = event["longitude"].AsFloat;
	//var url = "http://forecast.weather.gov/MapClick.php?lat="+lat.ToString("F5")+"&lon="+lon.ToString("F5")+"&FcstType=json";
	var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=2de143494c0b295cca9337e1e96b00e0";
	Debug.Log(url);
	var wwwW: WWW = new WWW(url);
	yield wwwW;
	if(wwwW.error){
			Debug.Log(wwwW.error);
	}else{
		var jsonObjW = JSON.Parse(wwwW.text);
		Debug.Log("Weather is "+jsonObjW["weather"][0]["description"]);	 
	}

	 
	

}