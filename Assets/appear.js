#pragma strict

var trigger = "money";
var anim : Animator;
var me : GameObject;
var willDestroy : GameObject;
var willDestroy2 : GameObject;
var start : int = Animator.StringToHash("start");

function Start () {


}

function Update () {
if (Input.GetMouseButtonDown(0)) 
             {
             Destroy(willDestroy);
             Destroy(willDestroy2);
             Destroy(me);
             }

}

function OnTriggerEnter2D (other : Collider2D) {
  if(other.gameObject.tag == trigger)
	{
	anim.SetTrigger (start);
	
	}
	
	
	}