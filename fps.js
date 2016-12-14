/* Simple FPS counter for J5, add it to code and create and object equal to FPS, then call "Update" and "Show" in the draw function
of the main program e.g.
  fps = new FPS;
  
  fps.Show(x,y);

  The current fps can be accessed via the fps variable for displaying via other means e.g. 
  
  fps = new FPS
  console.log(fps.fps)
*/



function FPS(){
  this.frameCounter = 0;
  this.fps = 0;
  this.oldTime = millis();
  this.Update=function(){
    if(millis() - this.oldTime < 1000){
      this.frameCounter +=1;
    }else{
      this.fps = this.frameCounter;
      this.frameCounter = 0;
      this.oldTime = millis()
    }
}
  this.Show=function(x,y){
    text(this.fps,x,y);
  }
}
