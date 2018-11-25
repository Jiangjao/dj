var log = console.log.bind(console);
// var canvas = document.getElementById("id-canvas");
// var context = canvas.getContext('2d');

function  getPath(src) {
    var img=new Image();
    img.src=src;
    return img;
}
function rectoverlap(a,b){
    if(a.x<b.x&&a.x+a.image.width>b.x+b.image.width){
            if(a.y<b.y+b.image.height&&b.y<a.y+a.image.height){
                //log("collide");
                return true;
            }	
            //return false;
        }
        return  false;
}