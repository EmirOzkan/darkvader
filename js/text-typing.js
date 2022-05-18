var i=0,text;
text =  "Klik op universum om tegen DarkVader te praten";

function typing() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,70);
  }
}
typing();