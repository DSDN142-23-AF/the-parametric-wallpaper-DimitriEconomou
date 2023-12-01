//cottagecore background variabkes-------------------------------------------------------------------------------------------------------------------------
let horozontalShift=20 //20,40,80,100,200 originally 20
let verticalShift=20 //20,40,80,100  originally 20
let horozontalStrokeColour=4//1=black,2=yellow,3=green,4=red
let verticalStrokeColour=4//1=black,2=yellow,3=green,4=red
let horozontalcottagecoreStrokeWeight=8//stroke weight of horozontal lines
let verticalcottagecoreStrokeWeight=8//stroke weight of vertical lines
//cat variables---------------------------------------------------------------------------------------------------------------------------------------------
let Nosex=49//originally 92.5 middle of nose that is used for cat origin, (50 centre of page)
let Nosey=61//originally 132.5 middle of nose that is used for cat origin, (60 centre of page)
let ShowBody=false//turns the body of the cat on and off (my if statment)
//all of the cat strokes below are originally 2 except whiskers (1.5)
let BodyStrokeWeight=1.5
let HeadStrokeWeight=1.5
let EarStrokeWeight=1.5
let NoseStrokeWeight=1.5
let MouthStrokeWeight=1.5
let WhiskersStrokeWeight=1
let EyesStrokeWeight=1.5
let ScalingCat=2//scale of whole cat
//woolvariables---------------------------------------------------------------------------------------------------------------------------------------------
let ScalingWool=0.5//scale of wool originally 1
let Woolx=40//originally 110 (changes x value of wool)
let Wooly=40//originally 166 (changes y value of wool)
let FourWoolPattern=(Woolx+Wooly)/2//when (40,40) it creates a pattern of 4 (one of each wool in each corner, scale must be 0.5), when (65,0) it turns into a centered around edges(0.75 scale)
let Woolfill=3 //changes fill 1 black, 2 white, 3 lightblue, 4 red
let WoolStrokeWeight=1//stroke weight of wool (originally 2)


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
  
  //cottagecore background-----------------------------------------------------------
  //vertical lines going left to right-----------------------------------------------------------
  scale(1)
  strokeWeight(verticalcottagecoreStrokeWeight)
  if(verticalStrokeColour==1){
  stroke(0,0,0,60)}
  else if(verticalStrokeColour==2){
  stroke(214, 210, 60,55)}
  else if(verticalStrokeColour==3){
  stroke(92, 214, 95,70)}  
  else if(verticalStrokeColour==4){
   stroke(196,45,45,50)}
 
  line(verticalShift,0,verticalShift,200) 
  line(2*verticalShift,0,2*verticalShift,200)
  line(3*verticalShift,0,3*verticalShift,200)
  line(4*verticalShift,0,4*verticalShift,200)
  line(5*verticalShift,0,5*verticalShift,200)
  line(6*verticalShift,0,6*verticalShift,200)
  line(7*verticalShift,0,7*verticalShift,200)
  line(8*verticalShift,0,8*verticalShift,200)
  line(9*verticalShift,0,9*verticalShift,200)
  line(10*verticalShift,0,10*verticalShift,200)
//horozontal lines going top to bottom----------------------------------------------------------------
  strokeWeight(horozontalcottagecoreStrokeWeight)
  if(horozontalStrokeColour==1){
  stroke(0,0,0,60)}
  else if(horozontalStrokeColour==2){
  stroke(214, 210, 60,55)}
  else if(horozontalStrokeColour==3){
  stroke(92, 214, 95,70)}  
  else if(horozontalStrokeColour==4){
   stroke(196,45,45,50)}

  line(0,horozontalShift,200,horozontalShift) 
  line(0,2*horozontalShift,200,2*horozontalShift)
  line(0,3*horozontalShift,200,3*horozontalShift)
  line(0,4*horozontalShift,200,4*horozontalShift)
  line(0,5*horozontalShift,200,5*horozontalShift)
  line(0,6*horozontalShift,200,6*horozontalShift)
  line(0,7*horozontalShift,200,7*horozontalShift)
  line(0,8*horozontalShift,200,8*horozontalShift)
  line(0,9*horozontalShift,200,9*horozontalShift)
  line(0,10*horozontalShift,200,10*horozontalShift)

//cat----------------------------------------------------------------------------------------------------------------------
 scale(ScalingCat)
  stroke(0,0,0,225)
  fill(140, 126, 105)
//body---------------------------------------------------------------------
  if(ShowBody){
  strokeWeight(BodyStrokeWeight)
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
   vertex(Nosex-62.5,Nosey+43.5)//closest facing back paw 
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
   vertex(Nosex-17.5,Nosey+37.5)//closest facing front paw 
   vertex(Nosex-15.5,Nosey+41)
   vertex(Nosex-15.5,Nosey+44.5)
   vertex(Nosex-9.5,Nosey+44.5)
   vertex(Nosex-9.5,Nosey+41.5)
   vertex(Nosex-9.5,Nosey+44)
   vertex(Nosex-6.5,Nosey+44)
   vertex(Nosex-6.5,Nosey+39.5)
   vertex(Nosex-8.5,Nosey+36.5)
   vertex(Nosex-8.5,Nosey+22.5)//transitioning to farthest front paw 
   vertex(Nosex-8.5,Nosey+36.5) 
   vertex(Nosex-6.5,Nosey+39.5)
   vertex(Nosex-2.5,Nosey+39.5)
   vertex(Nosex-2.5,Nosey+36)
   vertex(Nosex-4.5,Nosey+32.5)
   vertex(Nosex-4.5,Nosey+22.5)//finished paw (code below connects back up)
   vertex(Nosex-9.5,Nosey+22.5)
   vertex(Nosex-2.5,Nosey+22.5)
   vertex(Nosex+9.5,Nosey+7.5)
   endShape()
}
 //head------------------------------------------------------
  strokeWeight(HeadStrokeWeight)
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
  strokeWeight(EarStrokeWeight)
  beginShape() 
  vertex(Nosex-12.5,Nosey-27.5)
  vertex(Nosex-12.5,Nosey-12.5)
  vertex(Nosex-7.5,Nosey-17.5)
  vertex(Nosex-2.5,Nosey-17.5)
  vertex(Nosex-11.5,Nosey-26.5)
  vertex(Nosex-7.5,Nosey-17.5)
  endShape()
  //right ear------------------------------------------------ 
  strokeWeight(EarStrokeWeight)
  beginShape()
  vertex(Nosex+17.5,Nosey-27.5)
  vertex(Nosex+17.5,Nosey-12.5)
  vertex(Nosex+12.5,Nosey-17.5)
  vertex(Nosex+7.5,Nosey-17.5)
  vertex(Nosex+16.5,Nosey-26.5)
  vertex(Nosex+12.5,Nosey-17.5)
  endShape()
  //nose------------------------------------------------------
  strokeWeight(NoseStrokeWeight)
  fill(189, 102, 123)
  beginShape()
  vertex(Nosex-2.5,Nosey-2.5)
  vertex(Nosex+7,Nosey-2.5)
  vertex(Nosex+2.5,Nosey+2.5)
  vertex(Nosex-2.5,Nosey-2.5)
  endShape()
  fill(140, 126, 105)
  //mouth----------------------------------------------------- 
  strokeWeight(MouthStrokeWeight)
  beginShape()
  vertex(Nosex+2.5,Nosey+2.5)
  vertex(Nosex+7.5,Nosey+7.5)
  vertex(Nosex-2.5,Nosey+7.5)
  vertex(Nosex+2.5,Nosey+2.5)
  endShape()
//whiskers-------------------------------------------------- 
  strokeWeight(WhiskersStrokeWeight)
  beginShape()
  vertex(Nosex-3.5,Nosey+0.5)//left whiskers top to bottom--------
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
  vertex(Nosex+8.5,Nosey+0.5)//right whiskers top to bottom--------
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
  strokeWeight(EyesStrokeWeight)//black eyes
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
   strokeWeight(WoolStrokeWeight)
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
  ellipse(Woolx-4,Wooly,4,22)
  ellipse(Woolx,Wooly,4,22)
  ellipse(Woolx+4,Wooly,4,22)
  ellipse(Woolx,Wooly-4,22,4)
  ellipse(Woolx,Wooly,22,4)
  ellipse(Woolx,Wooly+4,22,4)
  
 //wool 2
 strokeWeight(WoolStrokeWeight)
 rect(3.8*Woolx+5,Wooly+6.5,25,4)
 ellipse(3.8*Woolx,Wooly,20,20)
 ellipse(3.8*Woolx-4,Wooly,4,22)
 ellipse(3.8*Woolx,Wooly,4,22)
 ellipse(3.8*Woolx+4,Wooly,4,22)
 ellipse(3.8*Woolx,Wooly-4,22,4)
 ellipse(3.8*Woolx,Wooly,22,4)
 ellipse(3.8*Woolx,Wooly+4,22,4)
 //wool3
 strokeWeight(WoolStrokeWeight)
 rect(Woolx+5,4*Wooly+6.5,25,4)
 ellipse(Woolx,4*Wooly,20,20)
 ellipse(Woolx-4,4*Wooly,4,22)
 ellipse(Woolx,4*Wooly,4,22)
 ellipse(Woolx+4,4*Wooly,4,22)
 ellipse(Woolx,4*Wooly-4,22,4)
 ellipse(Woolx,4*Wooly,22,4)
 ellipse(Woolx,4*Wooly+4,22,4)
  //wool 4
  strokeWeight(WoolStrokeWeight)
  rect(3.8*Woolx+5,4*Wooly+6.5,25,4)
  ellipse(3.8*Woolx,4*Wooly,20,20)
  ellipse(3.8*Woolx-4,4*Wooly,4,22)
  ellipse(3.8*Woolx,4*Wooly,4,22)
  ellipse(3.8*Woolx+4,4*Wooly,4,22)
  ellipse(3.8*Woolx,4*Wooly-4,22,4)
  ellipse(3.8*Woolx,4*Wooly,22,4)
  ellipse(3.8*Woolx,4*Wooly+4,22,4)
 }
 else if (FourWoolPattern==32.5){
  scale(ScalingWool)
//wool
 strokeWeight(WoolStrokeWeight)
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
 ellipse(Woolx-4,Wooly,4,22)
 ellipse(Woolx,Wooly,4,22)
 ellipse(Woolx+4,Wooly,4,22)
 ellipse(Woolx,Wooly-4,22,4)
 ellipse(Woolx,Wooly,22,4)
 ellipse(Woolx,Wooly+4,22,4)

 //wool 2
 strokeWeight(WoolStrokeWeight)
 rect(Woolx+65+5,Wooly+75+6.5,25,4)
 ellipse(Woolx+65,Wooly+75,20,20)
 ellipse(Woolx+65-4,Wooly+75,4,22)
 ellipse(Woolx+65,Wooly+75,4,22)
 ellipse(Woolx+65+4,Wooly+75,4,22)
 ellipse(Woolx+65,Wooly+75-4,22,4)
 ellipse(Woolx+65,Wooly+75,22,4)
 ellipse(Woolx+65,Wooly+75+4,22,4)
 
}
else if (FourWoolPattern==37.5){
  scale(ScalingWool)
 //wool
 strokeWeight(WoolStrokeWeight)
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
 ellipse(Woolx-4,Wooly,4,22)
 ellipse(Woolx,Wooly,4,22)
 ellipse(Woolx+4,Wooly,4,22)
 ellipse(Woolx,Wooly-4,22,4)
 ellipse(Woolx,Wooly,22,4)
 ellipse(Woolx,Wooly+4,22,4)

 //wool 2
 strokeWeight(WoolStrokeWeight)
 rect(Woolx+80+5,Wooly+85+6.5,25,4)
 ellipse(Woolx+80,Wooly+85,20,20)
 ellipse(Woolx+80-4,Wooly+85,4,22)
 ellipse(Woolx+80,Wooly+85,4,22)
 ellipse(Woolx+80+4,Wooly+85,4,22)
 ellipse(Woolx+80,Wooly+85-4,22,4)
 ellipse(Woolx+80,Wooly+85,22,4)
 ellipse(Woolx+80,Wooly+85+4,22,4)
 
} 
else if(FourWoolPattern==0){//wool not on canvas
  scale(ScalingWool)
  strokeWeight(WoolStrokeWeight)
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
  ellipse(Woolx-4,Wooly,0,0)
  ellipse(Woolx,Wooly,0,0)
  ellipse(Woolx+4,Wooly,0,0)
  ellipse(Woolx,Wooly-4,0,0)
  ellipse(Woolx,Wooly,0,0)
  ellipse(Woolx,Wooly+4,0,0)

}
else{
  //wool at any other position
  scale(ScalingWool)
  strokeWeight(WoolStrokeWeight)
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
  ellipse(Woolx-4,Wooly,4,22)
  ellipse(Woolx,Wooly,4,22)
  ellipse(Woolx+4,Wooly,4,22)
  ellipse(Woolx,Wooly-4,22,4)
  ellipse(Woolx,Wooly,22,4)
  ellipse(Woolx,Wooly+4,22,4)
}
}



