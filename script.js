player1p = 0;
player2p = 0;
function login(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.open("game.html");
}
function loadCred(){
    player1 = localStorage.getItem("player1");
    player2 = localStorage.getItem("player2");
    document.getElementById("player1inf").innerHTML = player1+" : "+player1p;
    document.getElementById("player2inf").innerHTML = player2+" : "+player2p;
    document.getElementsByTagName("h1")[0].innerHTML=document.getElementsByTagName("h1")[0].innerHTML+player1;
    document.getElementsByTagName("h1")[1].innerHTML=document.getElementsByTagName("h1")[1].innerHTML + player2;
    localStorage.setItem("AT",player1);
    localStorage.setItem("QT",player2)
}
function send(){
    word = document.getElementById("word").value;
    word_lower1 = word.toLowerCase();
    word_length = word.length;
    word_lower = word_lower1.replace(word_lower1[0],"_");
    for(var i = 0;i<=word_length;i++){
        if(i%2==0){
            word_lower = word_lower.replace(word_lower[i],"_");
        }
    }
    text = word_lower;
    display();
}
turnnum = 0;
function display(){
    turnnum = turnnum + 1;
    var newcode = "<br><br><center><h1>Question : </h1><br><br><h2 id=worddis></h2><br><input id=word_inp placeholder=Enter the word><br><br><button class=btn btn-success onclick=check()>Submit</button><br></center>";
    document.getElementById("question_cont").innerHTML = newcode;
    document.getElementById("worddis").innerHTML = text;
    document.getElementById("word").value="";
}
function check(){
    guess = document.getElementById("word_inp").value;
    play = document.getElementsByTagName("h1")[0].innerHTML;
    if(play.includes(player1)){
    if(guess==word_lower1){
        player1p = player1p + 1;
        document.getElementsByTagName("p")[0].innerHTML = player1+" : "+player1p;
        document.getElementsByTagName("h1")[0].innerHTML="Answer Turn : "+player2;
        document.getElementsByTagName("h1")[1].innerHTML="Question Turn : "+player1;
    }
}
else{
    if(guess==word_lower1){
        player2p = player2p + 1;
        document.getElementsByTagName("p")[1].innerHTML = player2+" : "+player2p;
        document.getElementsByTagName("h1")[0].innerHTML="Answer Turn : "+player1;
        document.getElementsByTagName("h1")[1].innerHTML= "Question Turn : "+player2;
    }
}
document.getElementById("question_cont").innerHTML="";
}
