var Ball=function(){
    var image=getPath("./emmm/ball.png");
    o={
        image:image,
        x:100,
        y:100,
        speedX:3,
        speedY:3,
        fired:false,
    }
   
    // o.pause=function(){
    //     o.fired=false;
    // }
    o.fire=function(){
     this.fired=true;
        //return this.fired;
        //console.log(o.fired)
    }
    o.move=function(){
        //o.fired会在这里丢失值，丢失，回去全局值 undefined emmm 浏览器也会有些bug ，emm暂时无法解决
        
      //  log("emm move 1",this.fired);
    if(this.fired){
       // log("hello ball move");
       // 1.外层函数有setTimeout 1000/60调用一次，所以调用时会丢失img指向 please 注意调用位置
        //为什么this这时候有效呢？ES6吗？ 不是,使用this 绑定时,是隐式绑定ball的，使用img是隐式绑定
        //回掉函数调用函数会丢失this ,它会去找附近最近的那个o.fired o.speedX因为名字相同嘛
        //在一些流行的 JavaScript 库中事件处理器常会把回调函数的 this 强制绑
        //定到触发事件的 DOM 元素上。 
        //这在一些情况下可能很有用，但是有时它可能会让你感到非常郁闷
        //console.log(img);
            if(this.x>=380||this.x<0){
            this.speedX=-this.speedX;
           // log("ball move");
                }
            if(this.y>283||this.y<0){
            this.speedY=-this.speedY;
                }
            this.x+=this.speedX;
            this.y+=this.speedY;
             }
    }
    // o.collide=function(paddle){
    // 	//不能通过1 < a<3必须这样  
    // 	if(paddle.x<this.x&&paddle.x+paddle.image.width>this.x+this.image.width){
    // 		if(paddle.y<this.y+this.image.height&&this.y<paddle.y+paddle.image.height){
    // 			//log("collide");
    // 			return true;
    // 		}	
    // 		//return false;
    // 	}
    // 	return  false;
    // }
    o.spedChange=function(){
        this.speedY*=-1;
    }
    
return o;
}