var app = app || {};

(function(){
  "use strict";
  
  function Actor() {
    this.x = 0;
    this.y = 0;
    this.element = document.createElement("div");
    document.body.appendChild(this.element);
  }
  
  Actor.prototype.move = function(x, y){
      this.x += x;
      this.y += y;
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
  }
  
  function Hero() {
    Actor.call(this);
    this.element.className = "actor hero";
  }
  
  function Bandit() {
      Actor.call(this);
      this.element.className = "actor bandit";
  }
    
  function CreateBandits(numberOfBandits) {
    var bandits = new Array(numberOfBandits);
      
    var i = 0;
    for (i = 0; i < numberOfBandits; i++) {
        var b = new Bandit();
        bandits[i] = b;
    }
    return bandits;
  }
    
  function MoveBandits(bandits) {
      
      var numberOfBandits = bandits.length;
      var i = 0;
      for(i = 0; i < numberOfBandits; i++) {
        var c = new Coordinates();
        bandits[i].move(c.x, c.y);
      }
  }
    
  function Coordinates() {
      this.x = GetRandomNumber(50, 900);
      this.y = GetRandomNumber(50, 900);
  }
    
  function GetRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
    
  Hero.prototype = Object.create(Actor.prototype);
  Bandit.prototype = Object.create(Actor.prototype);
    
    
  app.hero = new Hero();
  app.hero.move(10, 10);
    
  app.bandits = CreateBandits(20);

  MoveBandits(app.bandits);
    

    
})();

