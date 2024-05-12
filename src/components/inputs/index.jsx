// eslint-disable-next-line react/prop-types
const AhInput=({type,label, name, placeholder, error=''  })=>{
    return (
        <div className="w-full py-2">
            <label className="text-sm block " htmlFor={name}>{label}</label>
            <input  className="block w-full mt-2 px-4 py-2 bg-[#252A41]  rounded-md text-base shadow-sm placeholder-slate-400 focus:outline-none  focus:border-[#0E78F9] focus:ring-1 focus:ring-[#0E78F9]" type={type}name={name} id={name} placeholder={placeholder} />
            <p className="error text-[red] text-sm leading-4">{error}</p>
        </div>
    )
}
export default AhInput;