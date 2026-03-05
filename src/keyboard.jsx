import { useState, useEffect } from "react"

import Key from "./key"

export default function Keyboard(){
    let [keys, setKeys] = useState(() => new Set())
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
                    ['`', 'Backquote'],
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
                    ['Backspace', 'Backspace'],
                ]
    const row3 = [
                    ['Tab', 'Tab', 'min-w-22 min-h-15'],
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
                    ['\\', 'Backslash'],
                ]
    const row4 = [
                    ['CapsLock', 'CapsLock', 'min-w-27 min-h-15'],
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
                    ['Enter', 'Enter'],
                ]
    const row5 = [
                    ['Shift', 'ShiftLeft', 'min-w-32 min-h-15'],
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
                    ['Shift', 'ShiftRight'],
                ]
    const row6 = [
                    ['Control', 'ControlLeft'],
                    ['Meta', 'MetaLeft'],   // Windows / Cmd
                    ['Alt', 'AltLeft'],
                    ['Space', 'Space'],
                    ['Alt', 'AltRight'],
                    ['Meta', 'MetaRight'],
                    ['ContextMenu', 'ContextMenu'],
                    ['Control', 'ControlRight'],
                ]
    const specialNav =[
                    ['PrtScr', 'PrintScreen'],
                    ['Scroll Lock', 'ScrollLock'],
                    ['Pause', 'Pause'],
                ]
    const navigation = [
                    [
                        ['Ins', 'Insert'],
                        ['Home', 'Home'],
                        ['Page Up', 'PageUp'],
                    ],
                    [
                        ['Delete', 'Delete'],
                        ['End', 'End'],
                        ['Page Down', 'PageDown'],
                    ]
                ]
    const arrows = [
                    [
                        ['Up', 'ArrowUp'],
                    ],
                    [
                        ['Left', 'ArrowLeft'],
                        ['Down', 'ArrowDown'],
                        ['Right', 'ArrowRight'],
                    ]
                ]
    const numPad = [
                    [
                        ['Num Lock', 'NumLock'],
                        ['/', 'NumpadDivide'],
                        ['*', 'NumpadMultiply'],
                        ['-', 'NumpadSubtract']
                    ],
                    [
                        ['7', 'Numpad7'],
                        ['8', 'Numpad8'],
                        ['9', 'Numpad9'],
                        ['+', 'NumpadAdd'],
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
                        ['Enter', 'NumpadEnter'],
                    ],
                    [
                        ['0', 'Numpad0'],
                        ['.', 'NumpadDecimal'],
                    ]
                ]
                
    useEffect(()=>{
        const handleKeyDown = (e) => {
            if (e.key != 'F12'){
                e.preventDefault()
            }
            console.log(e.code)
            setKeys((prev) => {
                const copy = new Set(prev)
                copy.add(e.code)
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
        <div className="flex flex-row">
            {/* {[...keys].map((keyPress, key) => {
                return(<div>
                    {keyPress}
                </div>)
            }
            )} */}
            <div>
                <div className="flex gap-10 w-full">
                    {row1.map((group, k) =>(
                        <div>
                            {group.map((keyMajor, l) => {    
                                return(<Key name={keyMajor[0]} pressed={keys.has(keyMajor[1])}/>)
                            })}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2">
                    {row2.map((keyMayor, k) =>{
                        return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} className={keyMayor[2]}/>)
                    })}
                </div>
                <div className="flex gap-2">
                    {row3.map((keyMayor, k) =>{
                        return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} className={keyMayor[2]}/>)
                    })}
                </div>
                <div className="flex gap-2">
                    {row4.map((keyMayor, k) =>{
                        return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} className={keyMayor[2]}/>)
                    })}
                </div>
                <div className="flex gap-2">
                    {row5.map((keyMayor, k) =>{
                        return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} className={keyMayor[2]}/>)
                    })}
                </div>
                <div className="flex gap-2">
                    {row6.map((keyMayor, k) =>{
                        return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} className={keyMayor[2]}/>)
                    })}
                </div>
            </div>

            <div className="">
                <div>
                    {specialNav.map((keyMayor, k) => {
                        return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} className={keyMayor[2]}/>)
                    })}
                </div>
                <div>
                    {navigation.map((group, k) => (
                        <div>
                            {group.map((keyMayor, k) => {
                                return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} />)
                            })}
                        </div>
                    ))}
                </div>
                <div>
                    {arrows.map((group, k) => (
                        <div>
                            {group.map((keyMayor, k) => {
                                return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} />)
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                {numPad.map((group, k) => (
                    <div>
                        {group.map((keyMayor, k) => {
                            return(<Key name={keyMayor[0]} pressed={keys.has(keyMayor[1])} className={keyMayor[2]}/>)
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}