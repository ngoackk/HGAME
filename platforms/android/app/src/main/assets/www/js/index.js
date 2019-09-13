var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent("deviceready");
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
var tbl_test = Array("behaychonchu.mp3", "sairoisuynghi.mp3", "haychirachu.mp3", "totlam.mp3");

var tbl_letters = Array(
  "A",
  "Ă",
  "Â",
  "B",
  "C",
  "D",
  "Đ",
  "E",
  "Ê",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ô",
  "Ơ",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "Ư",
  "V",
  "X",
  "Y"
);
var tbl_audio = Array(
  "a.mp3",
  "aw.mp3",
  "aa.mp3",
  "b.mp3",
  "c.mp3",
  "d.mp3",
  "dd.mp3",
  "e.mp3",
  "ee.mp3",
  "g.mp3",
  "h.mp3",
  "i.mp3",
  "k.mp3",
  "l.mp3",
  "m.mp3",
  "n.mp3",
  "o.mp3",
  "oo.mp3",
  "ow.mp3",
  "p.mp3",
  "q.mp3",
  "r.mp3",
  "s.mp3",
  "t.mp3",
  "u.mp3",
  "uw.mp3",
  "v.mp3",
  "x.mp3",
  "y.mp3"
);

var objBoard = document.getElementById("letters");
var objMark = document.getElementById("marks");
var objAudio = document.getElementById("audio");

var objBigLetter = document.getElementById("bigLetter");


var kupper = false;
var returnLetter;
var returnRandom;
var testCheck = false;
// function removeElement(elementId) {
//     // Removes an element from the document
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }

//================ Phát âm==============================//
function read_letter(sname, letter) {
  var playfile = document.getElementById(sname);
  var objWrong = document.getElementById("sairoisuynghi.mp3");
  var objCorect = document.getElementById("totlam.mp3");

  try {
    objBigLetter.innerHTML = letter;


    if (testCheck) {
      setTimeout(function () {
        playfile.play();
      }, 1000);
      if (tbl_letters[returnRandom] != letter.toUpperCase()) {

        objWrong.play();
      } else {

        objCorect.play();
      }
      testCheck = false;

    } else {

      playfile.play();
    }
  } catch (ex) {
    alert("Lỗi Play file Autio: " + ex.toString());
  }
}

//================Dừng đọc=============================//
function stop_letter(sname) {
  var playfile = document.getElementById(sname);

  playfile.pause();
}

//=================Đảo trạng thái====================//
function btn_switch(sID, k) {
  var objTmp = document.getElementById(sID);
  objTmp.disabled = k;
}
//========================Kết thúc======================//
function btn_end() {
  objBoard.innerHTML = "";
  objAudio.innerHTML = "";
  objBigLetter.innerHTML = "";
  btn_switch("btnStart", false);
}

//=====================Nạp tệp tin Audio====================//
function load_audio() {
  objAudio.innerHTML = "";

  for (var k = 0; k < tbl_test.length; k++) {

    objAudio.innerHTML += "<audio id=" +
      tbl_test[k].toString() +
      " src= 'img/audio/" +
      tbl_test[k].toString() + "' />";

  }
  for (j = 0; j < tbl_audio.length; j++) {
    objAudio.innerHTML +=
      "<audio id= " +
      tbl_audio[j].toString() +
      " src = 'img/audio/" +
      tbl_audio[j].toString() +
      "' />";
  }
}

//========================Nạp bảng chữ cái===================//
function LoadWord(kupcase) {
  kupper = true;
  objBoard.innerHTML = "";
  objBigLetter.innerHTML = "";
  if (kupcase == true) {
    for (i = 0; i < tbl_letters.length; i++) {
      objBoard.innerHTML +=
        "<button class='btn btn-success hgame_letter' id= L" +
        i.toString() +
        " onclick=read_letter('" +
        tbl_audio[i].toString() +
        "','" +
        tbl_letters[i].toString() +
        "')>" +
        tbl_letters[i].toString() +
        "</button>";
    }
  } else {
    kupper = false;
    for (i = 0; i < tbl_letters.length; i++) {
      objBoard.innerHTML +=
        "<button class='btn btn-success hgame_letter' id= L" +
        i.toString() +
        " onclick=read_letter('" +
        tbl_audio[i].toString() +
        "','" +
        tbl_letters[i].toLowerCase() +
        "')>" +
        tbl_letters[i].toLowerCase() +
        "</button>";
    }
  }


}

function Test() {
  testCheck = true;
  var chkSuggest = document.getElementById("chkSuggest");
  var starttest = document.getElementById('behaychonchu.mp3');

  var rndID = Math.floor(Math.random() * 29);


  var objBigLetter = document.getElementById("bigLetter");

  returnRandom = rndID;

  //alert('Số thứ tự:' + rndID);

  objBigLetter.innerHTML = "";

  var playfile = document.getElementById(tbl_audio[rndID].toString());

  // alert(chkSuggest.checked);

  try {


    starttest.play();

    setTimeout(function () {
      playfile.play();
    }, 1500);
    setTimeout(function () {
      if (chkSuggest.checked) {

        if (kupper) {
          objBigLetter.innerHTML = tbl_letters[rndID];
        } else {

          objBigLetter.innerHTML = tbl_letters[rndID].toLowerCase();
        }


      }
    }, 1500);




  } catch (ex) {
    alert("Lỗi Play file Autio: " + ex.toString());
  }

}

app.initialize();