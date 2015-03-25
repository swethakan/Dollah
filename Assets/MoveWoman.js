#pragma strict

var speed = 40.0;
var angularSpeed = 1;
var object : GameObject;
var canMove = false;
var anim : Animator;
var count =0;
var goRight : int = Animator.StringToHash("startWalk");
var stop : int = Animator.StringToHash("stopWalk");

rigidbody2D.drag = 8;
rigidbody2D.gravityScale = 0;

//rotational inertia
rigidbody2D.angularDrag = 10;

//Mass of the rigidbody.
rigidbody2D.mass = 8;


function Start () {

}

function Update () {

	print (rigidbody2D.velocity.x);
	print (anim.GetCurrentAnimatorStateInfo(0).IsName("stand"));

if(canMove == true)
{
	if(speed < 6.4)
	{
		speed += .01;
	}
	rigidbody2D.AddRelativeForce(new Vector2(speed / Time.fixedDeltaTime, 0) );
	
	}
	

/*if(Input.GetKeyDown(KeyCode.UpArrow))
{
	    rigidbody2D.AddRelativeForce(new Vector2(0, 200 / Time.fixedDeltaTime) );
	    rigidbody2D.gravityScale = 5;
	    
}*/

if(Input.GetKey(KeyCode.RightArrow))
{
   if(canMove == false)
   {
	anim.SetTrigger (goRight);
	rigidbody2D.gravityScale = 2; 
	audio.Play() ;
    canMove = true;
	rigidbody2D.AddRelativeForce(new Vector2(speed / Time.fixedDeltaTime, 0) );
	if(rigidbody2D.velocity.x != 0)
		anim.SetTrigger (goRight);

	}
	
}


if(rigidbody2D.velocity.x != 0 && anim.GetCurrentAnimatorStateInfo(0).IsName("stand"))
		anim.SetTrigger (goRight);
		
if(rigidbody2D.velocity.x == 0 && anim.GetCurrentAnimatorStateInfo(0).IsName("walk"))
		anim.SetTrigger (stop);



}


function OnCollisionEnter2D(coll: Collision2D) {
	print("Collide");
	//check the tag of the object colliding	
	if(coll.gameObject.tag == "bubble")
	{
      canMove = false;
      audio.Pause();
      anim.SetTrigger (stop);
      
      speed = 1.0;
	}

	
	
//	if(coll.gameObject.tag == "Bottom")
    rigidbody2D.gravityScale = 2;
}
function OnCollisionExit2D (coll: Collision2D) {
/*if(coll.gameObject.tag == "endScene")
	{
    yield WaitForSeconds (4);
    print ("EXIT");
    canMove  = true;
    audio.Play();
    anim.SetTrigger (goRight);
    }*/
}

function OnTriggerEnter2D (coll : Collider2D) {

    if(coll.gameObject.tag == "endScene")
	{

		anim.SetTrigger (stop);
		audio.Stop();
		audio.mute = true;
		canMove = false;
		rigidbody2D.AddRelativeForce(new Vector2(0 / Time.fixedDeltaTime, 0) );
		yield WaitForSeconds (1);
		GameObject.Destroy(object);
       Application.LoadLevel ("part3");
	}


}





