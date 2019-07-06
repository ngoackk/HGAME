var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // // listeningElement.setAttribute('style', 'display:none;');
        // // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};




//Phần Code Game của Hấu


var tbl_letters = Array("A", "Ă", "Â", "B", "C", "D", "Đ", "E", "Ê", "G", "H", "I", "K", "L", "M", "N", "O", "Ô", "Ơ", "P", "Q", "R", "S", "T", "U", "Ư", "V", "X", "Y");
var tbl_audio = Array("a.mp3", "aw.mp3", "aa.mp3", "b.mp3", "c.mp3", "d.mp3", "dd.mp3", "e.mp3", "ee.mp3", "g.mp3", "h.mp3", "i.mp3", "k.mp3", "l.mp3", "m.mp3", "n.mp3", "o.mp3", "oo.mp3", "ow.mp3", "p.mp3", "q.mp3", "r.mp3", "s.mp3", "t.mp3", "u.mp3", "uw.mp3", "v.mp3", "x.mp3", "y.mp3");

var objBoard = document.getElementById("animate");
var objAudio = document.getElementById("audio");



function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}


function read_letter(sname) {

    var playfile = document.getElementById(sname);


    try {

        playfile.play();
    } catch (ex) {

        alert("Lỗi Play file Autio: " + ex.toString());
    }


}

function stop_letter(sname) {

    var playfile = document.getElementById(sname);

    playfile.pause();

}

function btn_switch(sID, k) {


    var objTmp = document.getElementById(sID);
    objTmp.disabled = k;

}

function btn_end() {

    objBoard.innerHTML = "";
    objAudio.innerHTML = "";
    btn_switch("btnStart", false);

}

function LoadWord(kupcase) {

    for (j = 0; j < tbl_audio.length; j++) {

        objAudio.innerHTML += "<audio id= " + tbl_audio[j].toString() + " src = 'img/audio/" + tbl_audio[j].toString() + "' />";

    }

    if (kupcase == true) {
        for (i = 0; i < tbl_letters.length; i++) {
            objBoard.innerHTML += "<button class='btn btn-success hgame_letter' id= L" + i.toString() + " onclick=read_letter('" + tbl_audio[i].toString() + "')>" + tbl_letters[i].toString() + "</button>";

        }
    } else {
        for (i = 0; i < tbl_letters.length; i++) {
            objBoard.innerHTML += "<button class='btn btn-success hgame_letter' id= L" + i.toString() + " onclick=read_letter('" + tbl_audio[i].toString() + "')>" + tbl_letters[i].toLowerCase() + "</button>";

        }
    }

    btn_switch("btnStart", true);

}

app.initialize();