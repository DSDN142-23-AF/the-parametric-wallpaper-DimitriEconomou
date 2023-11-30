//your parameter variables go here!
//cottagecore background variabkes
let horozontalShift=40 //20,40,80,100,200 originally 20
let verticalShift=40 //20,40,80,100  originally 20
let horozontalStrokeColour=1//1=black,2=yellow,3=green,4=red
let verticalStrokeColour=4//1=black,2=yellow,3=green,4=red
let horozontalcottagecoreStrokeWeight=8//stroke weight of horozontal lines
let verticalcottagecoreStrokeWeight=8//stroke weight of vertical lines

//cat variables
let Nosex=50//originally 92.5 middle of nose that is used for cat origin, (50 centre of page)
let Nosey=50//originally 132.5 middle of nose that is used for cat origin, (60 centre of page)
let ShowBody=false//turns the body of the cat on and off (my if statment)
let Catstroke=8
let ScalingCat=2//scale of whole cat
let ScaleBody=1
let ScaleHead=0
let ScaleLeftEar=1.1
let ScaleRightEar=1 
let ScaleNose=1 
let ScaleMouth=1 
let ScaleWhiskers=1
let ScaleEyes=1

//woolvariables
let ScalingWool=0//scale of wool originally 1
let Woolx=0//originally 110 (changes x value of wool)
let Wooly=0//originally 166 (changes y value of wool)
let FourWoolPattern=(Woolx+Wooly)/2//when (40,40) it creates a pattern of 4 (one of each wool in each corner, scale must be 0.5), when (65,0) it turns into a centered around edges(0.75 scale)
let Woolfill=1 //changes fill 1 black, 2 white, 3 lightblue, 4 red
let Woolstroke=0


function setup_wallpaper(pWallpaper) {
    
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
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
  
  //cottagecore background-----------------------------------------------------------
  scale(1)
  strokeWeight(verticalcottagecoreStrokeWeight)
  if(verticalStrokeColour==1){
  stroke(0,0,0,50)}
  else if(verticalStrokeColour==2){
  stroke(214, 210, 60,55)}
  else if(verticalStrokeColour==3){
  stroke(92, 214, 95,60)}  
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

  strokeWeight(horozontalcottagecoreStrokeWeight)
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

  
//cat
 scale(ScalingCat)
  strokeWeight(2)
  stroke(0,0,0,225)
  fill(140, 126, 105)
//body---------------------------------------------------------------------
  if(ShowBody){
  strokeWeight(2)
  scale(ScaleBody)
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
 //head------------------------------------------------------
 scale(ScaleHead)
  beginShape()
  vertex(Nosex+17.5,Nosey-12.5)
  vertex(Nosex+17.5,Nosey+2.5)
  vertex(Nosex+12.5,Nosey+7.5)
  vertex(Nosex-7.5,Nosey+7.5)
  vertex(Nosex-12.5,Nosey+2.5)
  vertex(Nosex-12.5,Nosey-12.5)
  vertex(Nosex-7.5,Nosey-17.5)
  vertex(Nosex+12.5,Nosey-17.5)
  vertex(Nosex+17.5,Nosey-12.5)
  endShape()
 //left ear-------------------------------------------------
 scale(ScaleLeftEar) 
  beginShape() 
  vertex(Nosex-12.5,Nosey-27.5)
  vertex(Nosex-12.5,Nosey-12.5)
  vertex(Nosex-7.5,Nosey-17.5)
  vertex(Nosex-2.5,Nosey-17.5)
  vertex(Nosex-10.5,Nosey-25.5)
  vertex(Nosex-7.5,Nosey-17.5)
  endShape()
  //right ear------------------------------------------------
  scale(ScaleRightEar) 
  beginShape()
  vertex(Nosex+17.5,Nosey-27.5)
  vertex(Nosex+17.5,Nosey-12.5)
  vertex(Nosex+12.5,Nosey-17.5)
  vertex(Nosex+7.5,Nosey-17.5)
  vertex(Nosex+15.5,Nosey-25.5)
  vertex(Nosex+12.5,Nosey-17.5)
  endShape()
  //nose------------------------------------------------------
  scale(ScaleNose) 
  fill(189, 102, 123)
  beginShape()
  vertex(Nosex-2.5,Nosey-2.5)
  vertex(Nosex+7,Nosey-2.5)
  vertex(Nosex+2.5,Nosey+2.5)
  vertex(Nosex-2.5,Nosey-2.5)
  endShape()
  fill(140, 126, 105)
  //mouth-----------------------------------------------------
  scale(ScaleMouth) 
  beginShape()
  vertex(Nosex+2.5,Nosey+2.5)
  vertex(Nosex+7.5,Nosey+7.5)
  vertex(Nosex-2.5,Nosey+7.5)
  vertex(Nosex+2.5,Nosey+2.5)
  endShape()
//whiskers--------------------------------------------------
  scale(ScaleWhiskers) 
  strokeWeight(1.5)
  beginShape()
  vertex(Nosex-3.5,Nosey+0.5)//left whiskers--------
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
  vertex(Nosex+8.5,Nosey+0.5)//right whiskers--------
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
//eyes--------------------------------------------------------
 scale(ScaleEyes) 
  strokeWeight(2)//black eyes
  fill(0,0,0)
  ellipse(Nosex-5.5,Nosey-7.5,5,5)
  ellipse(Nosex+9.5,Nosey-7.5,5,5)
  strokeWeight(0)//white glint in eyes
  fill(300,300,300)
  ellipse(Nosex-7.5,Nosey-9,2,2)
  ellipse(Nosex+7.5,Nosey-9,2,2)

 //wool---------------------------------------------------------------
 if(FourWoolPattern==40){
  scale(ScalingWool)
  //wool 1
   strokeWeight(Woolstroke)
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
  
 //wool 2
 strokeWeight(Woolstroke)
 rect(3.8*Woolx+5,Wooly+6.5,25,4)
 ellipse(3.8*Woolx,Wooly,20,20)
 ellipse(3.8*Woolx-4,Wooly,4,22)//vertical left
 ellipse(3.8*Woolx,Wooly,4,22)//vertical middle
 ellipse(3.8*Woolx+4,Wooly,4,22)//vertical right
 ellipse(3.8*Woolx,Wooly-4,22,4)//horozontal top
 ellipse(3.8*Woolx,Wooly,22,4)//horozontal middle
 ellipse(3.8*Woolx,Wooly+4,22,4)//horozontal bottom
 //wool3
 strokeWeight(Woolstroke)
 rect(Woolx+5,4*Wooly+6.5,25,4)
 ellipse(Woolx,4*Wooly,20,20)
 ellipse(Woolx-4,4*Wooly,4,22)//vertical left
 ellipse(Woolx,4*Wooly,4,22)//vertical middle
 ellipse(Woolx+4,4*Wooly,4,22)//vertical right
 ellipse(Woolx,4*Wooly-4,22,4)//horozontal top
 ellipse(Woolx,4*Wooly,22,4)//horozontal middle
 ellipse(Woolx,4*Wooly+4,22,4)//horozontal bottom
  //wool 4
  strokeWeight(Woolstroke)
  rect(3.8*Woolx+5,4*Wooly+6.5,25,4)
  ellipse(3.8*Woolx,4*Wooly,20,20)
  ellipse(3.8*Woolx-4,4*Wooly,4,22)//vertical left
  ellipse(3.8*Woolx,4*Wooly,4,22)//vertical middle
  ellipse(3.8*Woolx+4,4*Wooly,4,22)//vertical right
  ellipse(3.8*Woolx,4*Wooly-4,22,4)//horozontal top
  ellipse(3.8*Woolx,4*Wooly,22,4)//horozontal middle
  ellipse(3.8*Woolx,4*Wooly+4,22,4)//horozontal bottom
 }
 else if (FourWoolPattern==32.5){
  scale(ScalingWool)
//wool
 strokeWeight(Woolstroke)
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

 //wool 2
 strokeWeight(Woolstroke)
 rect(Woolx+65+5,Wooly+75+6.5,25,4)
 ellipse(Woolx+65,Wooly+75,20,20)
 ellipse(Woolx+65-4,Wooly+75,4,22)//vertical left
 ellipse(Woolx+65,Wooly+75,4,22)//vertical middle
 ellipse(Woolx+65+4,Wooly+75,4,22)//vertical right
 ellipse(Woolx+65,Wooly+75-4,22,4)//horozontal top
 ellipse(Woolx+65,Wooly+75,22,4)//horozontal middle
 ellipse(Woolx+65,Wooly+75+4,22,4)//horozontal bottom
 
}
else if (FourWoolPattern==37.5){
  scale(ScalingWool)
 //wool
 strokeWeight(Woolstroke)
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

 //wool 2
 strokeWeight(Woolstroke)
 rect(Woolx+80+5,Wooly+85+6.5,25,4)
 ellipse(Woolx+80,Wooly+85,20,20)
 ellipse(Woolx+80-4,Wooly+85,4,22)//vertical left
 ellipse(Woolx+80,Wooly+85,4,22)//vertical middle
 ellipse(Woolx+80+4,Wooly+85,4,22)//vertical right
 ellipse(Woolx+80,Wooly+85-4,22,4)//horozontal top
 ellipse(Woolx+80,Wooly+85,22,4)//horozontal middle
 ellipse(Woolx+80,Wooly+85+4,22,4)//horozontal bottom
 
} 
else if(FourWoolPattern==0){
  strokeWeight(Woolstroke)
  if(Woolfill==1){
   fill(0,0,0)}
   else if(Woolfill==2){
   fill(225, 225, 225)}
   else if(Woolfill==3){
   fill(146, 209, 205)}  
   else if(Woolfill==4){
   fill(186, 20, 20)}
 
  rect(Woolx+5,Wooly+6.5,0,0)
  ellipse(Woolx,Wooly,0,0)
  ellipse(Woolx-4,Wooly,0,0)//vertical left
  ellipse(Woolx,Wooly,0,0)//vertical middle
  ellipse(Woolx+4,Wooly,0,0)//vertical right
  ellipse(Woolx,Wooly-4,0,0)//horozontal top
  ellipse(Woolx,Wooly,0,0)//horozontal middle
  ellipse(Woolx,Wooly+4,0,0)//horozontal bottom

}
else{
  //wool
  strokeWeight(Woolstroke)
  if(Woolfill==1){
   fill(0,0,0)}
  else if(Woolfill==2){
   fill(225, 225, 225)}
  else if(Woolfill==3){
   fill(146, 209, 205)}  
  else if(Woolfill==4){
   fill(186, 20, 20)
  }
 
  rect(Woolx+5,Wooly+6.5,25,4)
  ellipse(Woolx,Wooly,20,20)
  ellipse(Woolx-4,Wooly,4,22)//vertical left
  ellipse(Woolx,Wooly,4,22)//vertical middle
  ellipse(Woolx+4,Wooly,4,22)//vertical right
  ellipse(Woolx,Wooly-4,22,4)//horozontal top
  ellipse(Woolx,Wooly,22,4)//horozontal middle
  ellipse(Woolx,Wooly+4,22,4)//horozontal bottom
}
}



