
var GuaGame=function(fps){
    var g={
        actions:[],
        keydowns:[]
    };

    var canvas=document.getElementById('id-canvas');
    var context=canvas.getContext('2d');
    g.canvas=canvas;
    g.context=context;
    g.drawImage=function(GuaImage){
        g.context.drawImage(GuaImage.image,GuaImage.x,GuaImage.y);
    }
    //events
    window.addEventListener("keydown",function(event){
        g.keydowns[event.key]=true;
        //log(g.keydowns,event.key);
    });
    window.addEventListener("keyup",function(event){
        g.keydowns[event.key]=false;
        //log(g.keydowns);
        //log(g.keydowns,event.key);
    });
    //运用注册表来储存事件
    g.registerAction=function(key,callback){
        g.actions[key]=callback;
    }
    //timer
    //refresh UI 
    var runloop=function(){
        var actions=Object.keys(g.actions);
        //log(actions[0]);
        for(var i=0;i<actions.length;i++){
            var key=actions[i];
            if(g.keydowns[key]){
                //如果按键被按下，调用注册的action
                g.actions[key]();
            }
        }
        //update
        g.update();
        //draw
        context.clearRect(0,0,canvas.width,canvas.height);
        
        g.draw();
        setTimeout(function(){
            runloop();
        },1000/window.fps);
    }

    //对于setTimeOut的研究



    
    setTimeout(function(){
        runloop();
    },1000/window.fps);
    // setInterval(function(){
    //     var actions=Object.keys(g.actions);
    //     //log(actions[0]);
    //     for(var i=0;i<actions.length;i++){
    //         var key=actions[i];
    //         if(g.keydowns[key]){
    //             //如果按键被按下，调用注册的action
    //             g.actions[key]();
    //         }
    //     }
    //     //update
    //     g.update();
    //     //draw
    //     context.clearRect(0,0,canvas.width,canvas.height);
        
    //     g.draw();
    //     //g.draw();
    //     //ball.move();
    //     //drawImg(ball);
    // },1000/fps);
    return g;
}