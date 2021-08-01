//<img src="" onclick="TocarMusica()" />


function TocarMusicaTest(){
    var audio1 = new Audio();
    audio1.src = "../assets/music/Spring_In_My_Step.mp3";
    audio1.play();
}

function TocarMusica(){
  var audio1 = new Audio();
  audio1.src = "./assets/music/Spring_In_My_Step.mp3";
  audio1.volume = 0.4;
  audio1.play();
  console.log('Music...')
};