using UnityEngine;
using System.Collections;

public class Payment : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnDestroy () {
		GameObject go = GameObject.Find ("Score");
		ScoreCounter sc = (ScoreCounter)go.GetComponent (typeof(ScoreCounter));
		sc.ResetScore ();
		print ("you paid~");
	}
}
