 #pragma strict
 
 public var deadZone : float = 0.1;
 //public var player : GameObject;
 
 private var g = 0;
 private var touchingPlatforms : int = 0;
 private var body : Rigidbody2D;
 
 function Start () {
     g = rigidbody2D.gravityScale;
     body = rigidbody2D;
 }
 
 function OnTriggerEnter2D (col : Collider2D) {
     if(col.gameObject.tag=="player") {
     var maxDistance = (col.transform.localScale.y + transform.localScale.y) / 2;
     
     if(col.transform.position.y> gameObject.transform.position.y)
     {
       body.gravityScale = 0;
       body.velocity.y = 0;
       col.rigidbody2D.velocity.y= 0;
       //col.rigidbody2D.gravityScale.y = 0;
     
        col.transform.position.y = transform.position.y + maxDistance; 
     }
     
     }
 
        /* touchingPlatforms++;
 
         var maxDistance = (c.transform.localScale.y + transform.localScale.y) / 2;
         if(body.velocity.y < 0 && transform.position.y - c.transform.position.y - body.velocity.y * Time.fixedDeltaTime > maxDistance - deadZone) {
             body.gravityScale = 0;
             body.velocity.y = 0;
             transform.position.y = c.transform.position.y + maxDistance;
         }*/
     
 }
 
 function OnTriggerExit2D (c : Collider2D) {
     if(c.CompareTag("OneWayPlatform") && touchingPlatforms-- == 1)
          body.gravityScale = g;
 }