using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ScoreCounter : MonoBehaviour {
	int score;

	// Use this for initialization
	void Start () {
		score = 500;
		DisplayScore ();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void ResetScore() {
		score = 0;
		print ("score reset!");
		DisplayScore ();
	}

	public void IncreaseScore(int value) {
		score += value;
		DisplayScore ();
	}

	void DisplayScore() {
		Text txt = gameObject.GetComponent<Text> ();
		string dollars = string.Format ("{0:0.00}", score / 100);
		txt.text="$" + dollars;
	}
}
