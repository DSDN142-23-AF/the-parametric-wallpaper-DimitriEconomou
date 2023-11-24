//your parameter variables go here!
//cottagecore background variabkes
let horozontalShift=20 //20,40,80,100 
let verticalShift=20 //20,40,80,100

function setup_wallpaper(pWallpaper) {
    
    pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  //cottagecore background
  strokeWeight(8)
  stroke(0,0,0,50,5)
 
  line(verticalShift,0,verticalShift,200) //vertical left to right
  line(2*verticalShift,0,2*verticalShift,200)
  line(3*verticalShift,0,3*verticalShift,200)
  line(4*verticalShift,0,4*verticalShift,200)
  line(5*verticalShift,0,5*verticalShift,200)
  line(6*verticalShift,0,6*verticalShift,200)
  line(7*verticalShift,0,7*verticalShift,200)
  line(8*verticalShift,0,8*verticalShift,200)
  line(9*verticalShift,0,9*verticalShift,200)
  line(10*verticalShift,0,10*verticalShift,200)

  
  line(0,horozontalShift,200,horozontalShift) //horozontal lines top to bottom
  line(0,2*horozontalShift,200,2*horozontalShift)
  line(0,3*horozontalShift,200,3*horozontalShift)
  line(0,4*horozontalShift,200,4*horozontalShift)
  line(0,5*horozontalShift,200,5*horozontalShift)
  line(0,6*horozontalShift,200,6*horozontalShift)
  line(0,7*horozontalShift,200,7*horozontalShift)
  line(0,8*horozontalShift,200,8*horozontalShift)
  line(0,9*horozontalShift,200,9*horozontalShift)
  line(0,10*horozontalShift,200,10*horozontalShift)

  //cat
  strokeWeight(2)
  stroke(0,0,0,225)
  
  //head
  beginShape()
  vertex(110,120)//right straight down
  vertex(110,135)//right down diagonal
  vertex(105,140)//straight bottom
  vertex(85,140)//left down diagonal
  vertex(80,135)//left straight
  vertex(80,120)//left diagonal
  vertex(85,115,)//top straight
  vertex(105,115)//top right diagonal
  vertex(110,120)
  endShape()
//left ear
  beginShape() 
  vertex(80,105)
  vertex(80,120)
  vertex(85,115)
  vertex(90,115)
  vertex(82,107)
  vertex(85,115)
  endShape()
//right ear
  beginShape()
  vertex(110,105)
  vertex(110,120)
  vertex(105,115)
  vertex(100,115)
  vertex(108,107)
  vertex(105,115)
  endShape()
//nose
  beginShape()
  vertex(90,130)
  vertex(99,130)
  vertex(95,135)
  vertex(90,130)
  endShape()
//mouth
  beginShape()
  vertex(95,135)
  vertex(100,140)
  vertex(90,140)
  vertex(95,135)
  endShape()
 
  strokeWeight(1.5)
  line(89,133,77,132)//left whiskers
  line(90,135,70,135)
  line(89,137,77,139)
  line(101,133,113,132)//right whiskers
  line(100,135,120,135)
  line(101,137,113,139)
 //eyes
  strokeWeight(2)//black eyes
  fill(0,0,0)
  ellipse(87,125,5,5)
  ellipse(102,125,5,5)
  strokeWeight(0)//white glint in eyes
  fill(300,300,300)
  ellipse(85,123.5,2,2)
  ellipse(100,123.5,2,2)
 
  strokeWeight(2)
//body
  beginShape()
  vertex(102,140)//starts at chin/neck on right 
  vertex(85,140)
  vertex(80,135)
  vertex(80,130)
  vertex(35,130)
  vertex(30,135)
  vertex(24,127)//tail
  vertex(26,120)
  vertex(22,110)
  vertex(22,105)
  vertex(17,105)
  vertex(17,110)
  vertex(21,120)
  vertex(19,127)
  vertex(27,137)
  vertex(28,142)
  vertex(25,145)//leg
  vertex(28,155)
  vertex(28,165)
  vertex(30,170)
  vertex(30,176)//back paw front
  vertex(37,176)
  vertex(37,173)
  vertex(37,175.5)
  vertex(40,175.5)
  vertex(40,175)
  vertex(40,172)
  vertex(37,170)
  vertex(37,165)
  vertex(45,155)//transition to back paw back
  vertex(37,165)
  vertex(37,170)
  vertex(40,172)
  vertex(40,174.7)
  vertex(42,174.7)
  vertex(42,172.7)
  vertex(42,174.5)
  vertex(45,174.5)
  vertex(45,171)
  vertex(42,169.5)
  vertex(42,165)
  vertex(50,155)//belly
  vertex(44.23,155)
  vertex(75,155)
  vertex(75,170)//front paw front
  vertex(77,173.5)
  vertex(77,177)
  vertex(83,177)
  vertex(83,174)
  vertex(83,176.5)
  vertex(86,176.5)
  vertex(86,172)
  vertex(84,169)
  vertex(84,155)//transitioning to front paw front
  vertex(84,169) 
  vertex(86,172)
  vertex(90,172)
  vertex(90,168.5)
  vertex(88,165)
  vertex(88,155)//fin paw connect rest of body
  vertex(83,155)
  vertex(90,155)
  vertex(102,140)
  endShape()

 //wool
 strokeWeight(2)
 fill(225,225,225)
 rect(115,172.5,25,4)
 ellipse(110,166,20,20)
 ellipse(106,166,4,22)
 ellipse(110,166,4,22)
 ellipse(114,166,4,22)
 ellipse(110,162,22,4)
 ellipse(110,166,22,4)
 ellipse(110,170,22,4)
 
 







  
}



