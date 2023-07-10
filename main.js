var Sr = window.webkitSpeechRecognition

var recog = new Sr

function selfie(){

    document.getElementById("utext").innerHTML = ""
    recog.start()

}

recog.onresult = function(event){

    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("utext").innerHTML = content

    texttospeech()
 
}

function texttospeech(){

    var synth = window.speechSynthesis
    var data = "taking your selfie in 5 seconds 5  4  3  2  1"
    //var data = document.getElementById("utext").value
    var speaking = new SpeechSynthesisUtterance(data)
    synth.speak(speaking)

    Webcam.attach(camera)

    setTimeout(function(){
        takeselfie();
        save();
    },5000)
}

camera = document.getElementById("camera")

Webcam.set({

    width : 360,
    height: 250,
    image_format : "png",
    png_quality : 90

})

function takeselfie(){

    Webcam.snap(function(w){
        document.getElementById("pic").innerHTML = "<img id='finalimg' src='" + w +"'>"
    })
}

function save(){

    link1 = document.getElementById("link")
    image = document.getElementById("finalimg").src
    link1.href = image
    link1.click()
}
