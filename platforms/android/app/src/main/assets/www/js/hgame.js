
var tbl_letters = Array("A", "Ă", "Â", "B", "C", "D", "Đ", "E", "Ê","G","H","I","K","L","M","N","O","Ô","Ơ","P","Q","R","S","T","U","Ư","V","X","Y");
var tbl_audio = Array("a.mp3", "aw.mp3", "aa.mp3", "b.mp3","c.mp3","d.mp3","dd.mp3","e.mp3","ee.mp3","g.mp3","h.mp3","i.mp3","k.mp3","l.mp3","m.mp3","n.mp3","o.mp3","oo.mp3","ow.mp3","p.mp3","q.mp3","r.mp3","s.mp3","t.mp3","u.mp3","uw.mp3","v.mp3","x.mp3","y.mp3");

var objBoard = document.getElementById("animate");
var objAudio = document.getElementById("audio");



    function removeElement(elementId) {
        // Removes an element from the document
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }
    

function read_letter(sname) {

    var playfile = document.getElementById(sname);

    playfile.play();

}function stop_letter(sname) {

    var playfile = document.getElementById(sname);

    playfile.pause();

}

function btn_switch(sID,k) {

   
    var objTmp = document.getElementById(sID);
    objTmp.disabled = k;
   
}

function btn_end() {

    objBoard.innerHTML = "";
    objAudio.innerHTML = "";
    btn_switch("btnStart",false);

}

function LoadWord()
{

    for (j = 0; j < tbl_audio.length; j++) {

        objAudio.innerHTML += "<audio id= " + tbl_audio[j].toString() + " src= /content/audio/" + tbl_audio[j].toString() + " />";

    }
  
    for (i = 0; i < tbl_letters.length; i++ )
    {
        objBoard.innerHTML +=  "<div class='btn btn-success hgame_letter' id= L" +i.toString()+ " onclick=read_letter('"+tbl_audio[i].toString()+"')>" +tbl_letters[i].toString()+ "</div>";

    }

   
    btn_switch("btnStart", true);
   
}

