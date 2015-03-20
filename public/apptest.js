var dropEgg = function(){
    //setTimeout(function
    $('#divEgg').animate({top: '+=250'}, 10000, dropEgg);
};

var stopDrop = function(){
    $('#divEgg').stop();
};

var moveLeft = function(){
    var horPos = $('#divBasket').position().left - 10; 
    $('#divBasket').css({top: '50%', left: horPos, position:'absolute'});
};

var moveRight = function(){
   var horPos = $('#divBasket').position().left + 10; 
    $('#divBasket').css({top: '50%', left: horPos, position:'absolute'});
};

$('#drop').click(dropEgg);
$('#left').click(moveLeft);
$('#right').click(moveRight);
$('#stop').click(stopDrop);