import { useState, useEffect } from "react"

import Key from "./key"

export default function Keyboard(){
    const [keys, setKeys] = useState(() => new Set())
    const [keysRecord, setKeysRecord] = useState(0)
    const [alreadyPressed, setAlreadyPressed] = useState(() => new Set())
    
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
                    ['`', 'Backquote', 'w-13 h-15'],
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
                    ['Backspace', 'Backspace', 'w-27 h-15'],
                ]
    const row3 = [
                    ['⇆Tab', 'Tab', 'w-22 h-15'],
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
                    ['\\', 'Backslash', 'w-20 h-15'],
                ]
    const row4 = [
                    ['CapsLock', 'CapsLock', 'w-25 h-15'],
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
                    ['↵Enter', 'Enter', 'w-27 h-15'],
                ]
    const row5 = [
                    ['⇧Shift', 'ShiftLeft', 'w-34 h-15'],
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
                    ['⇧Shift', 'ShiftRight', 'w-36 h-15'],
                ]
    const row6 = [
                    ['Ctrl', 'ControlLeft', 'w-20 h-15'],
                    ['⊞', 'MetaLeft', 'w-20 h-15'],
                    ['Alt', 'AltLeft', 'w-20 h-15'],
                    ['Space', 'Space', 'w-105 h-15'],
                    ['Alt', 'AltRight', 'w-20 h-15'],
                    ['☰', 'ContextMenu', 'w-20 h-15'],
                    ['Control', 'ControlRight', 'w-20 h-15'],
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
                        ['+', 'NumpadAdd', 'row-span-2 h-31 w-15'],
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
                        ['Enter', 'NumpadEnter', 'row-span-2 h-31 w-15'],
                    ],
                    [
                        ['0', 'Numpad0', 'col-span-2 h-15'],
                        ['.', 'NumpadDecimal'],
                    ]
                ]
                
    useEffect(()=>{
        const handleKeyDown = (e) => {
            let key = e.code
            if (e.key != 'F12'){
                e.preventDefault()
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
    }, [])

    return(
        <div>
            <p className="text-[#7ebdc2ff] text-xl font-semibold mb-5">Most simultaneous keys: <span className="font-bold">{keysRecord}</span></p>
            <div className="flex flex-row">
                <div>
                    <div className="flex gap-10 justify-between mb-4">
                        {row1.map((group, k) =>(
                            <div className="flex gap-2">
                                {group.map((keyMajor, l) => {    
                                    return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2 justify-between mb-1">
                        {row2.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex gap-2 justify-between mb-1">
                        {row3.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex gap-2 justify-between mb-1">
                        {row4.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex gap-1 justify-between mb-1">
                        {row5.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="flex gap-2 justify-between mb-1">
                        {row6.map((keyMajor, k) =>{
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                </div>

                <div className="ml-2">
                    <div className="flex mb-4 gap-x-1">
                        {specialNav.map((keyMajor, k) => {
                            return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])} className={keyMajor[2]} alreadyPressed={alreadyPressed.has(keyMajor[1])}/>)
                        })}
                    </div>
                    <div className="mb-17">
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

                <div className="grid grid-cols-4 grid-rows-5 gap-x-1 mt-19 ml-2">
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
    )
}