import Sound from './assets/svg/sound.svg?react'
import Mute from './assets/svg/mute.svg?react'

export default function SoundHandler({sound, setSound}){
    const handleSound = () =>{
        setSound(!sound)
    }

    return(
        <button className={`w-10 h-10 flex items-center justify-center border-2 ${sound ? 'border-[#7209b7]':'border-[#BB4430]'} hover:border-white hover:border`}  onClick={handleSound}>
            {sound ?
            <Sound className='w-5 h-5 text-white'/>
            :
            <Mute className='w-5 h-5 text-white'/>
        }
        </button>
    )
}