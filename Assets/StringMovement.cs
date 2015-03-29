using UnityEngine;
using System.Collections;

public class StringMovement : MonoBehaviour {
	SpriteRenderer sr;
	public Sprite dollarOn;
	public Sprite dollarOff;
	public bool hasDollar;

	Vector3 reloadPosition;
	Vector3 hangPosition;
	Vector3 targetPosition;
	float acc = .03F;

	// Use this for initialization
	void Start () {
		sr = GetComponent<SpriteRenderer> ();
		hasDollar = true;
		print ("Dollar loaded: " + (dollarOff != null));
		reloadPosition = new Vector3 (0F, 10F);
		hangPosition = new Vector3(0F, -15F);
		targetPosition = hangPosition;

	}
	
	// Update is called once per frame
	void Update () {
		if (hasDollar) {
			targetPosition = hangPosition;
		} else {
			targetPosition = reloadPosition;
		}
		Vector3 move = (targetPosition - transform.position) * acc;
		transform.position += move;
	}
	
	void OnTriggerEnter2D (Collider2D other)
	{
		
		if(other.tag == "player" && hasDollar)
		{
			print ("holla holla got dolla");
			sr.sprite = dollarOff;
			hasDollar = false;
			GameObject go = GameObject.Find ("Score");
			ScoreCounter sc = (ScoreCounter)go.GetComponent (typeof(ScoreCounter));
			sc.IncreaseScore (100);
			Invoke ("ReloadDollar", 3);
		}
	}

	void ReloadDollar() {
		sr.sprite = dollarOn;
		hasDollar = true;
	}
}
