let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1;
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishes(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Mam")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Mam")
    }else{
        speak("Good evening Mam")
    }
}


let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new SpeechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase())

}


btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello mam,how can i help you?");
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant");
    }else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
   else if(message.includes("open google")){
    speak("opening google..")
    window.open("https://www.google.co.in/")
}

 else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
 }
else{
   let finalText= "this is what i found on the internet regarding"+message.replace("sarah","")||message.replace("sara","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("sarah","")}`,"_blank")
}
}
