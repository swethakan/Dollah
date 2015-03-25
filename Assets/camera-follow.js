
//2D orthographic camera following a target
//must be attached to a camera
#pragma strict

//the gameObject to follow
var cameraTarget = GameObject.Find("player");
//var count = 0; 

var inSecondScene = true;   

//movement smoothing
var smoothTime : float = 0.1;

//what axis to follow
var cameraFollowX : boolean = true;
var cameraFollowY : boolean = true;

//horizontal or vertical offsets vs center of the view
var cameraOffsetY : float = 0;
var cameraOffsetX : float = 0;

//constrain the camera within limits?
var limit : boolean = false;
var minX: float;
var maxX: float;
var minY: float;
var maxY: float;

var velocity : Vector2;

private var thisTransform : Transform;
     



function Update () {
	 /*if(inSecondScene == false && count >= 273)
	 {
	     cameraTarget = GameObject.Find("woman");
	 
	 }
     if(count<=300)
     {
     		count +=1;
     
     }*/
    if (cameraFollowX)
    {
    //smooth position toward the target
    transform.position.x = Mathf.SmoothDamp (transform.position.x, cameraTarget.transform.position.x+cameraOffsetX, velocity.x, smoothTime);
    
    //if limited limit (clamp) the values
    if(limit)
	    transform.position.x = Mathf.Clamp(transform.position.x, minX + camera.orthographicSize * camera.aspect, maxX - camera.orthographicSize * camera.aspect);
    
    }
     
    //same for y coordinate if following it
    if (cameraFollowY)
    {
    transform.position.y = Mathf.SmoothDamp (transform.position.y, cameraTarget.transform.position.y+cameraOffsetY, velocity.y, smoothTime);
    
    if(limit)
    	transform.position.y = Mathf.Clamp(transform.position.y, minY + camera.orthographicSize, maxY);
    
    }
       
}