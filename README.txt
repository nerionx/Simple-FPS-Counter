Simple FPS counter for p5.js

Add it to code and create and object equal to FPS, then call "Update" and "Show" in the draw function

of your main program 
e.g.
  
	fps = new FPS;

	fps.Update();
	fps.Show(x,y);

  

The current fps can be accessed via the fps variable for displaying via other means e.g.
	fps = new FPS;
  
	fps.Update();
	console.log(fps.fps);
