#pragma strict

var isgrounded : boolean = true;
var anim : Animator;
var jump : int = Animator.StringToHash("jump");

function Awake () {
		DontDestroyOnLoad (transform.gameObject);
	}

function Update ()
{
	if(Input.GetKey (KeyCode.A))
	{
		transform.position.x -= 0.1;
	}
	if(Input.GetKey (KeyCode.D))
	{
		transform.position.x += 0.1;
	}
	if (Input.GetKey (KeyCode.W) && isgrounded == true)
	{
		rigidbody2D.AddForce(Vector3.up * 30);
	}
}
function OnCollisionEnter(theCollision : Collision)
{
	if(theCollision.gameObject.tag == "Floor")
	{
		isgrounded = true;
	}
}
function OnCollisionExit(theCollision : Collision)
{
	if(theCollision.gameObject.tag == "Floor")
	{
		isgrounded = false;
	}
}