//leave it here
#pragma strict

//variable that needs to be linked to the prefab via Unity interface

var wait = 300;
var count = 300;
var bubble1 : GameObject;
var bubble2 : GameObject;
var bubble3 : GameObject;
var bubble4 : GameObject;
var bubble5 : GameObject;

var WWD = 1;
var InstantiateHere: GameObject;
var bubbleTag = "Createbubble";
var EndTag = "EndBubble";
var triggered = false; 

//game init
function Start () {

//instantiate an object at the beginning
//object, position as vector, rotation as Quaternion (identity means no rotation)
//Instantiate(fallingObject, new Vector2 (2, 2), Quaternion.identity);

}


//game main loop
function FixedUpdate()
{
print(gameObject.layer);
//instantiate new objects on mouse click at the cursor position
count  +=1;
    
if(triggered == true &&  count >= wait)
{
  if(WWD ==2)
  {
 	     var myObject2 : GameObject = Instantiate(bubble2, InstantiateHere.transform.position, Quaternion.identity);
 	     myObject2.transform.parent = transform;
   }
  if(WWD ==3)
  {
     var myObject3 : GameObject = Instantiate(bubble3, InstantiateHere.transform.position, Quaternion.identity);
     myObject3.transform.parent = transform;
  }
  if(WWD ==4)
  {
 	 var myObject4 : GameObject = Instantiate(bubble4, InstantiateHere.transform.position, Quaternion.identity);
 	 myObject4.transform.parent = transform;
  }
  if(WWD ==5)
  {
  	 var myObject5 : GameObject = Instantiate(bubble5, InstantiateHere.transform.position, Quaternion.identity);
  	 myObject5.transform.parent = transform;
  }
	count = 0;
	WWD +=1;
}
		
}

function OnTriggerEnter2D (other : Collider2D) {
  if(other.gameObject.tag == bubbleTag)
	{
	 triggered = true;
       	//convert the mouse position to point in the world
	//var cam = Camera.main;
	//var worldPoint = cam.ScreenToWorldPoint(Input.mousePosition);
	
	//if I don't set the z to 0 the object will be created at the same z of the camera
	//(since we based the point on the camera) making it invisible
	//so I need to set it to 0 manually 
	//worldPoint.z = 0;
	
	//Instantiate
	
	var myObject1 : GameObject = Instantiate(bubble1, InstantiateHere.transform.position, Quaternion.identity);
	myObject1.transform.parent = transform;
	count = 0;
    WWD+=1;
	}
	
	if(other.gameObject.tag == EndTag)
	{
	 Destroy(gameObject);
	}

}
