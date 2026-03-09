export default function Key({name='a', width='10', pressed=false, className=false}){
    return(
        <div className={`
            ${className ? className:'inline-block min-w-15 min-h-15'}
            px-3 py-2 border-2 rounded-sm text-center
            ${pressed ? 'scale-95':'border-[#7209b7]'}`}>
            <p>{name}</p>
        </div>
    )
}