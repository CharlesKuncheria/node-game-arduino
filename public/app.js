var myPanel = new jsgl.Panel(document.getElementById("panel"));
/* use myPanel's methods to draw shapes here */

var socket = io();
socket.on('pot-value', function(val){
    var horPos = (val + 1) * 100 / 1024;
    horPos += '%';
    $('#divElement').css({top: '50%', left: horPos, position:'absolute'});
});

var fireBullet = function(){
    var circle = myPanel.createCircle();
    var planeLeftPos = $('#divElement').position().left + 10;    
    var planeTopPos = $('#divElement').position().top - 100;

    circle.setCenterLocationXY(planeLeftPos,planeTopPos);
    circle.setRadius(10);
    circle.getStroke().setWeight(3);
    circle.getStroke().setColor("rgb(0,128,255)");
    myPanel.addElement(circle);
    
    setTimeout(function(){
        while(circle.getCenterY() > 10)
        {
            setTimeout(function(){
                circle.setCenterY(circle.getCenterY() - 5);
            }, 0);
        }
    }, 0);
};

$('#trigger').click(fireBullet);