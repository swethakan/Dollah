#pragma strict
var me: GameObject;
function Start () {

}

function Update () {

}

function OnCollisionEnter(theCollision : Collision)
{
	
	    print("COLLIDE!!");
		Destroy (me);

}

