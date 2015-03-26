using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour
{
	public float moveSpeed = 10f;
	public float jumpSpeed = 10f;
	
	void Update()
	{
		//Next two if statements are for moving left and right
		if (Input.GetKey (KeyCode.D))
			transform.Translate (new Vector2 (1, 0) * moveSpeed * Time.deltaTime);
		
		if (Input.GetKey (KeyCode.A))
			transform.Translate (new Vector2 (-1, 0) * moveSpeed * Time.deltaTime);
	}
	
	//Used for checking if the player is touching the ground 
	void OnCollisionStay2D(Collision2D coll ) // C#, type first, name in second
	{
		if (coll.gameObject.tag == "Ground" &&(Input.GetKey(KeyCode.W)))
		{
			//Jump Script
			rigidbody2D.AddForce(Vector3.up * jumpSpeed * Time.deltaTime);
			
		}
		
		
		
		
		
	}
	
}
