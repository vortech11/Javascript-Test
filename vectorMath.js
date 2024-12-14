export function Vector2(x, y){
    this.x = x;
    this.y = y;
    
    this.add = function(otherVector){
      this.x += otherVector.x;
      this.y += otherVector.y;
    };
    this.sub = function(otherVector){
      this.x -= otherVector.x;
      this.y -= otherVector.y;
    };
    this.normalize = function(){
      this.scale(1/this.distance());
    };
    this.cross = function(otherVector){
      return this.x * otherVector.y - this.x * otherVector.y;
    };
    this.scale = function(value){
      this.x *= value;
      this.y *= value;
    };
    this.dot = function(otherVector){
      return this.x*otherVector.x + this.y*otherVector.y;
    };
    this.distance = function(){
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
  }