//your parameter variables go here!
//cottagecore background variabkes
let horozontalShift=20 //20,40,80,100 
let verticalShift=20 //20,40,80,100

function setup_wallpaper(pWallpaper) {
    
    pWallpaper.output_mode(GRID_WALLPAPER);
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
  line(110,120,110,135)//right straight down
  line(110,135,105,140)//right down diagonal
  line(105,140,85,140)//straight bottom
  line(85,140,80,135)//left down diagonal
  line(80,135,80,120)//left straight
  line(80,120,85,115)//left diagonal
  line(85,115,105,115)//top straight
  line(105,115,110,120)//top right diagonal

  //ear
  line(80,120,80,105)//left ear
  line(80,105,85,115)
  line(80,105,90,115)
  line(110,120,110,105)//right ear
  line(110,105,105,115)
  line(110,105,100,115)
  //nose
  line(90,130,100,130)
  line(90,130,95,135)
  line(100,130,95,135)
  line(95,135,100,140) //mouth lines
  line(95,135,90,140)
 
  strokeWeight(1.5)
  line(89,133,77,132)//left whiskers
  line(90,135,70,135)
  line(89,137,77,139)
  line(101,133,113,132)//left whiskers
  line(100,135,120,135)
  line(101,137,113,139)

  strokeWeight(2)
 //eyes
  fill(0,0,0)
  ellipse(87,125,5,5)
  ellipse(102,125,5,5)
  strokeWeight(0)
  fill(300,300,300)
  ellipse(85,123.5,2,2)
  ellipse(100,123.5,2,2)
 
  strokeWeight(2)
//body
  line(80,130,35,130)
  line(35,130,30,135)
  line(45,155,75,155)//belly
  line(102,140,90,155)//neck
  line(90,155,85,155)  
  line(30,135,28,143) // to be removed
  //tail
  line(28,142,27,137)
  line(27,137,19,127)
  line(19,127,21,120)
  line(21,120,17,110)
  line(17,110,17,105)
  line(17,105,22,105)
  line(22,105,22,110)
  line(22,110,26,120)
  line(26,120,24,127)
  line(24,127,30,135)
  line(28,143,25,145)//leg
  line(25,145,28,155)
  line(28,155,28,165)
  line(28,165,30,170)
  line(30,170,30,176)//back paw front
  line(30,176,37,176)
  line(37,176,37,173)
  line(40,175,40,172)
  line(37,175.5,40,175.5)
  line(40,172,37,170)
  line(37,170,37,165)
  line(37,165,45,155)
  line(42,174.7,41,174.7)//back paw back
  line(42.5,174.7,42.5,172.5)
  line(45,174.5,45,172)
  line(42,174.5,45,174.5)
  line(45,171,42,169)
  line(42,164.5,42,169.5)
  line(42,165,50,155)
  line(75,155,75,170)//front paw front
  line(75,170,77,173.5)
  line(77,173.5,77,177)
  line(77,177,82,177)
  line(83,177,83,174)
  line(84,176.5,86,176.5)
  line(86,176.5,86,172.5)
  line(84,169,86,172.5)
  line(84,155,84,168)
  line(88,155,88,165)//front back paw
  line(88,165,90,168.5)
  line(90,168.5,90,172)
  line(90,172,86,172)
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



