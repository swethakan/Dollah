/*
main script to be attached to an empty object

To instantiate a prefab dynamically:

1- create a prefab

2- add a global variable to the script that will instantiate
in this case:
var fallingObject : GameObject;
this will expose a variable fallingObject on the inspector

3- click on the script component that will do the instantiation 
*the script as component attached to a game object, not the script in the asset panel*

4- drag the prefab (fallingObject in this case) into the field in the HideInInspector
this will link the prefab-as-asset to the variable in the script

*/

//leave it here
#pragma strict

//variable that needs to be linked to the prefab via Unity interface
var fallingObject : GameObject;

//game init
function Start () {

//instantiate an object at the beginning
//object, position as vector, rotation as Quaternion (identity means no rotation)
Instantiate(fallingObject, new Vector2 (2, 2), Quaternion.identity);

}


//game main loop
function FixedUpdate()
{

//instantiate new objects on mouse click at the cursor position
if (Input.GetMouseButtonDown(0)) {
	
	//convert the mouse position to point in the world
	var cam = Camera.main;
	var worldPoint = cam.ScreenToWorldPoint(Input.mousePosition);
	
	//if I don't set the z to 0 the object will be created at the same z of the camera
	//(since we based the point on the camera) making it invisible
	//so I need to set it to 0 manually 
	worldPoint.z = 0;
	
	//Instantiate
	Instantiate(fallingObject, worldPoint, Quaternion.identity);
	}
		
}
