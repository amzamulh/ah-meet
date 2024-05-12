// eslint-disable-next-line react/prop-types
const AhModal = ({heading, children}) => {
  return (
    <div className="fixed left-0 top-0 w-full h-full z-50 bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
        <div
      className={`bg-[#121212] w-auto h-auto text-white rounded-lg border-[1px] border-[#1C1F2E] shadow-xl overflow-hidden`}
    >
      {heading && (
        <div className="bg-[#1C1F2E] py-2 px-4 flex items-center jusfify-between text-xl leading-normal ">
          {heading}
        </div>
      )}
      <div className='p-4'>{children}</div>
    </div>
    </div>
  )
}

export default AhModal