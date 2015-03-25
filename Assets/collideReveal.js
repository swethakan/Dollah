#pragma strict

var anim : Animator;
var start : int = Animator.StringToHash("start");

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (other : Collider2D) {

    if(other.gameObject.tag == "player")
	{
	    print("COLLIDE!!");
		anim.SetTrigger (start);
		}

}

