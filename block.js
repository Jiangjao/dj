	// function drawImg(img){
		// 	context.drawImage(img.image,img.x,img.y);
		// }
		
		//to judge two objects collides
		// horizontal 1.  paddle.x   ball.x+ball.width    paddle.x+paddle.width
		// 		   2.        ===>         paddle.x<ball.x+ball.width/2<paddle.x+ball.width
		// vertical   1.  paddle.y    ball.y+ball.height    paddle.y+paddle.height emm so it's pleonastic ??
		// 		   2.        ===>                 paddle.y>ball.y+ball.height  && paddle.y+paddle.height<ball.y 

var Block=function(position){
    var p=position;
    //log(position)
    //图片为何要预加载？？
    var image=getPath("./emmm/block.png");
    o={
        image:image,
        x:p[0],
        y:p[1],
        w:61,
        h:12,
        alive:true,
    }
  // var p=o;
    o.kill=function(){
        this.alive=false;
    }
    // o.collide=function(ball){
    // 	//不能通过1 < a<3必须这样  
    // 	if(ball.x>this.x&&ball.x<this.image.width+this.x){
    // 		if(ball.y<this.y+this.image.height&&ball.y+ball.image.height>ball.x){
    // 			//log("collide");
    // 			return true;
    // 		}	
    // 		//return false;
    // 	}
    // 	return  false;
    // }  
   // o=this;
   //this 绑定丢失 ，如果全部都用o.alive&&(rectoverlap())...那么就会使所有的o.alive绑定到一个block上
      o.collide=function(b){
        return this.alive&&(rectoverlap(this,b)||rectoverlap(b,this));
    }
    return o;
}