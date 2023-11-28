//your parameter variables go here!
//cottagecore background variabkes
let horozontalShift=100 //20,40,80,100 originally 20
let verticalShift=100 //20,40,80,100  originally 20
let horozontalStrokeColour=1//1=black,2=yellow,3=green,4=red
let verticalStrokeColour=1//1=black,2=yellow,3=green,4=red
//cat variables
let ScalingCat=1.5//scale of cat originally 1
let Nosex=80//originally 92.5 middle of nose that is used for cat origin
let Nosey=75//originally 132.5 middle of nose that is used for cat origin
let ShowBody=true//turns the body of the cat on and off (my if statment)
//woolvariables
let ScalingWool=1//scale of wool originally 1
let Woolx=95//originally 110 (changes x value of wool)
let Wooly=110//originally 166 (changes y value of wool)
let FourWoolPattern=(Woolx+Wooly)/2//when (40,40) it creates a pattern of 4 (one of each wool in each corner)
let Woolfill=4 //changes fill 1 black, 2 white, 3 lightblue, 4 red


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
  if(verticalStrokeColour==1){
  stroke(0,0,0,50)}
  else if(verticalStrokeColour==2){
  stroke(214, 210, 60,55)}
  else if(verticalStrokeColour==3){
  stroke(92, 214, 95,50)}  
  else if(verticalStrokeColour==4){
   stroke(196,45,45,50)}
 
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

  strokeWeight(8)
  if(horozontalStrokeColour==1){
  stroke(0,0,0,50)}
  else if(horozontalStrokeColour==2){
  stroke(214, 210, 60,55)}
  else if(horozontalStrokeColour==3){
  stroke(92, 214, 95,50)}  
  else if(horozontalStrokeColour==4){
   stroke(196,45,45,50)}

  
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

  scale(ScalingCat)
//cat
  strokeWeight(2)
  stroke(0,0,0,225)
  fill(140, 126, 105)

  if(ShowBody){
  //body
  strokeWeight(2)
  beginShape()
   vertex(Nosex+9.5,Nosey+7.5)//starts at chin/neck on right 
   vertex(Nosex-7.5,Nosey+7.5)
   vertex(Nosex-12.5,Nosey+2.5)
   vertex(Nosex-12.5,Nosey-2.5)
   vertex(Nosex-57.5,Nosey-2.5)
   vertex(Nosex-62.5,Nosey+2.5)
   vertex(Nosex-68.5,Nosey-5.5)//tail
   vertex(Nosex-66.5,Nosey-12.5)
   vertex(Nosex-70.5,Nosey-22.5)
   vertex(Nosex-70.5,Nosey-27.5)
   vertex(Nosex-75.5,Nosey-27.5)
   vertex(Nosex-75.5,Nosey-22.5)
   vertex(Nosex-71.5,Nosey-12.5)
   vertex(Nosex-73.5,Nosey-5.5)
   vertex(Nosex-65.5,Nosey+4.5)
   vertex(Nosex-64.5,Nosey+9.5)
   vertex(Nosex-67.5,Nosey+12.5)//leg
   vertex(Nosex-64.5,Nosey+22.5)
   vertex(Nosex-64.5,Nosey+32.5)
   vertex(Nosex-62.5,Nosey+37.5)
   vertex(Nosex-62.5,Nosey+43.5)//back paw front
   vertex(Nosex-55.5,Nosey+43.5)
   vertex(Nosex-55.5,Nosey+40.5)
   vertex(Nosex-55.5,Nosey+43)
   vertex(Nosex-52.5,Nosey+43)
   vertex(Nosex-52.5,Nosey+42.5)
   vertex(Nosex-52.5,Nosey+39.5)
   vertex(Nosex-55.5,Nosey+37.5)
   vertex(Nosex-55.5,Nosey+32.5)
   vertex(Nosex-47.5,Nosey+22.5)//transition to back paw back
   vertex(Nosex-55.5,Nosey+32.5)
   vertex(Nosex-55.5,Nosey+37.5)
   vertex(Nosex-52.5,Nosey+39.5)
   vertex(Nosex-52.5,Nosey+40.2)
   vertex(Nosex-50.5,Nosey+40.2)
   vertex(Nosex-50.5,Nosey+40.2)
   vertex(Nosex-50.5,Nosey+42)
   vertex(Nosex-47.5,Nosey+42)
   vertex(Nosex-47.5,Nosey+38.5)
   vertex(Nosex-50.5,Nosey+37)
   vertex(Nosex-50.5,Nosey+32.5)
   vertex(Nosex-42.5,Nosey+22.5)//belly
   vertex(Nosex-48.27,Nosey+22.5)
   vertex(Nosex-17.5,Nosey+22.5)
   vertex(Nosex-17.5,Nosey+37.5)//front paw front
   vertex(Nosex-15.5,Nosey+41)
   vertex(Nosex-15.5,Nosey+44.5)
   vertex(Nosex-9.5,Nosey+44.5)
   vertex(Nosex-9.5,Nosey+41.5)
   vertex(Nosex-9.5,Nosey+44)
   vertex(Nosex-6.5,Nosey+44)
   vertex(Nosex-6.5,Nosey+39.5)
   vertex(Nosex-8.5,Nosey+36.5)
   vertex(Nosex-8.5,Nosey+22.5)//transitioning to front paw front
   vertex(Nosex-8.5,Nosey+36.5) 
   vertex(Nosex-6.5,Nosey+39.5)
   vertex(Nosex-2.5,Nosey+39.5)
   vertex(Nosex-2.5,Nosey+36)
   vertex(Nosex-4.5,Nosey+32.5)
   vertex(Nosex-4.5,Nosey+22.5)//fin paw connect rest of body
   vertex(Nosex-9.5,Nosey+22.5)
   vertex(Nosex-2.5,Nosey+22.5)
   vertex(Nosex+9.5,Nosey+7.5)
   endShape()

}
 //head
  beginShape()
  vertex(Nosex+17.5,Nosey-12.5)//right straight down
  vertex(Nosex+17.5,Nosey+2.5)//right down diagonal
  vertex(Nosex+12.5,Nosey+7.5)//straight bottom
  vertex(Nosex-7.5,Nosey+7.5)//left down diagonal
  vertex(Nosex-12.5,Nosey+2.5)//left straight
  vertex(Nosex-12.5,Nosey-12.5)//left diagonal
  vertex(Nosex-7.5,Nosey-17.5)//top straight
  vertex(Nosex+12.5,Nosey-17.5)//top right diagonal
  vertex(Nosex+17.5,Nosey-12.5)
  endShape()
 //left ear
  beginShape() 
  vertex(Nosex-12.5,Nosey-27.5)
  vertex(Nosex-12.5,Nosey-12.5)
  vertex(Nosex-7.5,Nosey-17.5)
  vertex(Nosex-2.5,Nosey-17.5)
  vertex(Nosex-10.5,Nosey-25.5)
  vertex(Nosex-7.5,Nosey-17.5)
  endShape()
  //right ear
  beginShape()
  vertex(Nosex+17.5,Nosey-27.5)
  vertex(Nosex+17.5,Nosey-12.5)
  vertex(Nosex+12.5,Nosey-17.5)
  vertex(Nosex+7.5,Nosey-17.5)
  vertex(Nosex+15.5,Nosey-25.5)
  vertex(Nosex+12.5,Nosey-17.5)
  endShape()
  //nose
  fill(189, 102, 123)
  beginShape()
  vertex(Nosex-2.5,Nosey-2.5)
  vertex(Nosex+7,Nosey-2.5)
  vertex(Nosex+2.5,Nosey+2.5)
  vertex(Nosex-2.5,Nosey-2.5)
  endShape()
  fill(140, 126, 105)
  //mouth
  beginShape()
  vertex(Nosex+2.5,Nosey+2.5)
  vertex(Nosex+7.5,Nosey+7.5)
  vertex(Nosex-2.5,Nosey+7.5)
  vertex(Nosex+2.5,Nosey+2.5)
  endShape()
//whiskers
  strokeWeight(1.5)
  beginShape()
  vertex(Nosex-3.5,Nosey+0.5)//left whiskers
  vertex(Nosex-15.5,Nosey-0.5)
  endShape()
  beginShape()
  vertex(Nosex-2.5,Nosey+2.5)
  vertex(Nosex-22.5,Nosey+2.5)
  endShape()
  beginShape()
  vertex(Nosex-3.5,Nosey+4.5)
  vertex(Nosex-15.5,Nosey+6.5)
  endShape()
  beginShape()
  vertex(Nosex+8.5,Nosey+0.5)//right whiskers
  vertex(Nosex+20.5,Nosey-0.5)
  endShape()
  beginShape()
  vertex(Nosex+7.5,Nosey+2.5)
  vertex(Nosex+27.5,Nosey+2.5)
  endShape()
  beginShape()
  vertex(Nosex+8.5,Nosey+4.5)
  vertex(Nosex+20.5,Nosey+6.5)
  endShape()
//eyes
  strokeWeight(2)//black eyes
  fill(0,0,0)
  ellipse(Nosex-5.5,Nosey-7.5,5,5)
  ellipse(Nosex+9.5,Nosey-7.5,5,5)
  strokeWeight(0)//white glint in eyes
  fill(300,300,300)
  ellipse(Nosex-7.5,Nosey-9,2,2)
  ellipse(Nosex+7.5,Nosey-9,2,2)

  scale(ScalingWool)
//wool
 strokeWeight(2)
 if(Woolfill==1){
  fill(0,0,0)}
  else if(Woolfill==2){
  fill(225, 225, 225)}
  else if(Woolfill==3){
  fill(146, 209, 205)}  
  else if(Woolfill==4){
  fill(186, 20, 20)}

 rect(Woolx+5,Wooly+6.5,25,4)
 ellipse(Woolx,Wooly,20,20)
 ellipse(Woolx-4,Wooly,4,22)//vertical left
 ellipse(Woolx,Wooly,4,22)//vertical middle
 ellipse(Woolx+4,Wooly,4,22)//vertical right
 ellipse(Woolx,Wooly-4,22,4)//horozontal top
 ellipse(Woolx,Wooly,22,4)//horozontal middle
 ellipse(Woolx,Wooly+4,22,4)//horozontal bottom

 if(FourWoolPattern==40){
 //wool 2
 strokeWeight(2)
 rect(3.8*Woolx+5,Wooly+6.5,25,4)
 ellipse(3.8*Woolx,Wooly,20,20)
 ellipse(3.8*Woolx-4,Wooly,4,22)//vertical left
 ellipse(3.8*Woolx,Wooly,4,22)//vertical middle
 ellipse(3.8*Woolx+4,Wooly,4,22)//vertical right
 ellipse(3.8*Woolx,Wooly-4,22,4)//horozontal top
 ellipse(3.8*Woolx,Wooly,22,4)//horozontal middle
 ellipse(3.8*Woolx,Wooly+4,22,4)//horozontal bottom
 //wool3
 strokeWeight(2)
 rect(Woolx+5,4*Wooly+6.5,25,4)
 ellipse(Woolx,4*Wooly,20,20)
 ellipse(Woolx-4,4*Wooly,4,22)//vertical left
 ellipse(Woolx,4*Wooly,4,22)//vertical middle
 ellipse(Woolx+4,4*Wooly,4,22)//vertical right
 ellipse(Woolx,4*Wooly-4,22,4)//horozontal top
 ellipse(Woolx,4*Wooly,22,4)//horozontal middle
 ellipse(Woolx,4*Wooly+4,22,4)//horozontal bottom
  //wool 4
  strokeWeight(2)
  rect(3.8*Woolx+5,4*Wooly+6.5,25,4)
  ellipse(3.8*Woolx,4*Wooly,20,20)
  ellipse(3.8*Woolx-4,4*Wooly,4,22)//vertical left
  ellipse(3.8*Woolx,4*Wooly,4,22)//vertical middle
  ellipse(3.8*Woolx+4,4*Wooly,4,22)//vertical right
  ellipse(3.8*Woolx,4*Wooly-4,22,4)//horozontal top
  ellipse(3.8*Woolx,4*Wooly,22,4)//horozontal middle
  ellipse(3.8*Woolx,4*Wooly+4,22,4)//horozontal bottom
 }

  
}



