import press1 from './assets/audio/typing/press1.mp3'
import press2 from './assets/audio/typing/press2.wav'
import press3 from './assets/audio/typing/press3.mp3'
import press4 from './assets/audio/typing/press4.mp3'

export default function playTypingAudio(){
    let sounds = [press1, press2, press3, press4]
    let randomSound = sounds[Math.floor(Math.random()*sounds.length)]
    let newAudio = new Audio(randomSound)
    newAudio.volume = 0.2
    newAudio.play()
}