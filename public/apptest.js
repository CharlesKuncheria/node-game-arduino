var timer = 0;

var dropEgg = function(){
    // make a random horizontal position,
    var randomHorPos = Math.floor((Math.random() * 100) + 1) + '%'; 
    $('#divEgg').css({top: '5%', left: randomHorPos, position:'absolute', visibility:'visible'});
    timer = setInterval(makeNextMove, 250);
};

var makeNextMove = function(){
    var nextTopPos = $('#divEgg').position().top + 5;
    if(basketCondition($('#divEgg').position(), $('#divBasket').position()))
    {
        clearInterval(timer);
        // make egg invisible.
        $('#divEgg').css({visibility:'hidden'});
    }
    var leftPos = $('#divEgg').position().left;
    $('#divEgg').css({top: nextTopPos, left: leftPos, position:'absolute'});
};

var stopDrop = function(){
    clearInterval(timer);
};

var basketCondition = function(eggPosition, basketPosition){
    console.log(Math.abs(eggPosition.left - basketPosition.left));
    if((eggPosition.top > basketPosition.top) && (Math.abs(eggPosition.left - basketPosition.left) < 20))
    {
        return true;
    }
    else
    {
        return false;
    }
}

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