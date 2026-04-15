import { useState, useEffect } from "react"

import Key from "./key"

import playTypingAudio from "./playTypingAudio"
import SoundHandler from "./soundHandler"

export default function Keyboard(){
    const [keys, setKeys] = useState(() => new Set())
    const [keysRecord, setKeysRecord] = useState(0)
    const [alreadyPressed, setAlreadyPressed] = useState(() => new Set())
    const [sound, setSound] = useState(true)

    const row1 = [
                    [
                        ['Esc', 'Escape'],
                    ],
                    [
                        ['F1', 'F1'],
                        ['F2', 'F2'],
                        ['F3', 'F3'],
                        ['F4', 'F4'],
                    ],
                    [
                        ['F5', 'F5'],
                        ['F6', 'F6'],
                        ['F7', 'F7'],
                        ['F8', 'F8'],
                    ],
                    [
                        ['F9', 'F9'],
                        ['F10', 'F10'],
                        ['F11', 'F11'],
                        ['F12', 'F12'],
                    ]
                ]
    const row2 = [
                    ['`', 'Backquote', '2xl:w-13 xl:w-11 w-7 2xl:h-15 xl:h-13 h-11'],
                    ['1', 'Digit1'],
                    ['2', 'Digit2'],
                    ['3', 'Digit3'],
                    ['4', 'Digit4'],
                    ['5', 'Digit5'],
                    ['6', 'Digit6'],
                    ['7', 'Digit7'],
                    ['8', 'Digit8'],
                    ['9', 'Digit9'],
                    ['0', 'Digit0'],
                    ['-', 'Minus'],
                    ['=', 'Equal'],
                    ['Backspace', 'Backspace', '2xl:w-27 xl:w-25 w-20 2xl:h-15 xl:h-13 h-11'],
                ]
    const row3 = [
                    ['⇆Tab', 'Tab', '2xl:w-22 xl:w-20 w-14 2xl:h-15 xl:h-13 h-11'],
                    ['q', 'KeyQ'],
                    ['w', 'KeyW'],
                    ['e', 'KeyE'],
                    ['r', 'KeyR'],
                    ['t', 'KeyT'],
                    ['y', 'KeyY'],
                    ['u', 'KeyU'],
                    ['i', 'KeyI'],
                    ['o', 'KeyO'],
                    ['p', 'KeyP'],
                    ['[', 'BracketLeft'],
                    [']', 'BracketRight'],
                    ['\\', 'Backslash', '2xl:w-20 xl:w-18 w-13 2xl:h-15 xl:h-13 h-11'],
                ]
    const row4 = [
                    ['CapsLock', 'CapsLock', '2xl:w-25 xl:w-23 w-16 2xl:h-15 xl:h-13 h-11'],
                    ['a', 'KeyA'],
                    ['s', 'KeyS'],
                    ['d', 'KeyD'],
                    ['f', 'KeyF'],
                    ['g', 'KeyG'],
                    ['h', 'KeyH'],
                    ['j', 'KeyJ'],
                    ['k', 'KeyK'],
                    ['l', 'KeyL'],
                    [';', 'Semicolon'],
                    ["'", 'Quote'],
                    ['↵Enter', 'Enter', '2xl:w-27 xl:w-25 w-20 2xl:h-15 xl:h-13 h-11'],
                ]
    const row5 = [
                    ['⇧Shift', 'ShiftLeft', '2xl:w-34 xl:w-32 w-22 2xl:h-15 xl:h-13 h-11'],
                    ['z', 'KeyZ'],
                    ['x', 'KeyX'],
                    ['c', 'KeyC'],
                    ['v', 'KeyV'],
                    ['b', 'KeyB'],
                    ['n', 'KeyN'],
                    ['m', 'KeyM'],
                    [',', 'Comma'],
                    ['.', 'Period'],
                    ['/', 'Slash'],
                    ['⇧Shift', 'ShiftRight', '2xl:w-36 xl:w-34 w-24 2xl:h-15 xl:h-13 h-11'],
                ]
    const row6 = [
                    ['Ctrl', 'ControlLeft', '2xl:w-20 xl:w-18 w-14 2xl:h-15 xl:h-13 h-11'],
                    ['⊞', 'MetaLeft', '2xl:w-20 xl:w-18 w-14 2xl:h-15 xl:h-13 h-11'],
                    ['Alt', 'AltLeft', '2xl:w-20 xl:w-18 w-14 2xl:h-15 xl:h-13 h-11'],
                    ['Space', 'Space', '2xl:w-105 xl:w-93 w-77 2xl:h-15 xl:h-13 h-11'],
                    ['Alt', 'AltRight', '2xl:w-20 xl:w-18 w-14 2xl:h-15 xl:h-13 h-11'],
                    ['☰', 'ContextMenu', '2xl:w-20 xl:w-18 w-14 2xl:h-15 xl:h-13 h-11'],
                    ['Control', 'ControlRight', '2xl:w-20 xl:w-18 w-14 2xl:h-15 xl:h-13 h-11'],
                ]
    const specialNav =[
                    ['PrtScr', 'PrintScreen'],
                    ['Scrl Lk', 'ScrollLock'],
                    ['Pause', 'Pause'],
                ]
    const navigation = [
                    [
                        ['Ins', 'Insert'],
                        ['Home', 'Home'],
                        ['Pg Up', 'PageUp'],
                    ],
                    [
                        ['Del', 'Delete'],
                        ['End', 'End'],
                        ['Pg Dn', 'PageDown'],
                    ]
                ]
    const arrows = [
                    [
                        ['↑', 'ArrowUp'],
                    ],
                    [
                        ['←', 'ArrowLeft'],
                        ['↓', 'ArrowDown'],
                        ['→', 'ArrowRight'],
                    ]
                ]
    const numPad = [
                    [
                        ['NumLk', 'NumLock'],
                        ['/', 'NumpadDivide'],
                        ['*', 'NumpadMultiply'],
                        ['-', 'NumpadSubtract']
                    ],
                    [
                        ['7', 'Numpad7'],
                        ['8', 'Numpad8'],
                        ['9', 'Numpad9'],
                        ['+', 'NumpadAdd', 'row-span-2 2xl:h-31 xl:h-27 h-23 2xl:w-15 xl:w-13 w-11'],
                    ],
                    [
                        ['4', 'Numpad4'],
                        ['5', 'Numpad5'],
                        ['6', 'Numpad6'],
                    ],
                    [
                        ['1', 'Numpad1'],
                        ['2', 'Numpad2'],
                        ['3', 'Numpad3'],
                        ['Enter', 'NumpadEnter', 'row-span-2 2xl:h-31 xl:h-27 h-23 2xl:w-15 xl:w-13 w-11'],
                    ],
                    [
                        ['0', 'Numpad0', 'col-span-2 2xl:h-15 xl:h-13 h-11'],
                        ['.', 'NumpadDecimal'],
                    ]
                ]
                
    useEffect(()=>{
        const handleKeyDown = (e) => {
            let key = e.code
            if (e.key != 'F12') e.preventDefault()            
            if (e.repeat) return;
            
            if (sound){
                playTypingAudio()
            }

            if (!alreadyPressed.has(key)){
                setAlreadyPressed((prev) => {
                    const copy = new Set(prev)
                    copy.add(key)
                    return copy
                })
            }

            setKeys((prev) => {
                const copy = new Set(prev)
                copy.add(key)
                
                setKeysRecord((prevRecord) =>{
                    return (copy.size > prevRecord ? copy.size : prevRecord)
                })

                return copy
            })
        }

        const handleKeyUp = (e) => {
            e.preventDefault()
            setKeys((prev) => {
                const copy = new Set(prev)
                copy.delete(e.code)
                return copy
            })
        }

        const clearKeys = () => {
            setKeys(new Set())
        }

        const preventContextMenu = (e) => e.preventDefault() 
        
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        window.addEventListener("blur", clearKeys)
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) clearKeys()
        })
        window.addEventListener("contextmenu", preventContextMenu)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
            window.removeEventListener("blur", clearKeys)
        }
    }, [sound])

    return(
        <div>
            <p className="text-[#7ebdc2ff] text-xl font-semibold mb-5">Most simultaneous keys: <span className="font-bold">{keysRecord}</span></p>
            <div className="flex flex-row">
                <div>
                    <div className="flex justify-between mb-4">
                        {row1.map((group, k) =>(
                            <div className="flex xl:gap-2 gap-1">
                                {group.map((keyMajor, l) => {    
                                    return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="flex 2xl:gap-2 gap-1 justify-between mb-1">
                        {row2.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex 2xl:gap-2 gap-1 justify-between mb-1">
                        {row3.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex 2xl:gap-2 gap-1 justify-between mb-1">
                        {row4.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex 2xl:gap-2 gap-1 justify-between mb-1">
                        {row5.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex 2xl:gap-2 gap-1 justify-between">
                        {row6.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                </div>

                <div className="xl:ml-2 ml-1">
                    <div className="flex mb-4 gap-x-1">
                        {specialNav.map((keyMajor, k) => {
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="2xl:mb-17 xl:mb-15 mb-13">
                        {navigation.map((group, k) => (
                            <div className="flex mb-1 gap-x-1">
                                {group.map((keyMajor, k) => {
                                    return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                                })}
                            </div>
                        ))}
                    </div>
                    <div>
                        {arrows.map((group, k) => (
                            <div className="flex justify-center gap-x-1 mb-1">
                                {group.map((keyMajor, k) => {
                                    return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:ml-2 ml-1">
                    <div className="relative xl:h-15 h-11 2xl:mb-4 xl:mb-2 mb-4">
                        <SoundHandler className='absolute top-1/2 left-1/2 -translate-1/2' sound={sound} setSound={setSound}/>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-5 gap-x-1 xl:gap-y-1 gap-y-1">
                        {numPad.map((group, k) => (
                            group.map((keyMajor, k) => {
                                return(
                                    <Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>
                                )
                            })
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}