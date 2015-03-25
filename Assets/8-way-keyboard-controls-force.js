/*
keyboard movements
*/

//leave it here
#pragma strict

//variables declared here are member variables and can be modified via the Unity UI!
var speed = 10;

//function Start is called once when the game object is created
function Start () {

//The degree to which this object is affected by gravity.
rigidbody2D.gravityScale = 0;

//The rigidBody inertia.
rigidbody2D.drag = 20;

//Mass of the rigidbody.
rigidbody2D.mass = 10;

}


//update is called every frame at fixed intervals
function FixedUpdate()
{

//in Unity change the Rigidbody2d interpolation to "interpolate"

//Input.GetKey returns true is the key is held down
if(Input.GetKey(KeyCode.RightArrow))
	rigidbody2D.AddForce(new Vector2(speed / Time.fixedDeltaTime, 0) );

if(Input.GetKey(KeyCode.LeftArrow))
	rigidbody2D.AddForce(new Vector2(-speed / Time.fixedDeltaTime, 0) );
	
if(Input.GetKey(KeyCode.UpArrow))
	rigidbody2D.AddForce(new Vector2(0, speed / Time.fixedDeltaTime) );
	
if(Input.GetKey(KeyCode.DownArrow))
	rigidbody2D.AddForce(new Vector2(0, -speed / Time.fixedDeltaTime) );
	
}
