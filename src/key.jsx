export default function Key({name='a', pressed=false, className=false, alreadyPressed=false}){
    return(
        <div className={`
            ${className ? className:'inline-block w-15 h-15'}
            py-2 border-2 rounded-sm text-center
            transition-transform
            ${pressed ? 'scale-95': alreadyPressed ? 'border-[#BB4430]':'border-[#7209b7]'}`}>
            {name}
        </div>
    )
}