var Paddle=function(){
    var image=getPath("./emmm/paddle.png");
    img={
        image:image,
        x:100,
        y:200,
    }
    var o=img;
    img.moveLeft=function(){
        o.x-=10;
        //log("hah hah this " ,this.x);
        //emmm how about keyword this ...uh to figure it
        //maybe it's a closure
        //because 1.外层函数有setTimeout 1000/60调用一次，所以调用时会丢失img指向 please 注意调用位置
        //为什么this这时候有效呢？ES6吗？ 不是,使用this 绑定时,是隐式绑定ball的，使用img是隐式绑定
        //回掉函数调用函数会丢失this 
        //在一些流行的 JavaScript 库中事件处理器常会把回调函数的 this 强制绑
        //定到触发事件的 DOM 元素上。 
        //这在一些情况下可能很有用，但是有时它可能会让你感到非常郁闷
        //console.log(img);
    }
    img.moveright=function(){
        o.x+=10;
    }
    // img.collide = function(ball) {
       // 	 if (ball.y + ball.image.height > img.y) {
       // 		 if (ball.x > img.x && ball.x < img.x + img.image.width) {
    //   		  log('相撞')
    //    		 return true;
      // 				  }
       // 			 }
       // 	 return false;
    // 	}
return  img;
}