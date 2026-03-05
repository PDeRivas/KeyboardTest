export default function Key({name='a', width='10', pressed=false}){
    return(
        <div className={`inline-block min-w-12 px-3 py-2 border-2 rounded-sm text-center 
        ${pressed ? '':'border-[#7209b7]'}`}>
            <p>{name}</p>
        </div>
    )
}