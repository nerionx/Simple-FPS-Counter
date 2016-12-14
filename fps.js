/* Simple FPS counter for J5, add it to code and create and object equal to FPS, then call SHOW in the draw function
of the main program e.g.
  fps = new FPS;
  
  fps.Show(x,y);
*/



function FPS(){
  this.frameCounter = 0;
  this.fps = 0;
  this.oldTime = millis();
  this.Show=function(x,y){
    if(millis() - this.oldTime < 1000){
      this.frameCounter +=1;
    }else{
      this.fps = this.frameCounter;
      this.frameCounter = 0;
      this.oldTime = millis()
    }
    text(this.fps,x,y);
  
}
}
