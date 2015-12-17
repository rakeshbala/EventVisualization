#pragma strict

import UnityEngine.UI;


private var text;

function Start () {
 	text = LoadData.lbText;

}

function Update () {
	
	var textObj: Text = GetComponent.<Text>();

	switch (tag){
		case "LB":
			text = LoadData.lbText;
			break;			
		case "LT":
			text = LoadData.ltText;
			break;
		
		case "RB":
			text = LoadData.rbText;
			break;
		
		case "RT":
			text = LoadData.rtText;
			break;		
		default:
			text = "Unknown component";
			Debug.Log("Unknown text");
	
	}
	
	textObj.text = text;
	
}