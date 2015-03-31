using UnityEngine;
using System.Collections;
using System;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
public class EndGame : MonoBehaviour {

	bool sentMail = false;
	bool endgame = true;

	// Use this for initialization
	void Start () {

		Debug.Log("asdgf");

		if (sentMail == false && endgame == true) {
						SendEmailF ();
						sentMail = true;
				}
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	private void SendEmailF(){
		MailMessage mail = new MailMessage();
		
		mail.From = new MailAddress("kurosora3000@gmail.com");
		mail.To.Add("kan_swetha@yahoo.com");
		mail.Subject = "Test Mail";
		mail.Body = "This is for testing SMTP mail from GMAIL";

		SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
		
		SmtpServer.Port = 587;
		//SmtpServer.Credentials = new System.Net.NetworkCredential("swethak@andrew.cmu.edu", "SeaQueen312^^");
		SmtpServer.Credentials = new System.Net.NetworkCredential("kurosora3000@gmail.com", "swe0nivi") as ICredentialsByHost;
		SmtpServer.EnableSsl = true;
		ServicePointManager.ServerCertificateValidationCallback = 
			delegate(object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) 
		{ return true; };
		SmtpServer.Send(mail);
		Debug.Log("success");
	}


}
