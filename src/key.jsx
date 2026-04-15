export default function Key({name='a', pressed=false, className=false, alreadyPressed=false}){
    return(
        <div className={`
            ${className ? className:'inline-block 2xl:w-15 xl:w-13 w-11 2xl:h-15 xl:h-13 h-11'}
            py-2 border-2 rounded-sm text-center
            2xl:text-base xl:text-sm text-xs
            select-none
            transition-transform
            ${pressed ? 'scale-95': alreadyPressed ? 'border-[#BB4430]':'border-[#7209b7]'}`}>
            {name}
        </div>
    )
}