var colorlist = ["red","green","yellow","blue"];
var randomnumber = Math.floor(Math.random()*4);
var game = [];
var user= [];


$(document).keypress(function (){
  if (game.length==0){
    $("h1").html("Level 1");
    sound();
  }

});


$(".btn").click(function (){

  var b = this.id;
  user.push(b);
  pressed(b);
  var over = 1;
  for (var i =0;i<user.length;i++){
    if (user[i]!==game[i]){
      var c= new Audio("sounds/wrong.mp3");
      c.play();
      $("h1").html("Game Over!! Press any key to restart");
      var over = 0;
      game=[];
    };
  };
  if (user.length==game.length && over==1){
    $("h1").html("Level "+(game.length+ 1));
    user=[];
    setTimeout(sound,600);
  }

});



function audio(col){
  var a = new Audio("sounds/"+col+".mp3");
  a.play();
}
function pressed(col){
  $("#"+col).addClass("pressed");
  audio(col);
  setTimeout(function(){
    $("#"+col).removeClass("pressed");
  },200)
}
function sound(){
  var color = colorlist[Math.floor(Math.random()*4)];
  pressed(color);
  game.push(color);
}
