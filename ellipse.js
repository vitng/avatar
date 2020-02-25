class Ellipse {
  constructor (_r){
    this.r = _r;
    this.fill = color ( random (255), random ( 255), random (255), 60);
    
  }
display (){
  fill ( this.fill);
  ellipse ( 370, 180, this.r);
  
}
  
  grow (){
    
   this.r++;
    //this.r + = 2;
    
    
    if ( this.r > width + 100) {
      this.fill = color ( random (255), random ( 255), random (255), 100);
       fill ( random (255), random ( 255), random (255), 90)
       this.r= 0;
    }
      
    }
     
  }


