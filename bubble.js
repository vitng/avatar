class Bubble {

  constructor(_bubble1, _bubble2, _bubble3) {

    this.bubble1 = _bubble1;
    this.bubble2 = _bubble2;
    this.bubble3 = _bubble3;
  }

  display() {
    function drawBubble1() {
      fill("lightPink");
      ellipse(60, 110, 90, 90);
    }

    function drawBubble2() {
      fill("lightBlue");
      ellipse(90, 180, 80, 80);
    }

    function drawBubble3() {
      fill("lightGreen");
      ellipse(120, 210, 10, 10);
    }
  }
  move() {

    this.bubble1 = this.bubble1 + random(-5, 5);
    this.bubble2 = this.bubble2 + random(-2, 2);
    this.bubble3 = this.bubble3 + random(-1, 1);
  }
  show() {

    stroke("black");
    strokeWeight(0.25);

    fill("Pink");
    ellipse(this.bubble1, this.bubble2, 90, 90);
   
    fill("lightBlue");
    ellipse(this.bubble1, this.bubble2, 70, 70);
   
    fill("lightGreen");
    ellipse(this.bubble1, this.bubble2, 50, 50);
  }

}

